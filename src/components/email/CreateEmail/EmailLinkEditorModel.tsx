import React from "react";
import { Form, Modal } from "react-bootstrap";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";

type EmailLinkEditorModelProps = {
  show: boolean;
  onClose: () => void;
};

const EmailLinkEditorModel: React.FC<EmailLinkEditorModelProps> = ({
  show,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header className="p-5">
        <Modal.Title className="w-100 m-0">
          <span className="fw-600 fs-4">Edit Email URL</span>
        </Modal.Title>
        <span
          className="d-flex ms-auto fs-4 cursor-pointer"
          onClick={handleClose}
        >
          <i className="fe fe-x ms-auto"></i>
        </span>
      </Modal.Header>

      <Modal.Body className="p-5">
        <div>
          <p>
            Your default{" "}
            <span className="text-primary text-decoration-underline">
              email URL
            </span>{" "}
            includes a domain name and email subject line.
          </p>
          <p>
            Choose from your verified domains to update the email URL for every
            email you send to this audience. You can also edit the email subject
            part of the URL path.
          </p>
          <div className="d-flex align-items-center gap-3 mt-8 mb-4">
            <label>https://mailchi.mp</label>
            <span>/</span>
            <div className="d-flex flex-column">
              <span>[xxxxxxxxxxxxxxx]</span>
              <span className="text-danger fw-semibold">
                Please select an audience
              </span>
            </div>
            <span>/</span>
            <Form.Group className="d-flex flex-column">
              <small className="text-gray text-end">150 characters</small>
              <Form.Control type="text" />
              <small className="text-danger">Enter a URL path</small>
            </Form.Group>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonSecondary
          type="button"
          className="btn "
          onClick={onClose}
          style={{ minWidth: "118px" }}
        >
          <span className="d-none d-md-block">Cancel</span>
        </ButtonSecondary>
        <ButtonPrimary
          type="button"
          className="btn"
          style={{ minWidth: "118px" }}
        >
          <i
            className="fa fa-arrow-right d-block d-md-none"
            aria-hidden="true"
          ></i>
          <span>Save</span>
        </ButtonPrimary>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailLinkEditorModel;
