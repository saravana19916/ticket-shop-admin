import React from "react";
import { Form } from "react-bootstrap";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import Select from "react-select";

interface IProps {}
const customStyles = {
  singleValue: (provided: any) => ({
    ...provided,
    color: "#000",
    fontWeight: "400",
    fontSize: "14px",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#777",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    padding: "4px",
    paddingLeft: "14px",
    borderRadius: "50px",
    borderColor: state.isFocused ? "#fec9da80" : "#e5e7eb",
    outline: state.isFocused ? "1px solid #fec9da80" : "none",
    boxShadow: "null",
    "&:focus": {
      borderColor: "#fec9da80",
      outline: "1px solid #fec9da80",
    },
    "&:focus-within": {
      borderColor: "#fec9da80",
      outline: "1px solid #fec9da80",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "8px",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    color: "#000",
    fontWeight: "500",
    fontSize: "18px",
    margin: "0px",
    padding: "0px",
    backgroundColor: "",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#ED003B" : "transparent",
    color: state.isSelected ? "#fff" : provided.color,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
    },
  }),
};
const FormatOptions = [
  {
    label: "Theater",
    value: "Theater",
  },
];
const DefineZones = () => {
  return (
    <>
      <div className="col-12 mb-6 pt-4">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Define Zones
          </Form.Label>
          <FormInputDescriptionStyled>
            Sections and zones are different areas in your event that have
            different access and may have different prices. The tickets in each
            zone, must have similar prices. if you have multiple sections in one
            zone, then you need to define each of them as different zones.
          </FormInputDescriptionStyled>
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
          <Select
            id="dropdown-basic"
            options={FormatOptions}
            placeholder="Select Type"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
          />
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Selection</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={FormatOptions}
            placeholder="Select Type"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
          />
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>Type</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={FormatOptions}
            placeholder="Select Type"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
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
