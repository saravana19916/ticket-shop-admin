import React, { FC } from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";
import { FormikErrors, FormikTouched } from "formik";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import {
  FormDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
  StyledSunEditor,
} from "../../../styledComponents/styledForm";
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
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <Form.Group className="fs-5 fw-500 text-black mb-4">
            Product Information
          </Form.Group>
          <span className="text-gray d-block mb-6 fs-12px">
            the explanation about this section goes here
          </span>
          <div className="row">
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Product Name / Title</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Name / Title"
                  className="form-control"
                  name="productName"
                  value={values.productDetails?.productName || ""}
                  onChange={handleChange}
                />
                {errors &&
                  touched &&
                  touched?.productDetails?.productName &&
                  errors?.productDetails?.productName && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.productName}
                    </span>
                  )}
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Product Type</FormLabelStyled>
                <Select
                  options={productTypes}
                  placeholder="Select Type"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                  value={productTypes?.find(
                    (l) => l.value === values.productDetails?.productCategory
                  )}
                  // onChange={(e) => {
                  //   setFieldValue("productCategory", e?.value || null);
                  // }}
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Product Category</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Category"
                  name="productCategory"
                  value={values.productDetails?.productCategory || ""}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors &&
                  touched &&
                  touched?.productDetails?.productCategory &&
                  errors?.productDetails?.productCategory && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.productCategory}
                    </span>
                  )}
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Product Sub Category</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Sub category"
                  name="productSubCategory"
                  value={values.productDetails?.productSubCategory || ""}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors &&
                  touched &&
                  touched?.productDetails?.productSubCategory &&
                  errors?.productDetails?.productSubCategory && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.productSubCategory}
                    </span>
                  )}
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Product Subtitle (Early Bird / Last Minute)
                </FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Subtitle"
                  className="form-control"
                  name="productSubTitle"
                  value={values.productDetails?.productSubTitle || ""}
                  onChange={handleChange}
                />
                {errors &&
                  touched &&
                  touched?.productDetails?.productSubTitle &&
                  errors?.productDetails?.productSubTitle && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.productSubTitle}
                    </span>
                  )}
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Description</FormLabelStyled>
                <StyledSunEditor
                  setOptions={{
                    font: ["Poppins"],
                    defaultStyle: "font-family: Poppins;",
                    height: "260px",
                    buttonList: [
                      ["undo", "redo"],
                      ["bold", "italic", "underline", "strike"],
                      ["list", "align", "fontSize"],
                    ],
                  }}
                />
                {/* <FormDescriptionStyled
                  placeholder="Description"
                  name="description"
                  className="p-5 form-control"
                  value={values.productDetails?.description || ""}
                  onChange={handleChange}
                /> */}
                {errors &&
                  touched &&
                  touched?.productDetails?.description &&
                  errors?.productDetails?.description && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.description}
                    </span>
                  )}
              </Form.Group>
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default ProductInfo;
