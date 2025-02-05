import React, { ChangeEvent, FC, useState } from "react";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import { IDynamicPricingStrategyProps } from "./type";
import { FormikErrors, FormikTouched } from "formik";
import moment from "moment";
import {
  DateTimeCustomInput,
  DateTimeInputGroup,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import Select from "react-select";

interface IByDateFormProps {
  values: IDynamicPricingStrategyProps;
  errors: FormikErrors<IDynamicPricingStrategyProps>;
  touched: FormikTouched<IDynamicPricingStrategyProps>;
  handleOnChange: (field: string, value: string | null | string[]) => void;
}
const productsOptions = [
  {
    label: "Product One",
    value: "Product One",
  },
  {
    label: "Product Two",
    value: "Product Two",
  },
  {
    label: "Product Three",
    value: "Product Three",
  },
];
const shopsOptions = [
  {
    label: "Shops One",
    value: "Shops One",
  },
  {
    label: "Shops Two",
    value: "Shops Two",
  },
  {
    label: "Shops Three",
    value: "Shops Three",
  },
];
const capacityActionOptions = [
  {
    label: "Reduce By %",
    value: "Reduce By %",
  },
];
const pricingActionOptions = [
  {
    label: "Reduce By %",
    value: "Reduce By %",
  },
];
const ByDateForm: FC<IByDateFormProps> = ({
  values,
  handleOnChange,
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
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "3px",
    }),
    control: (provided: any) => ({
      ...provided,
      padding: "4px",
      paddingLeft: "14px",
      paddingRight: "14px",
      borderRadius: "50px",
      boxShadow: "none",
      borderColor: "#b3b3b3",
      "&:hover": {
        borderColor: "#b3b3b3",
      },
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
  };
  const handleStartDateChange = (date: any) => {
    handleOnChange(`byDate.startDate`, date);
  };
  const handleEndDateChange = (date: any) => {
    handleOnChange(`byDate.endDate`, date);
  };

  const isDisabled = values.strategyType != "By Date";
  const handleChange = (event: ChangeEvent<any>) => {
    const { value, name } = event.target;
    if (value) {
      handleOnChange(`byDate.${name}`, value);
    } else {
      handleOnChange(`byDate.${name}`, null);
    }
  };
  const handleStrategyNameChange = (event: ChangeEvent<any>) => {
    const { value, name } = event.target;
    if (value) {
      handleOnChange(`${name}`, value);
    } else {
      handleOnChange(`${name}`, null);
    }
  };
  const _handleProductOnChange = (product: string) => {
    const selectedProducts = values?.byDate?.products || [];
    if (selectedProducts?.includes(product)) {
      const updatedProducts = selectedProducts?.filter((l) => l !== product);
      handleOnChange("byDate.products", updatedProducts);
    } else {
      const updatedProducts = [...selectedProducts, product];
      handleOnChange("byDate.products", updatedProducts);
    }
  };
  const _handleStrategyTypeOnChange = (type: string) => {
    handleOnChange("strategyType", type);
  };
  const _handleShopOnChange = (shop: string) => {
    const selectedShops = values?.byDate?.shops || [];
    if (selectedShops?.includes(shop)) {
      const updatedShops = selectedShops?.filter((l) => l !== shop);
      handleOnChange("byDate.shops", updatedShops);
    } else {
      const updatedShops = [...selectedShops, shop];
      handleOnChange("byDate.shops", updatedShops);
    }
  };
  const _handlePriceActionOnClick = (value: string) => {
    handleOnChange("byDate.pricingAction", value);
  };
  const _handleCapacityActionOnClick = (value: string) => {
    handleOnChange("byDate.capacityAction", value);
  };
  const byDateError: any = errors?.byDate;
  const byDateTouched: any = touched?.byDate;
  return (
    <>
      <div className="col-12 mb-2" id="dynamicPricingStrategyByDateForm">
        <label className="custom-control custom-radio-md me-5 d-flex align-items-center">
          <input
            type="radio"
            className="custom-control-input"
            name="pricing-mode"
            defaultValue="byDate"
            id="byDateRadioButton"
            defaultChecked={values.strategyType === "By Date"}
            onClick={() => _handleStrategyTypeOnChange("By Date")}
          />
          <span className="custom-control-label fw-600">By Date</span>
        </label>
        <span className="text-gray d-block mb-6 fs-12px">
          in this section you can define the parameters for your dynamic pricing
          based on specific dates and periods.
        </span>
      </div>
      <div className="col-12 mb-4">
        <Form.Group>
          <FormLabelStyled>Choose Product</FormLabelStyled>
          <Select
            isMulti
            id="dropdown-basic"
            options={productsOptions}
            placeholder="you can choose multiple products"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            onChange={(e: any) => _handleProductOnChange(e.value)}
            isDisabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.products &&
          byDateTouched &&
          byDateTouched.products && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.products}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-4 z-3">
        <Form.Group>
          <FormLabelStyled>Start Date</FormLabelStyled>
          <DateTimeInputGroup disabled={isDisabled}>
            <DatePicker
              disabled={isDisabled}
              selected={values.byDate?.startDate}
              onChange={handleStartDateChange}
              className={`custom-datepicker z-3 ${
                isDisabled ? "text-color-gray-1" : "text-black"
              }`}
              style={{
                backgroundColor: "#f2f2f2",
              }}
              customInput={
                <div className="d-flex align-items-center justify-content-between min-w-100">
                  <DateTimeCustomInput
                    disabled={isDisabled}
                    type="text"
                    readOnly
                    placeholder="Enter Start Date"
                    value={
                      values.byDate?.startDate
                        ? moment(values.byDate?.startDate).format("DD MMM YYYY")
                        : ""
                    }
                  />

                  <span className="d-inline-block me-3 p-3 cursor-pointer cursor-pointer z-3">
                    <ChevronLeftIcon className="h-4 w-4" />
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </div>
              }
            />
          </DateTimeInputGroup>
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.startDate &&
          byDateTouched &&
          byDateTouched.startDate && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.startDate}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-4 z-3">
        <Form.Group>
          <FormLabelStyled>End Date</FormLabelStyled>
          <DateTimeInputGroup disabled={isDisabled}>
            <DatePicker
              disabled={isDisabled}
              selected={values.byDate?.endDate}
              onChange={handleEndDateChange}
              className={`custom-datepicker z-3 ${
                isDisabled ? "text-color-gray-1" : "text-black"
              }`}
              customInput={
                <div className="d-flex align-items-center justify-content-between min-w-100">
                  <DateTimeCustomInput
                    type="text"
                    disabled={isDisabled}
                    placeholder="Enter End Date"
                    value={
                      values.byDate?.endDate
                        ? moment(values.byDate?.endDate).format("DD MMM YYYY")
                        : ""
                    }
                  />

                  <span className="d-inline-block me-3 p-3 cursor-pointer cursor-pointer z-3">
                    <ChevronLeftIcon className="h-4 w-4" />
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </div>
              }
            />
          </DateTimeInputGroup>
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.endDate &&
          byDateTouched &&
          byDateTouched.endDate && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.endDate}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled>Pricing Action</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={pricingActionOptions}
            placeholder="Choose"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            onChange={(e: any) => _handlePriceActionOnClick(e.value)}
            isDisabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.pricingAction &&
          byDateTouched &&
          byDateTouched.pricingAction && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.pricingAction}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-3 col-lg-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Value (%)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="pricingActionValue"
            value={values.byDate?.pricingActionValue}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.pricingActionValue &&
          byDateTouched &&
          byDateTouched.pricingActionValue && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.pricingActionValue}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-3 col-lg-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Price ($)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="pricingActionPrice"
            value={values.byDate?.pricingActionPrice}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.pricingActionPrice &&
          byDateTouched &&
          byDateTouched.pricingActionPrice && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.pricingActionPrice}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled>Capacity Action</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={capacityActionOptions}
            placeholder="Choose"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            onChange={(e: any) => _handleCapacityActionOnClick(e.value)}
            isDisabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.capacityAction &&
          byDateTouched &&
          byDateTouched.capacityAction && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.capacityAction}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-3 col-lg-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Value (%)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="capacityActionValue"
            value={values.byDate?.capacityActionValue}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.capacityActionValue &&
          byDateTouched &&
          byDateTouched.capacityActionValue && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.capacityActionValue}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-3 col-lg-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Unit (#)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="capacityActionUnit"
            value={values.byDate?.capacityActionUnit}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.capacityActionUnit &&
          byDateTouched &&
          byDateTouched.capacityActionUnit && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.capacityActionUnit}
              </span>
            </>
          )}
      </div>
      <div className="col-12 mb-4">
        <Form.Group>
          <FormLabelStyled>Shop allocation</FormLabelStyled>
          <Select
            isMulti
            id="dropdown-basic"
            options={shopsOptions}
            placeholder="Select Shop allocation"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            onChange={(e: any) => {
              _handleShopOnChange(e.value);
            }}
            isDisabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.shops &&
          byDateTouched &&
          byDateTouched.shops && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.shops}
              </span>
            </>
          )}
      </div>
      <div className="col-12 mb-4">
        <Form.Group>
          <FormLabelStyled htmlFor="showName">Strategy Name</FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            placeholder="define a name or strategy for this pricing"
            name="strategyName"
            value={values.byDate?.strategyName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDateError &&
          byDateError.strategyName &&
          byDateTouched &&
          byDateTouched.strategyName && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDateError.strategyName}
              </span>
            </>
          )}
      </div>
    </>
  );
};

export default ByDateForm;
