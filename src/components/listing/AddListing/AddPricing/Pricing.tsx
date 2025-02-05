import React, { FC, useState } from "react";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import { FormikErrors, FormikTouched } from "formik";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import Select from "react-select";
interface IPricingAndCapacityProps {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
}
const TransactionCurrency = [
  {
    label: "AED (UAE Dirhams)",
    value: "AED (UAE Dirhams)",
  },
];
const Pricing: FC<IPricingAndCapacityProps> = ({
  handleOnChange,
  errors,
  values,
  touched,
}) => {
  const handleDropdownChange = (field: string, value: string | null) => {
    handleOnChange(field, value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    handleOnChange(name, value);
  };
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
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black mb-4">
            Pricing
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            the explanation about this section goes here
          </span>
          <div className="row">
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Net Sales Price</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  min={0}
                  value={values?.pricing?.netSalesPrice || ""}
                  className="form-control"
                  name="netSalesPrice"
                  onChange={handleChange}
                />
              </Form.Group>
              {errors &&
                touched &&
                touched?.pricing?.netSalesPrice &&
                errors?.pricing?.netSalesPrice && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.pricing?.netSalesPrice}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group className="border-dark">
                <FormLabelStyled>Transaction Currency</FormLabelStyled>
                <Select
                  options={TransactionCurrency}
                  placeholder="Select Type"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                  value={TransactionCurrency?.find(
                    (l) => l.value === values.pricing?.transactionCurrency
                  )}
                />
              </Form.Group>
              {errors &&
                touched &&
                touched?.pricing?.transactionCurrency &&
                errors?.pricing?.transactionCurrency && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.pricing?.transactionCurrency}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>VAT Tax</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  value={values?.pricing?.vatTax || ""}
                  className="form-control"
                  name="vatTax"
                  onChange={handleChange}
                  placeholder="%"
                />
                {/* <InputGroup.Text className="form-control-input-group-text">
                  %
                </InputGroup.Text> */}
              </Form.Group>
              {errors &&
                touched &&
                touched?.pricing?.vatTax &&
                errors?.pricing?.vatTax && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.pricing?.vatTax}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Entertainment Tax</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  value={values?.pricing?.entertainmentTax || ""}
                  className="form-control"
                  name="entertainmentTax"
                  onChange={handleChange}
                  placeholder="%"
                />
              </Form.Group>
              {errors &&
                touched &&
                touched?.pricing?.entertainmentTax &&
                errors?.pricing?.entertainmentTax && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.pricing?.entertainmentTax}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Municipal / City Tax</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  value={values?.pricing?.municipalTax || ""}
                  className="form-control"
                  name="municipalTax"
                  onChange={handleChange}
                  placeholder="%"
                />
              </Form.Group>
              {errors &&
                touched &&
                touched?.pricing?.municipalTax &&
                errors?.pricing?.municipalTax && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.pricing?.municipalTax}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Other Tax</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  value={values?.pricing?.otherTax || ""}
                  className="form-control"
                  name="otherTax"
                  onChange={handleChange}
                  placeholder="%"
                />
              </Form.Group>
              {errors &&
                touched &&
                touched?.pricing?.otherTax &&
                errors?.pricing?.otherTax && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.pricing?.otherTax}
                  </span>
                )}
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default Pricing;
