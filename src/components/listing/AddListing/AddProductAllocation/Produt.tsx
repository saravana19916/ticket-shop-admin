import React, { FC, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";
import { FormikErrors, FormikTouched } from "formik";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import {
  FormInputStyled,
  FormDivStyled,
  FormLabelStyled,
  StyledInputDiv,
} from "../../../styledComponents/styledForm";
import { SketchPicker } from "react-color";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SelectDropDown from "../../../shared/SelectDropDown";

interface IProductInfoProps {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
}

const ProductInfo: FC<IProductInfoProps> = ({ handleOnChange }) => {
  const [color, setColor] = useState("#00D1FF");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      padding: "3px",
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
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    handleOnChange(name, value);
  };
  const handleDropdownChange = (field: string, value: string | null) => {
    handleOnChange(field, value);
  };

  const productTypes = [
    { label: "Silver Ticket", value: "silver" },
    { label: "Golden Ticket", value: "golden" },
  ];

  const zoneTypes = [
    { label: "Platinum I", value: "platinumI" },
    { label: "Platinum II", value: "platinumII" },
  ];

  const sectionTypes = [
    { label: "AB", value: "ab" },
    { label: "AC", value: "ac" },
  ];

  return (
    <>
      <div className="col-12 mb-7 mt-6">
        <Form.Group>
          <div className="row">
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Select Product</FormLabelStyled>
                <SelectDropDown
                  options={productTypes}
                  placeholder="Select Product"
                  classNamePrefix="Select"
                  className="mb-2"
                  isMulti
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Zone</FormLabelStyled>
                <SelectDropDown
                  options={zoneTypes}
                  placeholder="Select Zone"
                  classNamePrefix="Select"
                  className="mb-2"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Section or Row</FormLabelStyled>
                <SelectDropDown
                  options={sectionTypes}
                  placeholder="Select Section or Row"
                  classNamePrefix="Select"
                  className="mb-2"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-7">
              <Form.Group>
                <FormLabelStyled>Has access to</FormLabelStyled>
                <div className="row">
                  {[
                    {
                      value: "General Audience (G)",
                      label: "General Audience (G)",
                    },
                    {
                      value: "Parental Guidance (PG)",
                      label: "Parental Guidance (PG)",
                    },
                    { value: "Teens (12-18)", label: "Teens (12-18)" },
                    { value: "adults", label: "Adults" },
                    { value: "children", label: "Children" },
                  ].map((option) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 g-3 ps-4"
                      key={option.value}
                    >
                      <StyledInputDiv className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={option.value}
                          name={option.value}
                          value={option.value}
                          // checked={values?.suitability?.includes(option.value)}
                          // onChange={(e) => {
                          //   const newValue = e.target.value;
                          //   const updatedSelection = e.target.checked
                          //     ? [...(values.suitability || []), newValue]
                          //     : values.suitability?.filter(
                          //         (v) => v !== newValue
                          //       );

                          //   setFieldValue("suitability", updatedSelection);
                          // }}
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
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Entrance Gate</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Type Entrance Gate"
                  className="form-control"
                  name="productName"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Color Tag</FormLabelStyled>
                <FormDivStyled
                  ref={colorPickerRef}
                  className="form-control d-flex align-middle"
                  onClick={() => setShowColorPicker(true)}
                >
                  <div
                    className=""
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      cursor: "pointer",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: color,
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <span className="d-inline-block ms-auto pe-3 pt-1">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                  {showColorPicker && (
                    <div style={{ position: "absolute", zIndex: 100 }}>
                      <SketchPicker
                        color={color}
                        onChange={(updatedColor) => setColor(updatedColor.hex)}
                      />
                    </div>
                  )}
                </FormDivStyled>
              </Form.Group>
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default ProductInfo;
