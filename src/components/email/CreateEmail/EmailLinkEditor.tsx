import React, { useState } from "react";
import styled from "styled-components";
import EmailLinkEditorModel from "./EmailLinkEditorModel";

interface EmailLinkEditorProps {
  initialLink: string;
  onSave: (newLink: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h2`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;
`;

const EmailLink = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const EditButton = styled.span`
  font-weight: 600;
  color: #007bff;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  font-size: 14px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const EmailLinkEditor: React.FC<EmailLinkEditorProps> = ({
  initialLink,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [emailLink, setEmailLink] = useState<string>(initialLink);
  const [showEditEmail, setShowEditEmail] = useState<boolean>(false);

  const viewEditEmailClose = () => setShowEditEmail(false);

  const handleSave = () => {
    onSave(emailLink);
    setIsEditing(false);
  };

  return (
    <>
      <EmailLinkEditorModel show={showEditEmail} onClose={viewEditEmailClose} />
      <div className="d-flex flex-column mt-8">
        <h2 className="fw-600 fs-16px mb-6">Share Your Email</h2>
        <h4>Email Link</h4>

        {isEditing ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input
              type="text"
              value={emailLink}
              onChange={(e) => setEmailLink(e.target.value)}
            />
            <span
              className="text-primary fw-semibold cursor-pointer ms-3"
              onClick={handleSave}
            >
              Save
            </span>
          </div>
        ) : (
          <EmailLink>
            {emailLink}
            <span
              className="text-primary fw-semibold cursor-pointer ms-3"
              onClick={() => setShowEditEmail(true)}
            >
              Edit
            </span>
          </EmailLink>
        )}

        <p>Want to brand your email link? Click edit to create a custom URL.</p>
      </div>
    </>
  );
};

export default EmailLinkEditor;
