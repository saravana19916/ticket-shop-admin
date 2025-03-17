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
      <div className="row">
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
            {/* <FormLabelStyled>Level</FormLabelStyled> */}
            <div className="row">
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
                <div
                  className="col-lg-4 col-md-6 col-12 g-3 ps-4"
                  key={option.id}
                >
                  <StyledInputDiv className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={option.value}
                      name={option.value}
                      value={option.value}
                      checked={selectedLevel === option.value}
                      onChange={handleLevelChange}
                    />
                    <label
                      htmlFor={option.value}
                      className="form-check-label ms-3"
                      style={{
                        marginTop: "7px",
                        fontSize: "12px",
                      }}
                    >
                      {option.label}
                    </label>
                  </StyledInputDiv>
                </div>
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
