import React, { useState } from "react";

export default function Upload({ handleImageUpload }) {

  // State to store the uploaded file and its type
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");

  // Function to handle file change when selected from input
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];

    // Create a preview URL for the uploaded file
    setFile(URL.createObjectURL(uploadedFile));

    // Set the type of the uploaded file
    setFileType(uploadedFile.type);
  };

  // Function to handle drag over the drop zone
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle drop of files into the drop zone
  const handleDrop = (event) => {
    event.preventDefault();
    const mediaFile = event.dataTransfer.files[0];

    // Create a preview URL for the dropped file
    setFile(URL.createObjectURL(mediaFile));

    // Set the type of the dropped file
    setFileType(mediaFile.type);
  };

  // Function to handle drag leaving the drop zone
  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  // Function to handle the upload button click
  const handleUpload = (event) => {
    event.preventDefault();
    
    // Call the parent component's handleImageUpload function with the file type and file
    handleImageUpload(fileType, file);
  };

  return (
    <>
      {/* Drop zone for dragging and dropping files */}
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
        {/* Display the preview of the uploaded file */}
        {file && (
          <div>
            {fileType.startsWith("image") ? (
              <img src={file} alt="Preview" style={{ maxWidth: "90%" }} />
            ) : (
              <video src={file} controls style={{ maxWidth: "90%" }} />
            )}
          </div>
        )}
        {/* Instructions for selecting or dropping files */}
        <h2>Select files to begin</h2>
        <p>Drag & drop an image or video here or click to select one</p>
        {/* Input field for selecting files */}
        <input
          type="file"
          accept="image/jpeg, image/png, image/bmp, image/svg, video/mp4, video/quicktime, video/avi, video/x-ms-wmv, video/mpeg"
          onChange={handleFileChange}
        />
      </div>
      {/* Upload button */}
      <div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  );
}
