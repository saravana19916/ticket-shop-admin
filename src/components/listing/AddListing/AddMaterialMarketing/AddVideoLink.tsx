import React, { FC, useState } from "react";
import SubmitAndPreviewButtons from "../../../shared/SubmitAndPreviewButtons";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  FormFileInputStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import VideoPlayer from "../../../VideoPlayer";
import { ButtonSecondaryGrey } from "../../../styledComponents/styledButton";

interface IProps {}
const AddVideoLink: FC<IProps> = () => {
  const [videoModalIsOpen, setVideoModalIsOpen] = useState<boolean>(false);
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
  const handlePreview = () => {
    setVideoModalIsOpen(true);
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
        <ButtonSecondaryGrey
          type="button"
          className="btn mt-4"
          disabled={!videoLink}
          onClick={handlePreview}
        >
          <>
            <span>Preview</span>
            <VideoPlayer
              videoLink={videoLink}
              videoModalIsOpen={videoModalIsOpen}
              setVideoLink={setVideoLink}
              setVideoModalIsOpen={setVideoModalIsOpen}
            />
          </>
        </ButtonSecondaryGrey>
        {/* <div
          className="mt-4 border rounded-full font-medium text-black px-6 py-4"
          style={{
            borderColor: "#dadbdf",
            backgroundColor: "#e4e4e4",
            padding: "13px 30px",
            borderRadius: "35px",
            opacity: !videoLink ? 0.65 : 1,
            pointerEvents: !videoLink ? "none" : "auto",
          }}
        >
          <span onClick={handlePreview}>
            <span
              style={{
                color: "#000",
              }}
            >
              Preview
            </span>
            <VideoPlayer
              videoLink={videoLink}
              videoModalIsOpen={videoModalIsOpen}
              setVideoLink={setVideoLink}
              setVideoModalIsOpen={setVideoModalIsOpen}
            />
          </span>
        </div> */}
      </div>
    </>
  );
};

export default AddVideoLink;
