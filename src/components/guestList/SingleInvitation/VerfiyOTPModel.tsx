import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SwitchReact from "../../shared/SwitchReact";
import SingleDigitInput from "../../shared/SingleDigitInput";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import CustomToastContainer from "../../shared/CustomToastContainer";
import { Bounce, toast, ToastContainer } from "react-toastify";
type VerifyOTPModelProps = {
  userInput: string;
  heading: string;
  show: boolean;
  onClose: () => void;
};

const VerifyOTPModel: React.FC<VerifyOTPModelProps> = ({
  userInput,
  heading,
  show,
  onClose,
}) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const isButtonDisabled = otpValues.some((val) => val === "");

  const handleOTPInputChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    console.log(otpValues);
    console.log(isButtonDisabled);
  };
  const _handleOnConfirm = (e: any): void => {
    e.preventDefault();
    onClose();
    toast.error("Please enter email id!");
  };
  return (
    <>
      <CustomToastContainer />
      <Modal
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header>
          <Modal.Title className="w-100 text-center">
            <span className="fw-600 fs-4 text-center">
              Verify your {heading}
            </span>
          </Modal.Title>
          <span className="d-flex ms-auto" onClick={onClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column text-center gap-4">
            <div>
              {/* <span className="fw-600 fs-4">Verify your email</span> */}
              <p>please enter the 4 digit code send to </p>
              <p className="text-primary fw-semibold">{userInput}</p>
            </div>
            <div className="d-flex gap-4 px-9 justify-content-center">
              {otpValues.map((value, index) => (
                <div key={index} className="w-16 h-16">
                  <SingleDigitInput
                    value={value}
                    onChange={(val) => handleOTPInputChange(index, val)}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-5">
              <div style={{ padding: "0px 7rem" }}>
                <ButtonPrimary
                  className="btn w-100"
                  onClick={(e) => _handleOnConfirm(e)}
                  disabled={isButtonDisabled}
                >
                  Confirm
                </ButtonPrimary>
              </div>

              <div className="mt-4 flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p>{" "}
                <a
                  className="flex flex-row items-center text-primary-6000"
                  href="#"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend Code
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="light" className="btn-pill" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" className="btn-pill">
            Confirm
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default VerifyOTPModel;
