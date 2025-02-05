import React, { useRef, useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import SubmitAndPreviewButtons from "../../shared/SubmitAndPreviewButtons";
import { toast } from "react-toastify";

const AddPrimaryColor = () => {
  const [primaryColor, setPrimaryColor] = useState<undefined | string>(
    undefined
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // Ref to the hidden color picker input
  const colorPickerRef = useRef<HTMLInputElement>(null);

  // Handle the submission
  const _handleSubmit = () => {
    if (primaryColor) {
      toast.success("Background color submitted Successfully!");
      setIsSubmitted(true);
    } else {
      toast.error("Please pick a background color!");
      setIsSubmitted(false);
    }
  };

  // Handle color change from the color picker
  const _handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    setPrimaryColor(value);
  };

  // Open color picker on clicking the FormControl input
  const _handleOpenColorPicker = () => {
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-7 col-12 mb-2">
          <Form.Group>
            <InputGroup className="d-flex align-items-center">
              <InputGroup.Text className="p-4 fw-600 fs-6 file-input-group-text border-form-input">
                Primary Color
              </InputGroup.Text>
              <FormControl
                type="text"
                className="bg-white fs-6 form-control-label-color-picker border-form-input border-end-rounded border-inline-start-0"
                onClick={_handleOpenColorPicker}
                readOnly
                placeholder="Pick primary color"
                value={primaryColor}
                style={{ paddingTop: "12px", paddingBottom: "11px" }}
              />
              <input
                type="color"
                ref={colorPickerRef}
                onChange={_handleColorChange}
                className="position-absolute left-35 w-20-px border-0 h-20-px"
                value={primaryColor}
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-12 mb-2">
          <SubmitAndPreviewButtons
            isSubmitted={isSubmitted}
            handleSubmit={_handleSubmit}
            buttonClassName="p-3"
          />
        </div>
        <span className="d-block ms-3 fs-12px">
          <span className="fw-600"></span>you can define the primary color of
          the shop here which would replace Red color of Tixbox on certain
          design elements
        </span>{" "}
      </div>
    </>
  );
};

export default AddPrimaryColor;
