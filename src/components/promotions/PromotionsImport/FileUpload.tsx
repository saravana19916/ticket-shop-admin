import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
const SPAN = styled.span`
  color: #4d515c;
  font-size: 10px;
  display: block;
`;
const FileUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        // Check for file size > 1MB
        alert("File size exceeds 1.0 MB");
        return;
      }
      setFileName(file.name);
    }
  };

  return (
    <div className="mt-4 flex-grow-1">
      <label
        htmlFor="file-upload"
        style={{ border: "1px dashed", cursor: "pointer" }}
        className="rounded-pill w-100 px-5 py-1"
      >
        {/* Invisible File Input */}
        <input
          type="file"
          className="d-none"
          id="file-upload"
          accept=".csv,.xlsx,.xls" // Restrict to specific formats
          onChange={handleFileChange}
        />
        {/* Visible Upload Box Content */}
        <div className="d-flex flex-row gap-4 align-items-center">
          <PaperClipIcon className="w-6 h-6 text-info" />
          <span className="d-inline-block mt-3 mb-3">
            <span>Drop your file here</span>
            <span className="text-muted">(Maxi Size: 1.0 MB)</span>
          </span>
          {fileName && (
            <p className="text-success mt-3">Selected File: {fileName}</p>
          )}
        </div>
      </label>
      {/* Note Section */}
      <SPAN className="mt-3">
        <strong>Note:</strong> Maximum 100 tickets per row & format mobile
        column to Numeric.
      </SPAN>
    </div>
  );
};

export default FileUpload;
