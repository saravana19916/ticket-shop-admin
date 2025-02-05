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
const SeatingOrderOptions = [
  {
    value: "From Left to Right",
    label: "From Left to Right",
  },
  {
    value: "From Right to Left",
    label: "From Right to Left",
  },
  {
    value: "From Top to Bottom",
    label: "From Top to Bottom",
  },
  {
    value: "From Bottom to Top",
    label: "From Bottom to Top",
  },
];
const SeatNumbering: FC<IProps> = ({
  errors,
  values,
  touched,
  handleOnChange,
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
      handleOnChange(`seats.${name}`, value);
    }
  };
  const handleSelectValues = (title: "order", value: string) => {
    handleOnChange(`seats.${title}`, value);
  };
  return (
    <>
      <div className="col-12 px-0 mb-6">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Seat Numbering
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            in this section you define the seat numbering of each area.
          </span>
          <div className="row">
            <div className="col-xl-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Range From</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  className="form-control"
                  name="rangeFrom"
                  onChange={handleChange}
                  value={values?.seats?.rangeFrom}
                />
              </Form.Group>
              {errors?.seats?.rangeFrom && touched?.seats?.rangeFrom && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.seats?.rangeFrom}
                  </span>
                </>
              )}
            </div>
            <div className="col-xl-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Range Up To</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  className="form-control"
                  name="rangeUpTo"
                  onChange={handleChange}
                  value={values?.seats?.rangeUpTo}
                />
              </Form.Group>
              {errors?.seats?.rangeUpTo && touched?.seats?.rangeUpTo && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.seats?.rangeUpTo}
                  </span>
                </>
              )}
            </div>
            <div className="col-xl-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Selection</FormLabelStyled>
                <Select
                  options={SeatingOrderOptions}
                  placeholder="Select Selection"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                  value={SeatingOrderOptions?.find((l) => l.value === l?.value)}
                  onChange={(e: any) => handleSelectValues("order", e?.value)}
                />
              </Form.Group>
              {errors?.seats?.order && touched?.seats?.order && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.seats?.order}
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

export default SeatNumbering;
