import React, { ChangeEvent, FC, useState } from "react";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { IDynamicPricingStrategyProps } from "./type";
import { FormikErrors, FormikTouched } from "formik";
import { label } from "yet-another-react-lightbox";
import moment from "moment";
import {
  DateTimeCustomInput,
  DateTimeInputGroup,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import Select from "react-select";
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
const pricingActionOptions = [
  {
    label: "Reduce By %",
    value: "Reduce By %",
  },
];
const demandSection = [
  {
    label: "Section A",
    value: "Section A",
  },
  {
    label: "Section B",
    value: "Section B",
  },
  {
    label: "Section C",
    value: "Section C",
  },
];
const exceedByOptions = [
  {
    label: "10%",
    value: "10%",
  },
  {
    label: "20%",
    value: "20%",
  },
  {
    label: "25%",
    value: "25%",
  },
];
interface IByDemandFormProps {
  values: IDynamicPricingStrategyProps;
  errors: FormikErrors<IDynamicPricingStrategyProps>;
  touched: FormikTouched<IDynamicPricingStrategyProps>;
  handleOnChange: (field: string, value: string | null | string[]) => void;
}

const ByDemandForm: FC<IByDemandFormProps> = ({
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
  const isDisabled = values.strategyType != "By Demand";
  const handleChange = (event: ChangeEvent<any>) => {
    const { value, name } = event.target;
    if (value) {
      handleOnChange(`byDemand.${name}`, value);
    } else {
      handleOnChange(`byDemand.${name}`, null);
    }
  };
  const _handleProductOnChange = (product: string) => {
    const selectedProducts = values?.byDemand?.products || [];
    if (selectedProducts?.includes(product)) {
      const updatedProducts = selectedProducts?.filter((l) => l !== product);
      handleOnChange("byDemand.products", updatedProducts);
    } else {
      const updatedProducts = [...selectedProducts, product];
      handleOnChange("byDemand.products", updatedProducts);
    }
  };
  const _handleShopOnChange = (shop: string) => {
    const selectedShops = values?.byDemand?.shops || [];
    if (selectedShops?.includes(shop)) {
      const updatedShops = selectedShops?.filter((l) => l !== shop);
      handleOnChange("byDemand.shops", updatedShops);
    } else {
      const updatedShops = [...selectedShops, shop];
      handleOnChange("byDemand.shops", updatedShops);
    }
  };
  const _handleStrategyTypeOnChange = (type: string) => {
    handleOnChange("strategyType", type);
  };
  const _handlePriceActionOnClick = (value: string) => {
    handleOnChange("byDemand.pricingAction", value);
  };
  const _handleSectionOnClick = (value: string) => {
    handleOnChange("byDemand.section", value);
  };
  const _handleExceedByOnClick = (value: string) => {
    handleOnChange("byDemand.exceedBy", value);
  };
  const handleDateAndTimeChange = (date: any) => {
    handleOnChange(`byDemand.dateAndTime`, date);
  };
  const byDemandError: any = errors?.byDemand;
  const byDemandTouched: any = touched?.byDemand;
  return (
    <>
      <div className="col-12 mb-5" id="dynamicPricingStrategyByDemandForm">
        <label className="custom-control custom-radio-md d-flex align-items-center">
          <input
            type="radio"
            className="custom-control-input"
            name="pricing-mode"
            defaultValue="By Demand"
            id="byDemandRadioButton"
            onClick={() => _handleStrategyTypeOnChange("By Demand")}
            defaultChecked={!isDisabled}
          />
          <span className="custom-control-label fw-600">By Demand</span>
        </label>
        <span className="text-gray d-inline-block mb-4 fs-14px">
          in this section you can define the parameters for your dynamic pricing
          based on demands and available capacity.
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
          byDemandError &&
          byDemandError.products &&
          byDemandTouched &&
          byDemandTouched.products && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.products}
              </span>
            </>
          )}
      </div>
      <div className="col-12 mb-2">
        <Form.Group>
          <FormLabelStyled>if demands</FormLabelStyled>
          <div className="row">
            <div className="col-6 mb-4">
              <Select
                options={demandSection}
                placeholder="Select Type"
                classNamePrefix="Select"
                styles={customStyles}
                value={demandSection?.find(
                  (l) => l.value === values?.byDemand?.section
                )}
                onChange={(e: any) => _handleSectionOnClick(e.value)}
                isDisabled={isDisabled}
              />
              {!isDisabled &&
                byDemandError &&
                byDemandError.section &&
                byDemandTouched &&
                byDemandTouched.section && (
                  <>
                    <span className="text-danger d-inline-block ms-5">
                      {byDemandError.section}
                    </span>
                  </>
                )}
            </div>
            <div className="col-6 mb-4">
              <Select
                options={exceedByOptions}
                placeholder="Exceeds %"
                classNamePrefix="Select"
                styles={customStyles}
                value={exceedByOptions?.find(
                  (l) => l.value === values?.byDemand?.exceedBy
                )}
                onChange={(e: any) => _handleExceedByOnClick(e?.value)}
                isDisabled={isDisabled}
              />
              {!isDisabled &&
                byDemandError &&
                byDemandError.exceedBy &&
                byDemandTouched &&
                byDemandTouched.exceedBy && (
                  <>
                    <span className="text-danger d-inline-block ms-5">
                      {byDemandError.exceedBy}
                    </span>
                  </>
                )}
            </div>
          </div>
        </Form.Group>
      </div>
      <div className="col-lg-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Value (%)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="sectionUnit"
            value={values.byDemand?.sectionUnit}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.sectionUnit &&
          byDemandTouched &&
          byDemandTouched.sectionUnit && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.sectionUnit}
              </span>
            </>
          )}
      </div>
      <div className="col-lg-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Unit (#)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="sectionUnit"
            value={values.byDemand?.sectionUnit}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.sectionValue &&
          byDemandTouched &&
          byDemandTouched.sectionValue && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.sectionValue}
              </span>
            </>
          )}
      </div>
      <div className="col-12 mb-4">
        <Form.Group>
          <FormLabelStyled>
            by / on this date & time <strong>(Date & Time)</strong>
          </FormLabelStyled>
          <DateTimeInputGroup disabled={isDisabled}>
            <DatePicker
              disabled={isDisabled}
              selected={values?.byDemand?.dateAndTime}
              onChange={handleDateAndTimeChange}
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
                      values.byDemand?.dateAndTime
                        ? moment(values.byDemand?.dateAndTime).format(
                            "DD MMM YYYY HH:MM"
                          )
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
          byDemandError &&
          byDemandError.dateAndTime &&
          byDemandTouched &&
          byDemandTouched.dateAndTime && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.dateAndTime}
              </span>
            </>
          )}
      </div>
      <div className="col-12 mb-4">
        <Form.Group className="border-dark">
          <FormLabelStyled>Pricing Action</FormLabelStyled>
          <Select
            options={pricingActionOptions}
            placeholder="Select Type"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            value={pricingActionOptions?.find(
              (l) => l.value === values?.byDemand?.pricingAction
            )}
            onChange={(e: any) => _handlePriceActionOnClick(e?.value)}
            isDisabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.pricingAction &&
          byDemandTouched &&
          byDemandTouched.pricingAction && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.pricingAction}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Value (%)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="pricingActionValue"
            value={values.byDemand?.pricingActionValue}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.pricingActionValue &&
          byDemandTouched &&
          byDemandTouched.pricingActionValue && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.pricingActionValue}
              </span>
            </>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-4">
        <Form.Group>
          <FormLabelStyled> Price ($)</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder=""
            name="pricingActionPrice"
            value={values.byDemand?.pricingActionPrice}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.pricingActionPrice &&
          byDemandTouched &&
          byDemandTouched.pricingActionPrice && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.pricingActionPrice}
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
            placeholder="Pick shops you would like to activate the phase at"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            onChange={(e: any) => _handleShopOnChange(e.value)}
            isDisabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.shops &&
          byDemandTouched &&
          byDemandTouched.shops && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.shops}
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
            value={values.byDemand?.strategyName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Group>
        {!isDisabled &&
          byDemandError &&
          byDemandError.strategyName &&
          byDemandTouched &&
          byDemandTouched.strategyName && (
            <>
              <span className="text-danger d-inline-block ms-5">
                {byDemandError.strategyName}
              </span>
            </>
          )}
      </div>
    </>
  );
};

export default ByDemandForm;
