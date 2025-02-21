import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import SelectDropDown from "../../../shared/SelectDropDown";

interface IProps {}

const FormatOptions = [
  {
    label: "Seating",
    value: "Seating",
  },
  {
    label: "Standing",
    value: "Standing",
  },
];
const SelectionOptions = [
  {
    label: "Automatic",
    value: "Automatic",
  },
  {
    label: "Manual",
    value: "Manual",
  },
];
const typeOptions = [
  {
    label: "Allocated",
    value: "Allocated",
  },
  {
    label: "Free",
    value: "Free",
  },
];
const DefineZones = () => {
  return (
    <>
      <div className="col-12 mb-6 pt-4">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black d-flex align-items-center">
            Define Zones
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  Sections and zones are different areas in your event that have
                  different access and may have different prices. The tickets in
                  each zone, must have similar prices. if you have multiple
                  sections in one zone, then you need to define each of them as
                  different zones.
                </Tooltip>
              }
            >
              <i
                style={{
                  marginBottom: "2px",
                }}
                className="fe fe-info d-inline-block ms-3 cursor-pointer"
              ></i>
            </OverlayTrigger>
          </Form.Label>
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Name</FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            name="zoneName"
          />
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Format</FormLabelStyled>
          <SelectDropDown
            options={FormatOptions}
            placeholder="Select Format"
            classNamePrefix="Select"
            className="mb-2"
          />
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Selection</FormLabelStyled>
          <SelectDropDown
            options={SelectionOptions}
            placeholder="Select Selection"
            classNamePrefix="Select"
            className="mb-2"
          />
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Type</FormLabelStyled>
          <SelectDropDown
            options={typeOptions}
            placeholder="Select Type"
            classNamePrefix="Select"
            className="mb-2"
          />
        </Form.Group>
      </div>
      <div className="col-xl-4 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Total Capacity</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            name="zoneName"
          />
        </Form.Group>
      </div>
      <div className="col-xl-4 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>On Sale Cap</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            name="zoneName"
          />
        </Form.Group>
      </div>
      <div className="col-xl-4 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Blocked Cap</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            name="zoneName"
          />
        </Form.Group>
      </div>
    </>
  );
};

export default DefineZones;
