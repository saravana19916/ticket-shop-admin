// import ZoningAndAllocation from "../../listing/AddListing/AddPricing/ZoningAndAllocation";
import React, { FC, Fragment, useState } from "react";
import Input from "../../shared/input";
import Select from "react-select";
import { listingType } from "../../../commondata/addListingPageOne";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Buttons from "../../bootstrap/buttons/buttons";
import { Chip } from "@mui/material";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import DateFlatpickr from "../../shared/DateFlatpickr";
import CounterInput from "../../shared/CounterInput";
interface IProps {}

const index: FC<IProps> = () => {
  const tabList = ["Tickets", "Services", "Add ons", "Mechandise", "F&B"];
  const tabAddCode = ["Add Manually", "generate automatically"];
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
  const handleDeleteChip = () => {
    console.info("You clicked the delete icon.");
  };
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <div className="center-container">
        <div className="card border p-4 rounded-16px"> */}
      <div className="p-0 p-md-5">
        <div className="row mb-4">
          <BackBreadCrumb />
          <div className="col-12 mb-3 mt-3">
            <span className="fw-600 fs-2">Generate Discount Code</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-5 align-items-start">
          <span className="fw-600 fs-5">Campaign information</span>
          <form className="row g-3">
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Campaign name</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  placeholder="Enter Campaign name"
                />
                <FormInputDescriptionStyled>
                  Define a name for your campaign so you can differentiate it.
                </FormInputDescriptionStyled>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Discount Type</FormLabelStyled>
                <Select
                  options={listingType}
                  placeholder="Select Type"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                />
                <FormInputDescriptionStyled>
                  Define a name for your campaign so you can differentiate it.
                </FormInputDescriptionStyled>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Start date & time</FormLabelStyled>
                <DateFlatpickr
                  type="datetime"
                  placeholder=""
                  value={null}
                  onChange={() => {}}
                />
                <FormInputDescriptionStyled>
                  Define the date and time for your campaign to start.
                </FormInputDescriptionStyled>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Expiry date & time</FormLabelStyled>
                <DateFlatpickr
                  type="datetime"
                  placeholder=""
                  value={null}
                  onChange={() => {}}
                />
                <FormInputDescriptionStyled>
                  Define the date and time for your campaign to end and codes to
                  expire .
                </FormInputDescriptionStyled>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <FormLabelStyled>Number of Codes</FormLabelStyled>
              <CounterInput
                count={count}
                onIncrement={() => setCount(count + 1)}
                onDecrement={() => setCount(count - 1)}
              />
              <FormInputDescriptionStyled>
                Define the number of unique codes you like to create
              </FormInputDescriptionStyled>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <Form.Group>
                <FormLabelStyled>Usage time per code</FormLabelStyled>
                <Select
                  options={listingType}
                  placeholder="Select"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                />
                <FormInputDescriptionStyled>
                  Define the number of times each code can be used.
                </FormInputDescriptionStyled>
              </Form.Group>
            </div>
          </form>
          <span className="mt-3 fw-600 fs-5">Add Discount Codes</span>
          <TabGroup className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2">
            <TabList className="filter-container mb-7 px-0">
              {tabAddCode.map((tabName, idx) => (
                <>
                  <Tab as={Fragment} key={idx}>
                    {({ selected }) => (
                      <Button
                        type="button"
                        className={`px-7 py-2 rounded-pill ${
                          selected ? "" : "bg-white text-gray border"
                        }`}
                        style={{
                          backgroundColor: `${selected ? "#ed003b" : ""}`,
                        }}
                      >
                        {tabName}
                      </Button>
                    )}
                  </Tab>
                </>
              ))}
            </TabList>
            <TabPanels>
              <Form.Group>
                {/* <FormLabelStyled>Campaign name</FormLabelStyled> */}
                <div className="d-flex align-items-center gap-5">
                  <FormInputStyled
                    type="text"
                    className="form-control"
                    placeholder="Enter Discount code"
                  />
                  <ButtonPrimary className="btn" style={{ minWidth: "118px" }}>
                    + Add
                  </ButtonPrimary>
                </div>

                <FormInputDescriptionStyled>
                  Define a name for your campaign so you can differentiate it.
                </FormInputDescriptionStyled>
              </Form.Group>
            </TabPanels>
          </TabGroup>
          {/* <button className="btn btn-primary btn-pill mt-3 px-6 py-2 fw-semibold fs-6">
                Generate barcodes
              </button> */}
          <div className="d-flex gap-4 flex-column px-5">
            <span className="fw-600 fs-6">Generated Barcodes</span>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
              <Chip
                label="ABC20241"
                variant="outlined"
                onDelete={handleDeleteChip}
              />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column gap-3 mb-7">
              <span className="fw-600 fs-5">
                Choose products & define discount amount
              </span>
              <small className="text-gray">
                In this section you can choose the products you want to apply
                the discount to and define those discounts.
              </small>
            </div>
            <TabGroup className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2 mt-6">
              <TabList className="filter-container mb-7 px-0">
                {tabList.map((tabName, idx) => (
                  <>
                    <Tab as={Fragment} key={idx}>
                      {({ selected }) => (
                        <Button
                          type="button"
                          className={`px-7 py-2 rounded-pill ${
                            selected ? "" : "bg-white text-gray border"
                          }`}
                          style={{
                            backgroundColor: `${selected ? "#ed003b" : ""}`,
                          }}
                        >
                          {tabName}
                        </Button>
                      )}
                    </Tab>
                  </>
                ))}
              </TabList>
              <TabPanels>
                <div className="d-flex flex-column gap-3 mt-6">
                  <div
                    className="row align-items-center w-100 px-5 py-4"
                    style={{
                      border: "2px solid #efefef",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="col-4 d-flex align-items-center gap-5">
                      <i
                        className="fa fa-circle fs-3"
                        style={{ color: "#e5e5e5" }}
                      ></i>
                      <h4 className="m-0 fw-semibold">Silver Ticket</h4>
                    </div>
                    <div className="col-4">
                      <h4 className="m-0 fw-bold">AED 199.00</h4>
                      <small className="text-color-gray-1">
                        net of all taxes
                      </small>
                    </div>
                    <div className="col-4 d-flex align-items-center gap-3">
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="%"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="25"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                      <span className="text-color-gray-1">Or</span>
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="$"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="99.00"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div
                    className="row align-items-center w-100 px-5 py-4"
                    style={{
                      border: "2px solid #efefef",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="col-4 d-flex align-items-center gap-5">
                      <i
                        className="fa fa-circle fs-3"
                        style={{ color: "#03f14a" }}
                      ></i>
                      <h4 className="m-0 fw-semibold">Gold Ticket</h4>
                    </div>
                    <div className="col-4">
                      <h4 className="m-0 fw-bold">AED 199.00</h4>
                      <small className="text-color-gray-1">
                        net of all taxes
                      </small>
                    </div>
                    <div className="col-4 d-flex align-items-center gap-3">
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="%"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="25"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                      <span className="text-color-gray-1">Or</span>
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="$"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="99.00"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div
                    className="row align-items-center w-100 px-5 py-4"
                    style={{
                      border: "2px solid #efefef",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="col-4 d-flex align-items-center gap-5">
                      <i
                        className="fa fa-circle fs-3"
                        style={{ color: "#d6a158" }}
                      ></i>
                      <h4 className="m-0 fw-semibold">Platinum Ticket</h4>
                    </div>
                    <div className="col-4">
                      <h4 className="m-0 fw-bold">AED 199.00</h4>
                      <small className="text-color-gray-1">
                        net of all taxes
                      </small>
                    </div>
                    <div className="col-4 d-flex align-items-center gap-3">
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="%"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="25"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                      <span className="text-color-gray-1">Or</span>
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="$"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="99.00"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div
                    className="row align-items-center w-100 px-5 py-4"
                    style={{
                      border: "2px solid #efefef",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="col-4 d-flex align-items-center gap-5">
                      <i
                        className="fa fa-circle fs-3"
                        style={{ color: "#aaaae8" }}
                      ></i>
                      <h4 className="m-0 fw-semibold">Royal Ticket</h4>
                    </div>
                    <div className="col-4">
                      <h4 className="m-0 fw-bold">AED 199.00</h4>
                      <small className="text-color-gray-1">
                        net of all taxes
                      </small>
                    </div>
                    <div className="col-4 d-flex align-items-center gap-3">
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="%"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="25"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                      <span className="text-color-gray-1">Or</span>
                      <InputGroup style={{ width: "10rem" }}>
                        <FormControl
                          className="fw-semibold p-3 ps-5 fs-14px  text-black form-control-label-rounded-start"
                          disabled
                          value="$"
                        />
                        <FormControl
                          type="number"
                          min={1}
                          value="99.00"
                          className=" fw-normal fs-6 form-control-text-input-rounded-end"
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-pill mt-6 ms-auto">
                    Apply
                  </button>
                </div>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default index;
