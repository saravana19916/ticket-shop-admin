import React, { FC, useRef, useState } from "react";
import SubmitAndPreviewButtons from "../../../shared/SubmitAndPreviewButtons";
import { Form, InputGroup, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  ButtonPrimary,
  ButtonSecondary,
  FormFileInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import { SuccessIcon } from "../../../styledComponents/styledIcons";

interface IProps {}
const AddGallery: FC<IProps> = ({}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "px", // Use pixels for exact sizing
    x: 0,
    y: 0,
    width: 150, // Fixed width
    height: 150, // Fixed height
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | undefined>(
    undefined
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const coverImageFileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const addGalleryRef = useRef<HTMLImageElement | null>(null);

  // Handle click on the input to trigger file selection
  const handleFileInputClick = () => coverImageFileRef?.current?.click();

  // Handle file change and read the file as a data URL
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setShowModal(true); // Show the modal for cropping
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  };

  // Handle crop complete
  const onCropComplete = (crop: PixelCrop) => {
    setCompletedCrop(crop);
  };

  // Save cropped image
  const saveCroppedImage = async () => {
    if (completedCrop && addGalleryRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = 150; // Fixed width
      canvas.height = 150; // Fixed height
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const scaleX =
          addGalleryRef.current.naturalWidth / addGalleryRef.current.width;
        const scaleY =
          addGalleryRef.current.naturalHeight / addGalleryRef.current.height;

        ctx.drawImage(
          addGalleryRef.current,
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
        setCroppedImageUrl(base64Image);
        setShowModal(false);
        toast.success("Gallery submitted successfully!");
        setIsSubmitted(true);
      }
    }
  };

  const handleSubmit = () => {
    if (croppedImageUrl) {
      toast.success("Gallery submitted successfully!");
      setIsSubmitted(true);
    } else {
      toast.error("Please select a file for Gallery!");
    }
  };
  // Handle image load to set default crop
  const handleImageLoad = () => {
    if (addGalleryRef.current) {
      const initialCrop: PixelCrop = {
        unit: "px",
        x: 0,
        y: 0,
        width: 150,
        height: 150,
      };
      setCrop(initialCrop);
      setCompletedCrop(initialCrop);
    }
  };
  return (
    <>
      <div className="d-flex gap-4 align-items-center flex-wrap">
        <div className="flex-grow-1 mb-2">
          <Form.Group>
            <FormLabelStyled htmlFor="showName"> Gallery</FormLabelStyled>
            <FormFileInputStyled
              onClick={handleFileInputClick}
              className={`form-control cursor-pointer ${
                fileName ? "text-black" : "text-color-gray-1"
              } ${isSubmitted ? "" : "py-4"}`}
            >
              {fileName || "No file chosen"}
              {isSubmitted && (
                <>
                  <SuccessIcon className="bi bi-check-circle-fill fs-5" />
                </>
              )}
            </FormFileInputStyled>
            <span className="d-block ms-3 fs-10px">
              <span className="fw-600">Size: </span>150 pixel (w) x 150 pixel
              (h)
            </span>
            <input
              type="file"
              ref={coverImageFileRef}
              accept="image/png, image/jpeg, image/jpg"
              className="d-none"
              onChange={handleFileChange}
            />
          </Form.Group>
        </div>
        <div className="mb-0">
          <SubmitAndPreviewButtons
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
            croppedImageUrl={croppedImageUrl}
            previewLabel="Cropped Gallery Image"
          />
        </div>

        {/* Modal for Image Cropping */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="mt-3">
              Crop Gallery Image - 150 pixel (w) x 150 pixel (h)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {imageSrc && (
              <ReactCrop
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                onComplete={onCropComplete}
                aspect={1} // To maintain a 1:1 aspect ratio
                minWidth={150} // Minimum width of the crop box
                minHeight={150} // Minimum height of the crop box
                locked // Lock the aspect ratio and size
              >
                <img
                  ref={addGalleryRef}
                  src={imageSrc}
                  alt="Source"
                  style={{ maxWidth: "100%" }}
                  onLoad={handleImageLoad}
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
      </div>
    </>
  );
};

export default AddGallery;
