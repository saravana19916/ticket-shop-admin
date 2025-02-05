import React, { ChangeEvent, FC } from "react";
import { Form, FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../../shared/CustomDropDownToggle";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FormikErrors, FormikTouched } from "formik";
import { IAddListingAddZoningAndCapacity } from "../type";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../../styledComponents/styledForm";
import Select from "react-select";
interface IProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (field: string, value: string | null) => void;
}
const FormatOptions = [
  {
    label: "Theater",
    value: "Theater",
  },
];

const DefineZone: FC<IProps> = ({
  handleOnChange,
  values,
  errors,
  touched,
}) => {
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
  const handleChange = (event: ChangeEvent<any>) => {
    const { value, name } = event.target;
    if (value) {
      handleOnChange(`zones.${name}`, value);
    }
  };
  const handleSelectValues = (
    title: "zoneFormat" | "zoneSelection",
    value: string
  ) => {
    handleOnChange(`zones.${title}`, value);
  };
  return (
    <>
      <div className="col-12 px-0 mb-6 pt-4">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Define Zones
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            in this section you define the zones within your event/venue.
          </span>
          <div className="row">
            <div className="col-lg-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Zone Name</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  name="zoneName"
                  onChange={handleChange}
                  value={values?.zones?.zoneName}
                />
              </Form.Group>
              {errors?.zones?.zoneName && touched?.zones?.zoneName && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zones?.zoneName}
                  </span>
                </>
              )}
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
                  value={FormatOptions?.find(
                    (l) => l.value === values?.zones?.zoneFormat
                  )}
                  onChange={() => handleSelectValues("zoneFormat", "Theater")}
                />
              </Form.Group>
              {errors?.zones?.zoneFormat && touched?.zones?.zoneFormat && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zones?.zoneFormat}
                  </span>
                </>
              )}
            </div>
            <div className="col-lg-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Type</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  name="zoneType"
                  value={values?.zones?.zoneType}
                  onChange={handleChange}
                />
              </Form.Group>

              {errors?.zones?.zoneType && touched?.zones?.zoneType && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zones?.zoneType}
                  </span>
                </>
              )}
            </div>
            <div className="col-lg-6 col-12 mb-6 ">
              <Form.Group>
                <FormLabelStyled>Zone Color</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  name="zoneColor"
                  onChange={handleChange}
                  value={values?.zones?.zoneColor}
                />
              </Form.Group>
              {errors?.zones?.zoneColor && touched?.zones?.zoneColor && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zones?.zoneColor}
                  </span>
                </>
              )}
            </div>
            <div className="col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Selection</FormLabelStyled>
                <Select
                  options={selectionOptions}
                  placeholder="Select Selection"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                  value={selectionOptions?.find(
                    (l) =>
                      l.value === values?.zones?.zoneSelection ||
                      "Manual & Automated"
                  )}
                />
              </Form.Group>

              {errors?.zones?.zoneSelection &&
                touched?.zones?.zoneSelection && (
                  <>
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.zones?.zoneSelection}
                    </span>
                  </>
                )}
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default DefineZone;

const selectionOptions = [
  {
    value: "Manual & Automated",
    label: "Manual & Automated",
  },
  {
    value: "Manual",
    label: "Manual",
  },
  {
    value: "Automated",
    label: "Automated",
  },
];
