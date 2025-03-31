import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormLabelStyled,
  StyledInputDiv,
} from "../../../styledComponents/styledForm";
import { ButtonPrimary } from "../../../styledComponents/styledButton";

const LevelOfInformation = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLevel(event.target.checked ? event.target.id : null);
  };
  return (
    <>
      <div className="row gap-5">
        <div>
          <label className="fs-5 fw-500 text-black form-label">
            Level of information
          </label>
          <p>
            This setting will determine the amount of detail which is displayed
            on the scan device.
          </p>
        </div>
        <div>
          <p>
            <strong>High: </strong>Show all scans + totals sold per scan service
            (current scan service){" "}
          </p>
          <p>
            <strong>Medium: </strong>Show all scans per scan service (current
            scan service)
          </p>
          <p>
            <strong>Low: </strong>Show all scans per device (current device)
          </p>
          <p>
            <strong>None: </strong>No information
          </p>
        </div>
        <div className="col-12 mb-6 mt-5">
          <Form.Group>
            <div className="d-flex align-items-center gap-5">
              {[
                {
                  id: "high",
                  label: "High",
                  value: "High",
                },
                {
                  id: "medium",
                  label: "Medium",
                  value: "Medium",
                },
                {
                  id: "low",
                  label: "Low",
                  value: "Low",
                },
                {
                  id: "none",
                  label: "None",
                  value: "None",
                },
              ].map((option) => (
                <Form.Check
                  type="radio"
                  name="levelOfInformation"
                  id={option.id}
                  label={option.label}
                  value={option.value}
                  className="level-info-radio"
                />
              ))}
            </div>
          </Form.Group>
        </div>
        <div className="col-12 pe-0">
          <div className="float-end">
            <ButtonPrimary
              type="submit"
              className="btn"
              style={{ minWidth: "118px" }}
            >
              Save
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelOfInformation;
