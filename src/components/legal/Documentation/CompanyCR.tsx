import React, { FC, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  FormFileInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import { SuccessIcon } from "../../styledComponents/styledIcons";
import SubmitAndPreviewButtons from "../../shared/SubmitAndPreviewButtons";

interface IProps {}

const CompanyCR: FC<IProps> = ({}) => {
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const coverImageFileRef = useRef<HTMLInputElement | null>(null);

  // Trigger file selection
  const handleFileInputClick = () => coverImageFileRef?.current?.click();

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      toast.success("Image uploaded successfully!");
    }
  };

  const handleSubmit = () => {
    if (fileName) {
      toast.success("Main Card submitted successfully!");
      setIsSubmitted(true);
    } else {
      toast.error("Please select an image!");
    }
  };

  return (
    <>
      <div className="d-flex gap-4 align-items-center flex-wrap">
        <div className="flex-grow-1 mb-2">
          <Form.Group>
            <FormLabelStyled
              htmlFor="showName"
              className="d-flex align-items-center"
            >
              Company CR{" "}
            </FormLabelStyled>

            <FormFileInputStyled
              onClick={handleFileInputClick}
              className={`form-control cursor-pointer ${
                fileName ? "text-black" : "text-color-gray-1"
              } ${isSubmitted ? "" : "py-4"}`}
            >
              {fileName || "No file chosen"}
              {isSubmitted && (
                <SuccessIcon className="bi bi-check-circle-fill fs-5" />
              )}
            </FormFileInputStyled>

            <input
              type="file"
              ref={coverImageFileRef}
              accept="image/png, image/jpeg, image/jpg"
              className="d-none"
              onChange={handleFileChange}
            />
          </Form.Group>
        </div>

        <div className="mb-0 mt-4">
          <SubmitAndPreviewButtons
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
            croppedImageUrl={undefined}
            previewLabel="Uploaded Image"
          />
        </div>
      </div>
    </>
  );
};

export default CompanyCR;
