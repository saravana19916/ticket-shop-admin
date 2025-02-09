import React, { FC, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";
import { FormikErrors, FormikTouched } from "formik";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import { SketchPicker } from "react-color";

interface IProductInfoProps {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
}
const productTypes = [
  {
    label: "Dubai Concert Ticket",
    value: "Dubai Concert Ticket",
  },
  {
    label: "Aquaventure Waterpark Ticket",
    value: "Aquaventure Waterpark Ticket",
  },
];

const ProductInfo: FC<IProductInfoProps> = ({
  handleOnChange,
}) => {
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

  const hasAccess = [{ label: "All Zones", value: "allZones" }];

  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <span className="text-gray d-block mb-6 fs-12px">
            In the section, you connect the products created with the releavant
            zones and define access for each of the products.
          </span>
          <div className="row">
            <div className="col-9 mb-6">
              <Form.Group>
                <FormLabelStyled>Select Product</FormLabelStyled>
                <Select
                  options={productTypes}
                  placeholder="Select Product"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                />
              </Form.Group>
            </div>
            <div className="col-3 mb-6">
              <Form.Group>
                <FormLabelStyled>Color Tag</FormLabelStyled>
                <div
                  ref={colorPickerRef}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
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
                        border: "1px solid #ccc",
                      }}
                    />
                    <span>Pick Color</span>
                  </div>
                  {showColorPicker && (
                    <div style={{ position: "absolute", zIndex: 100 }}>
                      <SketchPicker
                        color={color}
                        onChange={(updatedColor) => setColor(updatedColor.hex)}
                      />
                    </div>
                  )}
                </div>
              </Form.Group>
            </div>
            <div className="col-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Zone</FormLabelStyled>
                <Select
                  options={zoneTypes}
                  placeholder="Select Zone"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                />
              </Form.Group>
            </div>
            <div className="col-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Section or Row</FormLabelStyled>
                <Select
                  options={sectionTypes}
                  placeholder="Select Section or Row"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                />
              </Form.Group>
            </div>
            <div className="col-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Has access to</FormLabelStyled>
                <Select
                  options={hasAccess}
                  placeholder="Select Has access to"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                />
              </Form.Group>
            </div>
            <div className="col-6 mb-6">
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
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default ProductInfo;
