import React, { useState, useRef, useEffect } from 'react';
import { QrCode, Camera, Upload, CheckCircle, AlertCircle, X, RotateCcw } from 'lucide-react';
import jsQR from 'jsqr';

const QRScanPage = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setError(null);
      setIsScanning(true);
      
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
        
        videoRef.current.onloadedmetadata = () => {
          startQRDetection();
        };
      }
    } catch (err) {
      setError('Camera access denied or not available');
      setIsScanning(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsScanning(false);
  };

  const startQRDetection = () => {
    intervalRef.current = setInterval(() => {
      if (videoRef.current && canvasRef.current) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const ctx = canvas.getContext('2d');
        
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = detectQRCode(imageData);
        
        if (qrCode) {
          handleQRDetected(qrCode);
        }
      }
    }, 500);
  };

  const detectQRCode = (imageData) => {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    return code ? code.data : null;
  };

  const handleQRDetected = (qrData) => {
    stopCamera();
    
    if (qrData.startsWith('http')) {
      window.open(qrData, '_blank');
    }
    
    setScanResult({
      deviceId: 'EW-2024-001234',
      deviceType: 'Smartphone',
      brand: 'Samsung',
      model: 'Galaxy S20',
      status: 'Registered',
      owner: 'John Doe',
      registrationDate: '2024-01-15',
      estimatedValue: 150,
      qrData: qrData
    });
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const qrCode = detectQRCode(imageData);
      
      if (qrCode) {
        handleQRDetected(qrCode);
      } else {
        // Simulate detection for demo
        setTimeout(() => {
          handleQRDetected('https://ewaste-loop.com/device/EW-2024-001234');
        }, 1000);
      }
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate QR code reading from image
      setTimeout(() => {
        setScanResult({
          deviceId: 'EW-2024-005678',
          deviceType: 'Laptop',
          brand: 'Dell',
          model: 'Inspiron 15',
          status: 'Ready for Collection',
          owner: 'Jane Smith',
          registrationDate: '2024-01-20',
          estimatedValue: 300
        });
      }, 1000);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">QR Code Scanner</h1>
        <p className="text-gray-600">Scan QR codes to track and verify e-waste devices</p>
      </div>

      {/* Scanner Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Scan QR Code</h2>
          
          {!isScanning && !scanResult && (
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                <QrCode className="h-24 w-24 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={startCamera}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Start Camera Scan
                </button>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}
                
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload QR Code Image
                  </button>
                </div>
              </div>
            </div>
          )}

          {isScanning && (
            <div className="text-center">
              <div className="relative w-80 h-80 mx-auto mb-6 border-2 border-primary-500 rounded-lg overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                />
                <canvas ref={canvasRef} className="hidden" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-white rounded-lg relative">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary-400 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary-400 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary-400 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary-400 rounded-br-lg"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-400 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <button
                    onClick={captureImage}
                    className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-colors"
                  >
                    <Camera className="h-6 w-6" />
                  </button>
                  <button
                    onClick={stopCamera}
                    className="bg-red-500/90 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <p className="text-primary-600 font-medium mb-2">Position QR code within the frame</p>
              <p className="text-sm text-gray-500">Camera will automatically detect QR codes</p>
            </div>
          )}

          {scanResult && (
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 border-2 border-green-500 rounded-lg flex items-center justify-center bg-green-50">
                <CheckCircle className="h-24 w-24 text-green-600" />
              </div>
              <p className="text-green-600 font-medium mb-4">QR Code Scanned Successfully!</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setScanResult(null)}
                  className="flex-1 text-primary-600 hover:text-primary-700 font-medium border border-primary-300 py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Scan Another
                </button>
                {scanResult && scanResult.qrData && scanResult.qrData.startsWith('http') && (
                  <button
                    onClick={() => window.open(scanResult.qrData, '_blank')}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Open Link
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Scan Results */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Scan Results</h2>
          
          {!scanResult ? (
            <div className="text-center py-12">
              <QrCode className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No QR code scanned yet</p>
              <p className="text-sm text-gray-400 mt-2">Scan a QR code to see device information</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="font-medium text-green-800">Device Verified</span>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  scanResult.status === 'Registered' 
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {scanResult.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Device ID</label>
                  <p className="text-sm text-gray-900 font-mono bg-gray-50 p-2 rounded">{scanResult.deviceId}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Device Type</label>
                  <p className="text-sm text-gray-900">{scanResult.deviceType}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                  <p className="text-sm text-gray-900">{scanResult.brand}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                  <p className="text-sm text-gray-900">{scanResult.model}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Owner</label>
                  <p className="text-sm text-gray-900">{scanResult.owner}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Registration Date</label>
                  <p className="text-sm text-gray-900">{scanResult.registrationDate}</p>
                </div>
              </div>

              <div className="p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-primary-800">Estimated Value</span>
                  <span className="text-2xl font-bold text-primary-600">${scanResult.estimatedValue}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Schedule Collection
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  View History
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Scans */}
      <div className="card mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Scans</h2>
        <div className="space-y-3">
          {[
            { id: 'EW-2024-001234', type: 'Smartphone', date: '2024-01-25', status: 'Collected' },
            { id: 'EW-2024-001235', type: 'Tablet', date: '2024-01-24', status: 'Pending' },
            { id: 'EW-2024-001236', type: 'Laptop', date: '2024-01-23', status: 'Recycled' }
          ].map((scan, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <QrCode className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{scan.id}</p>
                  <p className="text-sm text-gray-500">{scan.type} • {scan.date}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                scan.status === 'Collected' ? 'bg-green-100 text-green-800' :
                scan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {scan.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QRScanPage;