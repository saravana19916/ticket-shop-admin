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
import SwitchButton from "../../shared/SwitchButton";

interface IProps {
  handleClose: () => void;
  show: boolean;
}
const AddReportModal: FC<IProps> = ({ handleClose, show }) => {
  const [report] = useState([
    { label: "Annual Report", value: "annual" },
    { label: "Monthly Report", value: "monthly" },
  ]);
  const [selectedType, setSelectedType] = useState<"Existing" | "Custom">("Existing");

  const handleSwitchChange = (option: string) => {
    setSelectedType(option as "Existing" | "Custom");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="m-7">
          <Form className="mt-3">
            <div className="col-12 mb-6 p-0">
              <FormLabelStyled>Report Type</FormLabelStyled>
              <SwitchButton
                options={["Existing", "Custom"]}
                defaultSelected={selectedType}
                onChange={handleSwitchChange}
              />
            </div>

            {selectedType === "Existing" && (
              <div className="col-12 mb-6 p-0">
                <Form.Group>
                  <FormLabelStyled>Reports List</FormLabelStyled>
                  <SelectDropDown
                    options={report}
                    placeholder="Select Report"
                    classNamePrefix="Select"
                    className="mb-2"
                  />
                </Form.Group>
              </div>
            )}

            {selectedType === "Custom" && (
              <div className="col-12 mb-6 p-0">
                <Form.Group>
                  <FormLabelStyled>Explain the report you need</FormLabelStyled>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    className="form-control mb-4"
                    id="inputtext"
                    placeholder="In this section you can write us, the type of the report you need with details and specifics, so we can come back to you with the details of the report and its relevant fees and charges if any"
                  />
                  <FormLabelStyled>
                    after submitting your request, we will contact you on your registered email or through the notification centre.
                  </FormLabelStyled>
                </Form.Group>
              </div>
            )}

            <div className="d-flex justify-content-end">
              <ButtonPrimary className="btn">Submit</ButtonPrimary>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddReportModal;
