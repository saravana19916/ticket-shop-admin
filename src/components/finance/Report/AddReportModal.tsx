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
const AddReportModal: FC<IProps> = ({ handleClose, show }) => {
  const [report, setReport] = useState([
    { label: "Annual Report", value: "annual" },
    { label: "Monthly Report", value: "monthly" },
  ]);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="m-7">
          <Form className="mt-3">
            <div className="col-12 mb-6 p-0">
              <FormLabelStyled>Report Type</FormLabelStyled>
              <div className="btn-group col-12 p-0" data-toggle="buttons">
                <label className="btn btn-primary active p-3 w-30">
                  <input
                    type="radio"
                    name="report_type"
                    value="existing"
                    hidden
                  />{" "}
                  Existing
                </label>
                <label className="btn btn-light p-3 w-30">
                  <input type="radio" name="report_type" value="new" hidden />{" "}
                  Custom
                </label>
              </div>
            </div>

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
