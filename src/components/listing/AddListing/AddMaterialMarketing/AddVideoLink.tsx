import React, { FC, useState } from "react";
import SubmitAndPreviewButtons from "../../../shared/SubmitAndPreviewButtons";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  FormFileInputStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
interface IProps {}
const AddVideoLink: FC<IProps> = () => {
  const [videoLink, setVideoLink] = useState<undefined | string>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const _handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    setVideoLink(value);
  };
  const _handleSubmit = () => {
    if (videoLink) {
      toast.success("Video Link submitted Successfully!");
      setIsSubmitted(true);
    } else {
      toast.error("Please Insert Video Link!");
    }
  };
  return (
    <>
      <div className="d-flex gap-4 align-items-center flex-wrap">
        <div className="flex-grow-1 mb-2">
          <Form.Group>
            <FormLabelStyled>Video Link</FormLabelStyled>
            <FormInputStyled
              type="text"
              className="form-control py-4"
              placeholder="Insert Video Link"
              onChange={_handleOnChange}
            />
          </Form.Group>
        </div>
        <div className="mt-4">
          <SubmitAndPreviewButtons
            isSubmitted={isSubmitted}
            handleSubmit={_handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default AddVideoLink;
