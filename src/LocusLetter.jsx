import React, { useRef, useState } from 'react';

export default function LetterheadApp() {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    body: '',
    date: new Date().toISOString().split('T')[0],
    refNo: '1',
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef(null);

  const handleChange = (e) => {
    var text = e.target.value;
    text.replace(/([^\n])\n([^\n])/g, '$1 $2');
    setFormData({
      ...formData,
      [e.target.name]: text,
    });
  };
  function generateReferenceNumber(serial) {
  // Get today's date
  const today = new Date();

  // Format the date as YYYYMMDD
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const dd = String(today.getDate()).padStart(2, '0');
  const datePart = `${yyyy}${mm}${dd}`;

  // Format serial number as 3 digits (e.g., 001, 002)
  const serialPart = String(serial).padStart(3, '0');

  // Combine and return
  return datePart + serialPart;
}
  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const element = previewRef.current;
      element.style.display = 'block';      // or flex, grid, etc
await new Promise(r => setTimeout(r, 100)); // let it render
      const canvas = await html2canvas(element, {
        scale: 1,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
      });

      const imgData = canvas.toDataURL('image/png',0.5);
      const pdf = new jsPDF('p', 'pt', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 595, 841); // A4 in pt
      const filename = `letterhead_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
        if (previewRef.current) {
            previewRef.current.style.display = 'none'; // Hide the preview after download
        }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Letterhead Generator</h1>
          <p className="text-gray-600">Create and download professional letters with custom letterhead</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="lg:w-2/5 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Letter Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
                <textarea
                  name="to"
                  placeholder="Enter recipient name/organization"
                  value={formData.to}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  name="subject"
                  placeholder="Enter letter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference No.</label>
                  <input
                    name="refNo"
                    placeholder="REF-001"
                    value={formData.refNo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message Body</label>
                <textarea
                  name="body"
                  placeholder="Enter your letter content here..."
                  value={formData.body}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
                />
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:w-3/5 flex flex-col items-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">Live Preview</h3>
              <p className="text-sm text-gray-600 text-center">Preview your letter before downloading</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div
                className="relative border border-[#8b96a6]"
                // ref={previewRef}
                style={{
                  width: '595px',
                  height: '842px',
                  backgroundImage: 'url("/letterhead.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top left',
                  fontSize: '11px',
                  fontFamily: '"Times New Roman", serif',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: '164px', left: '165px', right: '40px' }}>
                  <div className='flex flex-row justify-between mb-[60px]'>
                     {formData.refNo && (
                    <div style={{ marginLeft: '45px' }}>
                    {generateReferenceNumber(formData.refNo)}
                    </div>
                  )}

                  {formData.date && (
                    <div style={{ textAlign: 'right' }}>
                      {formData.date}
                    </div>
                  )}

                 
                  </div>

                  {formData.to && (
                    <div style={{ marginBottom: '20px' , whiteSpace:'pre-line'}}>
                      To {formData.to}
                    </div>
                  )}

                  {formData.subject && (
                    <div style={{ marginBottom: '30px', fontWeight: 'bold' }}>
                      Subject: {formData.subject}
                    </div>
                  )}

                  {formData.body ? (
                    <div style={{lineHeight: '1.5' ,textAlign: 'justify',whiteSpace:'pre-line'}}>
                      {formData.body}
                    </div>
                  ) : (
                    <div style={{ color: '#9CA3AF', textAlign: 'center', marginTop: '100px' }}>
                      Fill in the form to see your letter preview
                    </div>
                  )}
                </div>
              </div>
            </div>
              <div
                ref={previewRef}
                className="relative border border-[#8b96a6]"
                style={{
                display: 'none',
                  width: '1416px',
                  height: '2048px',
                  backgroundImage: 'url("/letterhead.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top left',
                  fontSize: '26px',
                  fontFamily: '"Times New Roman", serif',
                  position: 'relative',
                  lineHeight: '1.5',
                }}
              >
                <div style={{ position: 'absolute', top: '386px', left: '400px', right: '78px' }}>
                   <div className='flex flex-row justify-between mb-[60px]'>
                     {formData.refNo && (
                    <div style={{ marginLeft: '100px' }}>
                    {formData.refNo}
                    </div>
                  )}

                  {formData.date && (
                    <div style={{ textAlign: 'right' }}>
                      {formData.date}
                    </div>
                  )}
                  </div>

                  {formData.to && (
                    <div style={{ marginBottom: '50px', whiteSpace: 'pre-line' }}>
                      To: {formData.to}
                    </div>
                  )}

                  {formData.subject && (
                    <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                      Subject: {formData.subject}
                    </div>
                  )}

                  {formData.body ? (
                    <div style={{ whiteSpace: 'pre-line', lineHeight: '1.5' , textAlign: 'justify'}}>
                      {formData.body}
                    </div>
                  ) : (
                    <div style={{ color: '#9CA3AF', textAlign: 'center', marginTop: '100px' }}>
                      Fill in the form to see your letter preview
                    </div>
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
