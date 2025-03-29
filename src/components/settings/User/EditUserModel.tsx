import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import ProfileImageUploader from "../../accounts/MyProfile/ProfileImageUploader";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";

type EditUserModelProps = {
  show: boolean;
  onClose: () => void;
  userId: number;
};

const EditUserModel: React.FC<EditUserModelProps> = ({ show, onClose }) => {
  const [platformRole, setPlatformRole] = useState([
    { label: "User", value: "user" },
    { label: "Administrator", value: "administrator" },
    { label: "Platform Owner", value: "paltformOwner" },
  ]);
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Header className="p-5">
        <Modal.Title className="w-100 m-0">
          <span className="fw-600 fs-4">Edit User</span>
        </Modal.Title>
        <span
          className="d-flex ms-auto fs-4 cursor-pointer"
          onClick={handleClose}
        >
          <i className="fe fe-x ms-auto"></i>
        </span>
      </Modal.Header>

      <Modal.Body className="p-6">
        <div className="row">
          <div className="col-3">
            <ProfileImageUploader />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-5">
                <Form.Group>
                  <FormLabelStyled>Name</FormLabelStyled>
                  <FormInputStyled
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </Form.Group>
              </div>
              <div className="col-6 mb-5">
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
              <div className="col-12 mb-5">
                <Form.Group>
                  <FormLabelStyled>Email</FormLabelStyled>
                  <FormInputStyled
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        <ButtonSecondary className="btn" onClick={handleClose}>
          Cancel
        </ButtonSecondary>
        <ButtonPrimary className="btn">Update</ButtonPrimary>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserModel;
