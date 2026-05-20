import React, { useState } from 'react';
import { Download, Loader2, ImageIcon, FolderOpen } from 'lucide-react';
import JSZip from 'jszip';

export default function LocusLogo() {
  const [driveUrl, setDriveUrl] = useState('');
  const [status, setStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const extractFolderId = (url) => {
    const match = url.match(/folders\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : null;
  };

  const addWatermark = async (imageBlob, logoImg) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw original image
        ctx.drawImage(img, 0, 0);
        
        // Calculate logo dimensions (30% of image width)
        const scale = 0.30;
        const newLogoW = Math.floor(img.width * scale);
        const aspectRatio = logoImg.height / logoImg.width;
        const newLogoH = Math.floor(newLogoW * aspectRatio);
        
        // Position for bottom-right corner with padding
        const padding = 40;
        const xOffset = img.width - newLogoW - padding;
        const yOffset = img.height - newLogoH - padding;
        
        // Draw logo
        ctx.drawImage(logoImg, xOffset, yOffset, newLogoW, newLogoH);
        
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg', 0.95);
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      reader.onerror = () => reject(new Error('Failed to read image'));
      reader.readAsDataURL(imageBlob);
    });
  };

  const loadLogo = () => {
    return new Promise((resolve, reject) => {
      const logo = new Image();
      logo.crossOrigin = 'anonymous';
      logo.onload = () => resolve(logo);
      logo.onerror = () => reject(new Error('Failed to load logo'));
      logo.src = '/logowhite.png';
    });
  };

  const fetchImagesFromDrive = async (folderId) => {
    const apiKey = 'AIzaSyALXMo3Lhb0pWAcvkLS8Zq1D0bFodjCp04'; // User needs to add their API key
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}&fields=files(id,name,mimeType)`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch files from Google Drive');
    }
    
    const data = await response.json();
    return data.files || [];
  };

  const downloadImage = async (fileId) => {
    const apiKey = 'AIzaSyALXMo3Lhb0pWAcvkLS8Zq1D0bFodjCp04';
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to download image');
    }
    
    return await response.blob();
  };

  const handleProcess = async () => {
    const folderId = extractFolderId(driveUrl);
    
    if (!folderId) {
      setStatus('Invalid Google Drive folder URL');
      return;
    }

    setIsProcessing(true);
    setStatus('Loading logo...');
    setProgress({ current: 0, total: 0 });

    try {
      // Load logo
      const logo = await loadLogo();
      
      // Fetch images from Drive
      setStatus('Fetching images from Google Drive...');
      const files = await fetchImagesFromDrive(folderId);
      
      if (files.length === 0) {
        setStatus('No images found in folder');
        setIsProcessing(false);
        return;
      }

      setProgress({ current: 0, total: files.length });
      setStatus(`Processing ${files.length} images...`);

      // Create ZIP
      const zip = new JSZip();
      const imgFolder = zip.folder('watermarked_images');

      // Process each image
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setStatus(`Processing ${file.name} (${i + 1}/${files.length})...`);
        setProgress({ current: i + 1, total: files.length });

        try {
          const imageBlob = await downloadImage(file.id);
          const watermarkedBlob = await addWatermark(imageBlob, logo);
          imgFolder.file(file.name, watermarkedBlob);
        } catch (err) {
          console.error(`Failed to process ${file.name}:`, err);
        }
      }

      // Generate and download ZIP
      setStatus('Creating ZIP file...');
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = 'watermarked_images.zip';
      link.click();
      
      URL.revokeObjectURL(link.href);
      setStatus('Download complete!');
      
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <ImageIcon className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Image Watermarker</h1>
          </div>
          
          <p className="text-gray-600 mb-6">
            Add a watermark to all images in a Google Drive folder and download them as a ZIP file.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Google Drive Folder URL
              </label>
              <div className="relative">
                <FolderOpen className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={driveUrl}
                  onChange={(e) => setDriveUrl(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  disabled={isProcessing}
                />
              </div>
            </div>

            <button
              onClick={handleProcess}
              disabled={isProcessing || !driveUrl}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Process & Download
                </>
              )}
            </button>

            {status && (
              <div className={`p-4 rounded-lg ${isProcessing ? 'bg-blue-50 text-blue-800' : status.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                <p className="font-medium">{status}</p>
                {progress.total > 0 && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(progress.current / progress.total) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm mt-1">{progress.current} of {progress.total} images</p>
                  </div>
                )}
              </div>
            )}

          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">How to use:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Paste your Google Drive folder URL</li>
              <li>Click "Process & Download"</li>
              <li>Wait for the watermarked images to be downloaded as a ZIP file</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}