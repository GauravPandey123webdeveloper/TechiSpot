import React, { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(URL.createObjectURL(uploadedFile));
    setFileType(uploadedFile.type);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const mediaFile = event.dataTransfer.files[0];
    setFile(URL.createObjectURL(mediaFile));
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="file"
        accept="image/jpeg, image/png, image/bmp, image/svg, video/mp4, video/quicktime, video/avi, video/x-ms-wmv, video/mpeg"
        onChange={handleFileChange}
      />
      {file && (
        <div>
          {fileType.startsWith("image") ? (
            <img src={file} alt="Preview" style={{ maxWidth: "90%" }} />
          ) : (
            <video src={file} controls style={{ maxWidth: "90%" }} />
          )}
        </div>
      )}
      <p>Drag & drop an image or video here or click to select one</p>
    </div>
  );
}