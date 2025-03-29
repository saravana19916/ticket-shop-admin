import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import SelectDropDown from "../../../shared/SelectDropDown";
import CustomTooltip from "../../../shared/CustomTooltip";

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
                  Sections and zones represent different areas of your event with varying access levels and pricing. Tickets within a zone must have the same price. If a zone contains multiple sections, each section should be defined as a separate zone.
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
          <FormLabelStyled>
            Name
          </FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            name="zoneName"
            placeholder="Enter the name of the zone"
          />
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>
            Format
            <CustomTooltip
              title="Choose whether the zone will be Seating or Standing."
            />
          </FormLabelStyled>
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
          <FormLabelStyled>
            Selection
            <CustomTooltip
              title="Choose if seats are Manually selected or assigned Automatically."
            />
          </FormLabelStyled>
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
          <FormLabelStyled>
            Type
            <CustomTooltip
              title="Select if the zone is Allocated or Free seating."
            />
          </FormLabelStyled>
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
          <FormLabelStyled>
            Total Capacity
            <CustomTooltip
              title="Enter the maximum number of people the zone can hold."
            />
          </FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            name="zoneName"
          />
        </Form.Group>
      </div>
      <div className="col-xl-4 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>
            On Sale Cap
            <CustomTooltip
              title="Set the number of tickets available for sale in this zone."
            />
          </FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            name="zoneName"
          />
        </Form.Group>
      </div>
      <div className="col-xl-4 col-12 mb-6 pe-0">
        <Form.Group>
          <FormLabelStyled>
            Blocked Cap
            <CustomTooltip
              title="Define the number of tickets or spaces reserved or unavailable for sale."
            />
          </FormLabelStyled>
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
