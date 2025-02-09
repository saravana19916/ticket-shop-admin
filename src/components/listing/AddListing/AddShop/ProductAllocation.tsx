import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { FC, useState } from "react";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { IAddListingShopProps } from "./type";
import { ErrorMessage, FormikErrors, FormikTouched } from "formik";
import {
  FormGroupStyled,
  FormInputStyled,
  FormLabelStyled,
  FormStyledPill,
} from "../../../styledComponents/styledForm";
import Select from "react-select";
interface IProductAllocationProps {
  handleOnChange: (field: string, value: string | undefined) => void;
  errors: FormikErrors<IAddListingShopProps>;
  values: IAddListingShopProps;
  touched: FormikTouched<IAddListingShopProps>;
}
const productOptions = [
  {
    label: "Dubai Concert Ticket",
    value: "Dubai Concert Ticket",
  },
  {
    label: "Aquaventure Waterpark Ticket",
    value: "Aquaventure Waterpark Ticket",
  },
  {
    label: "Desert Safari Adventure Ticket",
    value: "Desert Safari Adventure Ticket",
  },
];
const productsList = [
  { id: 1, ticketName: "Silver Ticket", price: 199 },
  { id: 2, ticketName: "Silver Ticket", price: 199 },
  { id: 3, ticketName: "Silver Ticket", price: 199 },
  { id: 4, ticketName: "Silver Ticket", price: 199 },
];
const ProductAllocation: FC<IProductAllocationProps> = ({ handleOnChange }) => {
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
  const customStylesForGroup = {
    control: (provided: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      borderRadius: "0",
      // borderRight: "1px solid #e5e7eb",
      padding: "4px 12px",
      outline: "none",
      // "&:hover": {
      //   borderRight: "1px solid #b3b3b3",
      // },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      textAlign: "center",
      margin: 0,
      padding: 0,
      fontSize: "14px",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#777",
      padding: "0 8px",
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#ED003B" : "transparent",
      color: state.isSelected ? "#fff" : provided.color,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
      },
    }),
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value, name } = event.target;
    handleOnChange(`productAllocation[${index}].${name}`, value);
  };
  const handleProductOnChange = (value: string | undefined, index: number) => {
    handleOnChange(`productAllocation[${index}].product`, value);
  };
  return (
    <>
      <div className="col-12 mb-4">
        <span className="text-gray d-block mb-6 fs-12px">
          Add the products you like to the shop and define special discounts if
          any.{" "}
        </span>
      </div>
      <div className="col-12 mb-4 table-responsive">
        <table
          className="w-100"
          style={{ borderSpacing: "0 12px", borderCollapse: "separate" }}
        >
          <thead>
            <tr>
              <th>
                <FormLabelStyled>Products</FormLabelStyled>
              </th>
              <th>
                <FormLabelStyled>Units</FormLabelStyled>
              </th>
              <th>
                <FormLabelStyled>Discount</FormLabelStyled>
              </th>
            </tr>
          </thead>
          <tbody>
            {productsList?.map((product) => (
              <>
                <tr key={product.id}>
                  <td
                    className="pe-4 w-50"
                    style={{
                      minWidth: "200px",
                    }}
                  >
                    <FormStyledPill
                      style={{
                        marginTop: "-4px",
                      }}
                    >
                      <div className="icon"></div>
                      <div>
                        {product?.ticketName}{" "}
                        <span className="d-inline-block ms-3">-</span>
                        <span className="fw-normal d-inline-block ms-3">
                          AED {product.price}
                        </span>
                      </div>
                    </FormStyledPill>{" "}
                  </td>
                  <td
                    className="pe-4"
                    style={{
                      width: "23%",
                      minWidth: "80px",
                    }}
                  >
                    <FormInputStyled
                      type="number"
                      className="form-control"
                      name="units"
                    />
                  </td>
                  <td
                    className="p-0"
                    style={{
                      width: "37%",
                      minWidth: "190px",
                    }}
                  >
                    <FormGroupStyled>
                      <div
                        className="form-group-row"
                        style={{
                          marginTop: "-4px",
                        }}
                      >
                        <div className="col px-0">
                          <Select
                            defaultValue={{
                              label: "$",
                              value: "$",
                            }}
                            styles={customStylesForGroup}
                            menuPortalTarget={document.body}
                            classNamePrefix="react-select"
                            options={[
                              { label: "$", value: "$" },
                              { label: "%", value: "%" },
                            ]}
                          />
                        </div>

                        <div className="col input-column pe-0">
                          <input type="text" />
                        </div>
                      </div>
                    </FormGroupStyled>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {/* 
      {values.productAllocation?.map((productAllocation, index) => (
        <>
          <div className="col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Choose Product</FormLabelStyled>
              <Select
                id="dropdown-basic"
                options={productOptions}
                placeholder="Select Shop type"
                classNamePrefix="Select"
                className="mb-2"
                styles={customStyles}
                value={ShopType?.find(
                  (l) => l.value === values?.shopInformation?.shopType || ""
                )}
                onChange={(e: any) =>
                  handleDropDownChange("shopType", e?.value)
                }
              />
              <Dropdown>
                <CustomDropdownToggle
                  variant="light"
                  id="dropdown-basic"
                  className="w-100 rounded-pill bg-white text-start p-3 ps-5 fs-5 d-flex justify-content-between align-items-center fs-12px text-black border-gray-light-3"
                >
                  <span
                    className={`fs-14px ${
                      productAllocation.product
                        ? "text-black"
                        : "text-color-gray-1"
                    }`}
                  >
                    {productAllocation.product ?? "Pick Product"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                </CustomDropdownToggle>
                <Dropdown.Menu className="w-100 fs-14px m-0">
                  {productOptions?.map((product, productIndex) => (
                    <>
                      <Dropdown.Item
                        key={productIndex}
                        eventKey={productIndex}
                        onClick={() =>
                          handleProductOnChange(product.value, index)
                        }
                      >
                        {product.label}
                      </Dropdown.Item>
                    </>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <ErrorMessage
                name={`productAllocation[${index}].product`}
                component="span"
                className="text-danger d-inline-block ms-5"
              />
            </Form.Group>
          </div>
          <div className="mb-6 col-xl-6 col-12">
            <Form.Group>
              <FormLabelStyled>Total Inventory</FormLabelStyled>
              <FormInputStyled
                type="number"
                className="form-control"
                placeholder="1,000"
                value={productAllocation.totalInventory || ""}
                name="totalInventory"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event, index)
                }
              />
            </Form.Group>
            <ErrorMessage
              name={`productAllocation[${index}].totalInventory`}
              component="span"
              className="text-danger d-inline-block ms-5"
            />
          </div>
          <div className="mb-6 col-xl-6 col-12">
            <Form.Group>
              <FormLabelStyled>Allocation Unit</FormLabelStyled>
              <FormInputStyled
                type="number"
                className="form-control"
                placeholder="5,000"
                name="allocationUnit"
                value={productAllocation.allocationUnit || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event, index)
                }
              />
            </Form.Group>
            <ErrorMessage
              name={`productAllocation[${index}].allocationUnit`}
              component="span"
              className="text-danger d-inline-block ms-5"
            />
          </div>
          <div className="mb-6 col-xl-6 col-12">
            <Form.Group>
              <FormLabelStyled>Discount &#37;</FormLabelStyled>
              <FormInputStyled
                type="number"
                className="form-control"
                placeholder="10%"
                name="discountPercentage"
                value={productAllocation.discountPercentage || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event, index)
                }
              />
            </Form.Group>
            <ErrorMessage
              name={`productAllocation[${index}].discountPercentage`}
              component="span"
              className="text-danger d-inline-block ms-5"
            />
          </div>
          <div className="mb-6 col-xl-6 col-12">
            <Form.Group>
              <FormLabelStyled>Price</FormLabelStyled>
              <FormInputStyled
                type="number"
                className="form-control"
                placeholder="99"
                name="price"
                value={productAllocation.price || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event, index)
                }
              />
            </Form.Group>
            <ErrorMessage
              name={`productAllocation[${index}].price`}
              component="span"
              className="text-danger d-inline-block ms-5"
            />
          </div>
          <div className="mb-6 col-xl-6 col-12">
            <Form.Group>
              <FormLabelStyled>Allocation &#37;</FormLabelStyled>
              <FormInputStyled
                type="number"
                className="form-control"
                placeholder="35%"
                name="allocation"
                value={productAllocation.allocation || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event, index)
                }
              />
            </Form.Group>
            <ErrorMessage
              name={`productAllocation[${index}].allocation`}
              component="span"
              className="text-danger d-inline-block ms-5"
            />
          </div>
          <div className="mb-6 col-xl-6 col-12">
            <Form.Group>
              <FormLabelStyled>Discount &#36;</FormLabelStyled>
              <FormInputStyled
                type="number"
                className="form-control"
                placeholder="35 AED"
                name="discountPrice"
                value={productAllocation.discountPrice || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event, index)
                }
              />
            </Form.Group>
            <ErrorMessage
              name={`productAllocation[${index}].discountPrice`}
              component="span"
              className="text-danger d-inline-block ms-5"
            />
          </div>
        </>
      ))} */}
    </>
  );
};

export default ProductAllocation;
