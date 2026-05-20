import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download, RotateCcw } from 'lucide-react';

const LocusFrame = () => {
  const [image, setImage] = useState(null);
  const [frameImage, setFrameImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [minZoom, setMinZoom] = useState(1);
  const canvasRef = useRef(null);
  const imageInputRef = useRef(null);
  const displaySize = 400;

  // Load frame on mount
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setFrameImage(img);
    };
    img.src = 'frame.png'; // Your hardcoded frame path
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const imgAspect = img.width / img.height;
          const canvasAspect = 1;
          
          let calculatedMinZoom;
          if (imgAspect > canvasAspect) {
            calculatedMinZoom = displaySize / img.height;
          } else {
            calculatedMinZoom = displaySize / img.width;
          }
          
          setImage(img);
          setMinZoom(calculatedMinZoom);
          setZoom(calculatedMinZoom);
          setPosition({ x: 0, y: 0 });
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFrameUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setFrameImage(img);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const constrainPosition = (pos, currentZoom, img) => {
    if (!img) return pos;

    const scaledWidth = img.width * currentZoom;
    const scaledHeight = img.height * currentZoom;

    const maxX = Math.max(0, (scaledWidth - displaySize) / 2);
    const maxY = Math.max(0, (scaledHeight - displaySize) / 2);

    return {
      x: Math.max(-maxX, Math.min(maxX, pos.x)),
      y: Math.max(-maxY, Math.min(maxY, pos.y))
    };
  };

  const handleMouseDown = (e) => {
    if (!image) return;
    setIsDragging(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left - position.x,
      y: e.clientY - rect.top - position.y
    });
  };

  const handleTouchStart = (e) => {
    if (!image || e.touches.length !== 1) return;
    setIsDragging(true);
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - rect.left - position.x,
      y: touch.clientY - rect.top - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !image) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const newPos = {
      x: e.clientX - rect.left - dragStart.x,
      y: e.clientY - rect.top - dragStart.y
    };
    setPosition(constrainPosition(newPos, zoom, image));
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !image || e.touches.length !== 1) return;
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const newPos = {
      x: touch.clientX - rect.left - dragStart.x,
      y: touch.clientY - rect.top - dragStart.y
    };
    setPosition(constrainPosition(newPos, zoom, image));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomChange = (newZoom) => {
    const constrainedZoom = Math.max(minZoom, Math.min(newZoom, 3));
    setZoom(constrainedZoom);
    setPosition(constrainPosition(position, constrainedZoom, image));
  };

  const handleReset = () => {
    setZoom(minZoom);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = displaySize;
    canvas.height = displaySize;

    // Fill background
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, displaySize, displaySize);

    // Draw image if exists
    if (image) {
      ctx.save();
      
      ctx.beginPath();
      ctx.rect(0, 0, displaySize, displaySize);
      ctx.clip();
      
      const scaledWidth = image.width * zoom;
      const scaledHeight = image.height * zoom;
      
      const x = displaySize / 2 + position.x - scaledWidth / 2;
      const y = displaySize / 2 + position.y - scaledHeight / 2;
      
      ctx.drawImage(image, x, y, scaledWidth, scaledHeight);
      ctx.restore();
    }

    // Draw frame overlay if exists
    if (frameImage) {
      ctx.drawImage(frameImage, 0, 0, displaySize, displaySize);
    }
  }, [image, frameImage, position, zoom]);

  const handleDownload = () => {
    if (!image) {
      alert('Please upload a profile picture first!');
      return;
    }

    const downloadCanvas = document.createElement('canvas');
    const ctx = downloadCanvas.getContext('2d');
    const outputSize = 2000;
    downloadCanvas.width = outputSize;
    downloadCanvas.height = outputSize;

    const scale = outputSize / displaySize;

    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, outputSize, outputSize);

    // Draw image
    const scaledWidth = image.width * zoom * scale;
    const scaledHeight = image.height * zoom * scale;
    
    const x = outputSize / 2 + position.x * scale - scaledWidth / 2;
    const y = outputSize / 2 + position.y * scale - scaledHeight / 2;
    
    ctx.drawImage(image, x, y, scaledWidth, scaledHeight);

    // Draw frame overlay if exists
    if (frameImage) {
      ctx.drawImage(frameImage, 0, 0, outputSize, outputSize);
    }

    // Download
    downloadCanvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'locus-profile-2000x2000.png';
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-emerald-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Locus Frame Editor</h1>
        <p className="text-gray-600 mb-8 text-center">Upload your photo and frame, then position and download</p>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <input
            type="file"
            ref={imageInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          
          <button
            onClick={() => imageInputRef.current.click()}
            className="w-full mb-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Upload size={20} />
            {image ? 'Change Photo' : 'Upload Profile Picture'}
          </button>

          <div className="flex justify-center mb-6">
            <div className="relative">
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                className="border-2 border-gray-300 rounded-lg shadow-md cursor-move touch-none"
                style={{ touchAction: 'none' }}
              />
              {!image && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-gray-400">
                    <Upload size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Upload a photo to start</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {image && (
            <>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Zoom
                  </label>
                  <span className="text-sm text-gray-600">{zoom.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min={minZoom}
                  max="3"
                  step="0.01"
                  value={zoom}
                  onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Min</span>
                  <span>Max</span>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw size={20} />
                  Reset
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Download size={20} />
                  Download (2000x2000)
                </button>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                <p className="text-sm text-indigo-800">
                  <strong>Tip:</strong> Drag to reposition • Use zoom slider to adjust size
                </p>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">How to use:</h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Upload your profile picture using the button above</li>
            <li>• Drag the photo to position it perfectly within the frame</li>
            <li>• Use the zoom slider to adjust the size (no white spaces allowed)</li>
            <li>• Click download to save your 2000x2000px framed image</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocusFrame;