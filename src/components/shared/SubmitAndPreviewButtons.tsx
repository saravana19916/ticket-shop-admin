import React, { FC, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  ButtonSecondary,
  ButtonSecondaryGrey,
} from "../styledComponents/styledForm";

interface IProps {
  isSubmitted: boolean;
  handleSubmit: () => void;
  croppedImageUrl?: string; // Include croppedImageUrl as an optional prop
  previewLabel?: string;
  buttonClassName?: string;
}

const SubmitAndPreviewButtons: FC<IProps> = ({
  croppedImageUrl,
  previewLabel,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  // Function to handle showing the preview modal
  const handlePreview = () => {
    if (croppedImageUrl) {
      setShowPreview(true);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-start gap-4">
        {/* {isSubmitted ? (
          <>
            <ButtonSuccess type="button" className="btn">
              Done
            </ButtonSuccess>
          </>
        ) : (
          <>
            <ButtonPrimary type="button" className="btn" onClick={handleSubmit}>
              Submit
            </ButtonPrimary>
          </>
        )} */}
        <ButtonSecondaryGrey
          type="button"
          className="btn"
          onClick={handlePreview}
          disabled={!croppedImageUrl}
        >
          Preview
        </ButtonSecondaryGrey>
      </div>

      {/* Preview Modal */}
      <Modal show={showPreview} onHide={() => setShowPreview(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="mt-3">
            {previewLabel || "Preview Cropped Image"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-center">
            {croppedImageUrl ? (
              <img
                src={croppedImageUrl}
                alt="Cropped Preview"
                className="max-w-100 h-auto"
                style={{ borderRadius: "16px" }}
              />
            ) : (
              <p>No image to preview</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonSecondary
            type="button"
            className="btn "
            onClick={() => setShowPreview(false)}
          >
            <span className="d-none d-md-block">Close</span>
          </ButtonSecondary>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SubmitAndPreviewButtons;
