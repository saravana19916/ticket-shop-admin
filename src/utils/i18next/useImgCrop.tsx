import React, { FC, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ButtonSecondary, ButtonPrimary } from "../../components/styledComponents/styledForm";

interface WithImageCropProps {
  cropWidth: number;
  cropHeight: number;
  onCropComplete: (url: string) => void;
}

const withImageCrop = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ImageCropper: FC<P & WithImageCropProps> = ({
    cropWidth,
    cropHeight,
    onCropComplete,
    ...props
  }) => {
    const [crop, setCrop] = useState<Crop>({
      unit: "px",
      x: 0,
      y: 0,
      width: cropWidth,
      height: cropHeight,
    });
    const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
    const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
    const [showModal, setShowModal] = useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result as string);
          setShowModal(true); // Show the modal for cropping
        };
        reader.readAsDataURL(file);
      }
    };

    const saveCroppedImage = () => {
      if (completedCrop && imageRef.current) {
        const canvas = document.createElement("canvas");
        canvas.width = cropWidth;
        canvas.height = cropHeight;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
          const scaleY =
            imageRef.current.naturalHeight / imageRef.current.height;

          ctx.drawImage(
            imageRef.current,
            completedCrop.x * scaleX,
            completedCrop.y * scaleY,
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
            0,
            0,
            canvas.width,
            canvas.height
          );

          const base64Image = canvas.toDataURL("image/jpeg");
          onCropComplete(base64Image); // Pass the cropped image URL back
          setShowModal(false); // Close the modal
        }
      }
    };

    return (
      <>
        <WrappedComponent {...(props as P)} onFileChange={handleFileChange} />
        {/* Modal for Image Cropping */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Crop Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {imageSrc && (
              <ReactCrop
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                onComplete={(crop) => setCompletedCrop(crop)}
                aspect={cropWidth / cropHeight}
                locked
              >
                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="Source"
                  style={{ maxWidth: "100%" }}
                />
              </ReactCrop>
            )}
          </Modal.Body>
          <Modal.Footer>
            <ButtonSecondary
              type="button"
              className="btn "
              onClick={() => setShowModal(false)}
            >
              <span className="d-none d-md-block">Close</span>
            </ButtonSecondary>
            <ButtonPrimary
              type="button"
              className="btn"
              onClick={saveCroppedImage}
            >
              <i
                className="fa fa-arrow-right d-block d-md-none"
                aria-hidden="true"
              ></i>{" "}
              <span>Save Crop</span>
            </ButtonPrimary>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return ImageCropper;
};

export default withImageCrop;
