import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import SingleDigitInput from "../../shared/SingleDigitInput";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import CustomToastContainer from "../../shared/CustomToastContainer";
import { toast } from "react-toastify";

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
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isButtonDisabled = otpValues.some((val) => val === "");
  const handleClose = () => {
    onClose();
    setOtpValues(["", "", "", ""]);
  };
  const handleOTPInputChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move focus to the next input field
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const _handleOnConfirm = (e: any): void => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <CustomToastContainer />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header className="p-6">
          <Modal.Title className="w-100 text-center m-0">
            <span className="fw-600 fs-4 text-center">
              Verify Your {heading}
            </span>
          </Modal.Title>
          <span className="d-flex ms-auto fs-4" onClick={handleClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Modal.Header>
        <Modal.Body className="py-7">
          <div className="d-flex flex-column text-center gap-4">
            <div>
              <p>Please enter the 4-digit code sent to </p>
              <p className="text-primary fw-semibold">{userInput}</p>
            </div>
            <div className="d-flex gap-4 px-9 justify-content-center">
              {otpValues.map((value, index) => (
                <div key={index} className="w-16 h-16">
                  <SingleDigitInput
                    ref={(el) => (inputRefs.current[index] = el)}
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
                <p>Didn't receive code?</p>
                <a
                  className="flex flex-row items-center text-primary-6000"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Resend Code
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VerifyOTPModel;
