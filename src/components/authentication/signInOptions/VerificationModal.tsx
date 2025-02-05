import React, { FC } from "react";
import { Modal } from "react-bootstrap";
interface IVerificationModal {
  showVerifyModal: boolean;
  handleShowVerifyModal: (type?: "Phone" | "Email") => void;
  verifyType: "Phone" | "Email";
  handleOtpChange: (e: any) => void;
  handleOtpVerify: () => void;
  verifyEmailOtp: string | undefined;
  verifyPhoneOtp: string | undefined;
  otpError: string | undefined;
}
const verificationModal: FC<IVerificationModal> = ({
  showVerifyModal,
  handleShowVerifyModal,
  verifyType,
  handleOtpChange,
  verifyPhoneOtp,
  verifyEmailOtp,
  handleOtpVerify,
  otpError,
}) => {
  return (
    <>
      <Modal
        className="modal fade"
        show={showVerifyModal}
        onHide={handleShowVerifyModal}
        centered
        contentClassName="rounded-5"
      >
        <Modal.Header>
          <Modal.Title as="h6" className="fw-600 fs-5">
            Verify {verifyType}
          </Modal.Title>
          <span
            className="d-flex ms-auto"
            onClick={() => handleShowVerifyModal(verifyType)}
          >
            <i className="fe fe-x ms-auto fs-4"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="otpInput" className="form-label">
                  Enter OTP
                </label>
                <input
                  type="text"
                  className="form-control fs-6"
                  id="otpInput"
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  onChange={handleOtpChange}
                  value={
                    verifyType === "Email" ? verifyEmailOtp : verifyPhoneOtp
                  }
                />
                {otpError && <span className="text-danger">{otpError}</span>}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-gray"
            onClick={() => handleShowVerifyModal(verifyType)}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleOtpVerify}
          >
            Verify
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default verificationModal;
