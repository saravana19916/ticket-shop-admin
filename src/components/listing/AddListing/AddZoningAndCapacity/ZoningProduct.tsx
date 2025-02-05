import React, { FC } from "react";
// import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
// import styled from "styled-components";

interface IZoningProductProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (field: string, value: string | null) => void;
}
// interface ISelectedValueProps {
//   productCategory: string;
//   productFormat: string;
//   productType: string;
//   productAllocation: string;
//   selectionOptions: string;
//   bookingMode: string;
// }
// import {
//   IProductDataProps,
//   IOptionProps,
//   productData,
// } from "../../../../commondata/addListingPageOne";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FormikErrors, FormikTouched } from "formik";
import { IAddListingAddZoningAndCapacity } from "./type";
// const CustomDropdownToggle = styled(DropdownToggle)`
//   &::before,
//   &::after {
//     content: none !important;
//   }
// `;

const ZoningProduct: FC<IZoningProductProps> = ({}) => {
  // const _handleSelectValues = (
  //   title:
  //     | "productCategory"
  //     | "productFormat"
  //     | "productType"
  //     | "productAllocation"
  //     | "selectionOption"
  //     | "bookingMode",
  //   value: string
  // ) => {
  //   handleOnChange(`productDetails.${title}`, value);
  // };
  // const _handleOnChange = (event: ChangeEvent<any>, fieldName: string) => {
  //   const value = event?.target?.value;
  //   handleOnChange(`productDetails.${fieldName}`, value);
  // };
  return (
    <>
      {/* <div className="col-xl-8 col-12 mb-5">
        <Form.Group>
          <Form.Label className="fs-6 fw-500 mb-3 text-primary-1">
            Product
          </Form.Label>
          <span className="text-gray d-inline-block mb-3 fs-14px">
            Set the parameters of the product that you would like to define
            zoning and capacity.
          </span>
          {productData.map((l: IProductDataProps) => (
            <>
              <Form.Group>
                <InputGroup className="mt-3 mb-1">
                  <FormControl
                    className="p-2 fw-600 fs-6 ps-6 w-50 form-control-label-rounded-start"
                    disabled
                    value={l.title}
                  />
                  {l.isTextBox && (
                    <>
                      <FormControl
                        className="p-3 bg-white d-flex justify-content-between w-50 fs-14px border-end-rounded form-control-border-color border-inline-start-0 "
                        placeholder="Insert Category Name"
                        onChange={(event) => _handleOnChange(event, l.value)}
                        value={values.productDetails?.[l.value] || ""}
                      />
                    </>
                  )}
                  {!l.isTextBox && (
                    <>
                      <Dropdown>
                        <CustomDropdownToggle
                          variant="light"
                          id="dropdown-basic"
                          className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center bg-white custom-dropdown-toggle-end-rounded form-control-border-color border-inline-start-0 "
                        >
                          {values?.productDetails?.[l.value] || "Choose"}
                          <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                        </CustomDropdownToggle>
                        <Dropdown.Menu className="w-50 fs-6 m-0">
                          {l.options.map((option: IOptionProps) => (
                            <>
                              <Dropdown.Item
                                eventKey="1"
                                onClick={() =>
                                  _handleSelectValues(l.value, option.value)
                                }
                              >
                                {option.label}
                              </Dropdown.Item>
                            </>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  )}
                </InputGroup>
                {errors &&
                  errors?.productDetails &&
                  errors?.productDetails?.[l.value] &&
                  touched &&
                  touched?.productDetails &&
                  touched?.productDetails?.[l.value] && (
                    <span className="text-danger d-inline-block ms-5 ps-2">
                      {errors?.productDetails?.[l.value]}
                    </span>
                  )}
              </Form.Group>
            </>
          ))}
        </Form.Group>
      </div> */}
    </>
  );
};

export default ZoningProduct;
