// UploadDocument.js
import React from 'react';

function UploadDocument({ onDocumentUploaded }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onDocumentUploaded(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default UploadDocument;
