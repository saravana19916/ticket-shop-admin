import { TabPanel } from "@headlessui/react";
import React, { useState } from "react";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import SwitchReact from "../../shared/SwitchReact";
import styled from "styled-components";
import { Form, Offcanvas } from "react-bootstrap";
import {
  FormDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";
import { scanUserType } from "../../../commondata/addListingPageOne";
import SwitchButton from "../../shared/SwitchButton";
import { useNavigate } from "react-router-dom";

const data = [
  { date: "19th December", type: "Mater" },
  { date: "19th December", type: "VIP" },
  { date: "19th December", type: "GA" },
  { date: "19th December", type: "Arcadia Scan Numbers" },
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledSpan = styled.span`
  border: 1px solid #e9edf4;
  border-radius: 16px;
  padding: 3rem;
  color: #5b5b5b;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
const index = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [selectedOption, setSelectedOption] = useState("New");

  const handleSwitchChange = (option: string) => {
    setSelectedOption(option);
    console.log("Selected Option:", option);
  };

  const handleViewDetails = () => {
    navigate(`${import.meta.env.BASE_URL}view-scanning/1`);
  };

  return (
    <>
      <TabPanel>
        <div>
          <div>
            <h5 className="fs-5 fw-semibold text-black">Filter On event</h5>
            <div className="d-flex align-items-center justify-content-between">
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group>
                <label className="custom-switch form-switch me-5 mb-3">
                  <input
                    type="radio"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={checked}
                    onClick={() => setChecked((prev) => !prev)}
                  />
                  <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                </label>
              </Form.Group>
              <ButtonPrimary
                type="submit"
                className="btn"
                style={{ minWidth: "120px" }}
                onClick={handleShow}
              >
                Add new scan servivces
              </ButtonPrimary>
            </div>
          </div>
          <Container className="mt-4">
            {data.map((item, index) => (
              <StyledSpan key={index} onClick={handleViewDetails}>
                {item.date} - {item.type}
              </StyledSpan>
            ))}
          </Container>
        </div>
      </TabPanel>
      <Offcanvas show={show} onHide={handleClose} className="w-100">
        <Offcanvas.Header>
          <span className="d-flex" onClick={handleClose}>
            <i className="fe fe-arrow-left"></i>
          </span>
          <div className="m-auto d-flex align-items-center gap-3">
            <span className="text-primary fw-semibold">
              1. Scan service name
            </span>
            <span>2. Tickets</span>
          </div>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-gray-light d-flex align-items-center justify-content-center">
          <div
            className="bg-white"
            style={{
              padding: "3rem",
              borderRadius: "16px",
              boxShadow: "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);",
              minWidth: "55rem",
              maxWidth: "55rem",
              height: "65%",
            }}
          >
            <div className="row">
              <div className="col-6 mt-3">
                <Form.Group>
                  <FormLabelStyled className="d-flex align-items-center">
                    Scan service name
                  </FormLabelStyled>
                  <FormInputStyled type="text" className="form-control" />
                  <span>A minimum of six characters is required</span>
                </Form.Group>
              </div>
              <div className="col-6 mt-3">
                <Form.Group>
                  <FormLabelStyled className="d-flex align-items-center">
                    Scan User
                  </FormLabelStyled>
                  <SwitchButton
                    options={["Existing", "New"]}
                    defaultSelected="New"
                    onChange={handleSwitchChange}
                  />
                </Form.Group>
              </div>
              <div className="col-6 mt-3"></div>
              {selectedOption == "Existing" && (
                <>
                  <div className="col-6">
                    <Form.Group>
                      <FormLabelStyled className="d-flex align-items-center">
                        Scan User
                      </FormLabelStyled>
                      <SelectDropDown
                        options={scanUserType}
                        placeholder="Select"
                        classNamePrefix="Select"
                        className="mt-1"
                      />
                    </Form.Group>
                  </div>
                </>
              )}
              {selectedOption == "New" && (
                <>
                  <div className="col-6 mt-3">
                    <Form.Group>
                      <FormLabelStyled className="d-flex align-items-center">
                        Username
                      </FormLabelStyled>
                      <FormInputStyled
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                      <span>A minimum of six characters is required</span>
                    </Form.Group>
                  </div>
                  <div className="col-6 mt-3"></div>
                  <div className="col-6 mt-3">
                    <Form.Group>
                      <FormLabelStyled className="d-flex align-items-center">
                        Password
                      </FormLabelStyled>
                      <FormInputStyled
                        type="password"
                        className="form-control"
                        placeholder=""
                      />
                      <span>A minimum of six characters is required</span>
                    </Form.Group>
                  </div>
                </>
              )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default index;
