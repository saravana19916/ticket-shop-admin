import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../../styledComponents/styledForm";
import { ButtonSecondary } from "../../../../styledComponents/styledButton";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import ButtonCustom from "../../../../shared/ButtonCustom";
type ModelAddDesignZonesProps = {
  show: boolean;
  onClose: () => void;
  onAddLabel: (label: string) => void;
};
const ModelAddDesignZones: React.FC<ModelAddDesignZonesProps> = ({
  show,
  onClose,
  onAddLabel,
}) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  const [labelName, setLabelName] = useState("");
  const handleAdd = () => {
    if (labelName.trim() !== "") {
      onAddLabel(labelName.trim());
      setLabelName(""); // Clear the input field
      onClose(); // Close the modal
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title className="p-2">
            <span className="fw-600 fs-4">Add Design Zones</span>
          </Modal.Title>
          <span className="d-flex ms-auto" onClick={onClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Modal.Header>
        <Modal.Body className="py-6 px-6">
          <Form.Group>
            <FormLabelStyled>Label Name</FormLabelStyled>
            <FormInputStyled
              type="text"
              className="form-control"
              placeholder="Enter Label Name"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="p-4 px-6">
          <ButtonSecondary type="button" className="btn" onClick={onClose}>
            Cancel{" "}
          </ButtonSecondary>
          <ButtonCustom
            title="Add"
            className="fs-6"
            paddingClassName="p-2 px-6"
            type="submit"
            onClick={onClose}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelAddDesignZones;
