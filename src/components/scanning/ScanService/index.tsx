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
  padding: 1.5rem 2rem;
  color: #5b5b5b;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
const index = () => {
  const [checked, setChecked] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <TabPanel>
        <div>
          <div>
            <h5 className="fs-5 fw-semibold text-black">Listing Artwork</h5>
            <div className="d-flex align-items-center justify-content-between">
              <SwitchReact checked={checked} onChange={handleChange} />
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
              <StyledSpan key={index}>
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
            }}
          >
            <div className="row">
              <div className="col-6">
                <Form.Group>
                  <FormLabelStyled className="d-flex align-items-center">
                    Scan service name
                  </FormLabelStyled>
                  <FormInputStyled type="text" className="form-control" />
                  <span>A minimum of six characters is required</span>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group>
                  <FormLabelStyled className="d-flex align-items-center">
                    Scan User
                  </FormLabelStyled>
                </Form.Group>
              </div>
              <div className="col-6"></div>
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
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default index;
