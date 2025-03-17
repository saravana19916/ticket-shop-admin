import React, { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../styledComponents/styledButton";
interface IProps {
  handleClose: () => void;
  show: boolean;
}
const ResendOrderModal: FC<IProps> = ({ handleClose, show }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-end border-0">
          <span
            className="d-flex align-items-center justify-content-center cursor-pointer"
            onClick={handleClose}
            style={{ width: "40px", height: "40px" }} // Optional: Adjust size for better UI
          >
            <i className="fe fe-x fs-4"></i>
          </span>
        </Modal.Header>
        <Modal.Body className="text-center p-7">
          <button
            type="button"
            className="custom-close"
            onClick={handleClose}
          ></button>
          <img
            src="/src/assets/images/resend-image.png"
            alt="Mail Illustration"
            className="mb-3"
          />
          <h2 className="fw-bold">Are you sure?</h2>
          <p className="text-muted">
            This will send an e-mail to the owner of the order.
          </p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <ButtonSecondary className="btn" onClick={handleClose}>
            Close
          </ButtonSecondary>
          <ButtonPrimary className="btn">
            <FaEnvelope className="me-2" /> Yes, resend
          </ButtonPrimary>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResendOrderModal;
