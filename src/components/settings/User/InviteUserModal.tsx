import React, { FC, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import {
    FormInputStyled,
    FormLabelStyled,
    FormFileInputStyled,
} from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";

interface IProps {
  handleClose: () => void;
  show: boolean;
}
const InviteUserModal: FC<IProps> = ({ handleClose, show }) => {
    const [platformRole, setPlatformRole] = useState([
        { label: 'User', value: 'user'},
        { label: 'Administrator', value: 'administrator'},
        { label: 'Platform Owner', value: 'paltformOwner'}
      ]);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="p-6">
            <Modal.Title className="w-100 m-0">
                <span className="fw-600 fs-4 text-center">Invite User</span>
            </Modal.Title>
            <span
                className="d-flex ms-auto fs-4"
                onClick={handleClose}
            >
                <i className="fe fe-x ms-auto"></i>
            </span>
        </Modal.Header>
        <Modal.Body className="p-6">
            <Form className="mt-3">
                <div className="col-12 mb-6 p-0">
                    <Form.Group>
                        <FormLabelStyled>Platform Role</FormLabelStyled>
                        <SelectDropDown
                            options={platformRole}
                            placeholder="Select Role"
                            classNamePrefix="Select"
                            className="mb-2"
                        />
                    </Form.Group>
                </div>
                <div className="col-12 mb-6 p-0">
                    <Form.Group>
                        <FormLabelStyled>Email</FormLabelStyled>
                        <FormInputStyled type="text" className="form-control" placeholder="Enter email" />
                    </Form.Group>
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end px-6">
          <ButtonSecondary className="btn" onClick={handleClose}>
            Cancel
          </ButtonSecondary>
          <ButtonPrimary className="btn">
            <FaEnvelope className="me-2" /> Invite
          </ButtonPrimary>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InviteUserModal;
