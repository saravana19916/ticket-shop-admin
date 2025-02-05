import React, { FC } from "react";
import { Form, FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../../shared/CustomDropDownToggle";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { FormikErrors, FormikTouched } from "formik";
import { IAddListingAddZoningAndCapacity } from "../type";
import { FormLabelStyled } from "../../../../styledComponents/styledForm";
import Select from "react-select";
interface IProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (
    field: string,
    value: string | null | (string | number)[]
  ) => void;
}
const productOptions = [
  {
    value: "Product One",
    label: "Product One",
  },
  {
    value: "Product Two",
    label: "Product Two",
  },
  {
    value: "Product Three",
    label: "Product Three",
  },
];
const ConnectProducts: FC<IProps> = ({
  errors,
  touched,
  values,
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
  const _handleOnSelect = (product: string) => {
    const connectedProducts = values.seats?.connectedProducts || [];
    if (connectedProducts?.includes(product)) {
      const updatedConnectedProducts = connectedProducts.filter(
        (s) => s !== product
      );
      handleOnChange("seats.connectedProducts", updatedConnectedProducts);
    } else {
      const updatedConnectedProducts = [...connectedProducts, product];
      handleOnChange("seats.connectedProducts", updatedConnectedProducts);
    }
  };
  return (
    <>
      <div className="col-12 mb-7 px-0">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Connect Products
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            in this section you can connect products to the zone you have
            created.
          </span>
          <div className="row">
            <div className="col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Product</FormLabelStyled>
                <Select
                  options={productOptions}
                  placeholder="Select product"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                  value={productOptions?.find((l) => l.value === l?.value)}
                  onChange={(e: any) => _handleOnSelect(e?.value)}
                />
              </Form.Group>
              {errors?.seats?.connectedProducts &&
                touched?.seats?.connectedProducts && (
                  <>
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.seats?.connectedProducts}
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

export default ConnectProducts;
