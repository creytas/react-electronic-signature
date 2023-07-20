import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import UploadDocument from './UploadDocument';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const signatureRef = useRef();

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
    const signatureData = signatureRef.current.toDataURL();
    // Ici, tu peux traiter la signatureData et l'associer au document sélectionné (selectedFile).
    console.log(`signatureData: ${signatureData}`);
  };

  const handleDocumentUploaded = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100">
      {selectedFile ? (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Signature électronique</h1>
          <div className="mb-4">
            {/* Affiche le document uploadé */}
            <p className="text-lg font-bold mb-2">Document sélectionné :</p>
            <p>{selectedFile.name}</p>
          </div>
          <div className="mb-4">
            <SignatureCanvas
              ref={signatureRef}
              canvasProps={{ width: 500, height: 200, className: 'signatureCanvas' }}
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
              onClick={handleClear}
            >
              Effacer
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
              onClick={handleSave}
            >
              Enregistrer
            </button>
          </div>
        </div>
      ) : (
        <UploadDocument onDocumentUploaded={handleDocumentUploaded} />
      )}
    </div>
  );
}

export default App;
