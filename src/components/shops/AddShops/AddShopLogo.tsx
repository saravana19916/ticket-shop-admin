import React, { FC, useEffect, useRef, useState } from "react";
import { Form, InputGroup, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import SubmitAndPreviewButtons from "../../shared/SubmitAndPreviewButtons";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  ButtonSecondary,
  ButtonPrimary,
} from "../../styledComponents/styledButton";

interface IProps {}

const AddShopCard: FC<IProps> = () => {
  const shopLogoFileRef = useRef<HTMLInputElement | null>(null);
  const shopLogoImageRef = useRef<HTMLImageElement | null>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    x: 0,
    y: 0,
    width: 150,
    height: 150,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | undefined>(
    undefined
  );
  const [isFileCropped, setIsFileCropped] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleFileInputClick = () => shopLogoFileRef?.current?.click();

  // Handle file change and read the file as a data URL
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setShowModal(true); // Show the modal for cropping
        setCompletedCrop({
          unit: "px",
          x: 0,
          y: 0,
          width: 150,
          height: 150,
        }); // Set initial crop to completed crop
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
    if (completedCrop && shopLogoImageRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = 150; // Fixed width
      canvas.height = 150; // Fixed height
      const ctx = canvas.getContext("2d");

      if (ctx && shopLogoImageRef.current) {
        const scaleX =
          shopLogoImageRef.current.naturalWidth /
          shopLogoImageRef.current.width;
        const scaleY =
          shopLogoImageRef.current.naturalHeight /
          shopLogoImageRef.current.height;

        ctx.drawImage(
          shopLogoImageRef.current,
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
        setIsFileCropped(true);
        setShowModal(false);
      }
    } else {
      toast.error("Please select a valid crop area.");
    }
  };

  const handleSubmit = () => {
    if (croppedImageUrl) {
      toast.success("Shop Logo submitted successfully!");
      setIsSubmitted(true);
    } else {
      toast.error("Please select a file for Shop Logo!");
    }
  };

  useEffect(() => {
    if (!isFileCropped) {
      setFileName(undefined);
      setCroppedImageUrl(undefined);
    }
  }, [isFileCropped]);

  // Handle image load to set default crop
  const handleImageLoad = () => {
    if (shopLogoImageRef.current) {
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
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-7 col-12 mb-2">
          <Form.Group>
            <InputGroup>
              <InputGroup.Text className="p-4 fw-600 fs-6 file-input-group-text border-form-input">
                Shop Logo
              </InputGroup.Text>
              <InputGroup.Text
                className={`p-3 fw-normal fs-6 ps-6 pe-6 cursor-pointer file-input-group-field border-form-input border-inline-start-0 ${
                  fileName ? "text-black" : "text-color-gray-1"
                }`}
                onClick={handleFileInputClick}
              >
                {fileName || "No file chosen"}
              </InputGroup.Text>
              <input
                type="file"
                ref={shopLogoFileRef}
                accept="image/png, image/jpeg, image/jpg"
                className="d-none"
                onChange={handleFileChange}
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-12 mb-2">
          <SubmitAndPreviewButtons
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
            croppedImageUrl={croppedImageUrl}
            previewLabel="Cropped Shop Logo Image"
            buttonClassName="p-3"
          />
        </div>
        <span className="d-block ms-3 fs-10px">
          <span className="fw-600">Size: </span>150 pixel (w) x 150 pixel (h) /
          This artwork appears as shop image in shop listing{" "}
        </span>{" "}
      </div>
      {/* Modal for Image Cropping */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="pt-3">
            Crop Shop Logo Image - 150 pixel (w) x 150 pixel (h)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imageSrc && (
            <ReactCrop
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={onCropComplete}
              aspect={150 / 150} // To maintain the aspect ratio of 150:150
              locked // Lock the aspect ratio and size
            >
              <img
                ref={shopLogoImageRef}
                src={imageSrc}
                alt="Source"
                className="max-w-100"
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
    </>
  );
};

export default AddShopCard;
