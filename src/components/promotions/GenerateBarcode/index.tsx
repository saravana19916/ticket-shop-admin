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
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Buttons from "../../bootstrap/buttons/buttons";
import { Chip } from "@mui/material";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
interface IProps {}

const index: FC<IProps> = () => {
  const tabList = ["Tickets", "Services", "Add ons", "Mechandise", "F&B"];
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
  const handleDeleteChip = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <div className="center-container">
      <div className="card border p-4 rounded-16px">
        <div className="p-0 p-md-5">
      <div className="row mb-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Generate Barcode</span>
        </div>
      </div>
      <div className="d-flex flex-column gap-5 align-items-start">
        <span className="fw-600 fs-5">Campaign information</span>
        <form className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label">Campaign name</label>
            <Input
              type={"text"}
              placeholder={""}
              className="rounded-pill text-black fs-14px"
              bgColorClass={""}
              style={{ borderColor: "#B3B3B3" }}
            />
            <small className="text-gray">
              Define a name for your campaign so you can differentiate it.
            </small>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Discount Type</label>
            <Select
              options={listingType}
              placeholder="Select Type"
              classNamePrefix="Select"
              className="mb-3"
              styles={customStyles}
            />
            <small className="text-gray">
              insert the organization or company this invitation or issued to.
            </small>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Start date & time</label>
            <InputGroup.Text className="w-100 bg-white d-flex justify-content-between position-relative text-black rounded-pill form-control-border-color ">
              <DatePicker
                className="custom-datepicker"
                showTimeInput // This will show the time input below the calendar
                customInput={
                  <div className="d-flex align-items-center justify-content-between min-w-100">
                    <input
                      type="text"
                      className="form-control w-100 flex-2 cursor-pointer border-0 form-control-custom-date-picker fs-14px"
                      readOnly
                    />
                    <span className="d-inline-block me-3 cursor-pointer cursor-pointer z-3">
                      <ChevronLeftIcon className="h-4 w-4" />
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                }
              />
            </InputGroup.Text>
            <small className="text-gray">
              Define the date and time for your campaign to start.
            </small>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Expiry date & time</label>
            <InputGroup.Text className="w-100 bg-white d-flex justify-content-between position-relative text-black rounded-pill form-control-border-color ">
              <DatePicker
                className="custom-datepicker"
                showTimeInput // This will show the time input below the calendar
                customInput={
                  <div className="d-flex align-items-center justify-content-between min-w-100">
                    <input
                      type="text"
                      className="form-control w-100 flex-2 cursor-pointer border-0 form-control-custom-date-picker fs-14px"
                      readOnly
                    />
                    <span className="d-inline-block me-3 cursor-pointer cursor-pointer z-3">
                      <ChevronLeftIcon className="h-4 w-4" />
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                }
              />
            </InputGroup.Text>
            <small className="text-gray">
              Define the date and time for your campaign to end and codes to
              expire .
            </small>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Number of Codes</label>
            <div className="badge-pill rounded-pill text-dark border fs-6 fw-500 d-flex gap-5 justify-content-center align-items-center form-control-border-color">
              <button type="button" className="btn border-0">
                <MinusIcon className="w-5 h-5 text-black" />
              </button>
              <span className="fs-4">0</span>
              <button type="button" className="btn border-0">
                <PlusIcon className="w-5 h-5 text-black" />
              </button>
            </div>
            <small className="text-gray">
              Define the number of unique codes you like to create
            </small>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label">Usage time per code</label>
            <Select
              options={listingType}
              placeholder="Select Type"
              classNamePrefix="Select"
              className="mb-3"
              styles={customStyles}
            />
            <small className="text-gray">
              Define the number of times each code can be used.
            </small>
          </div>  
        </form>
        <button className="btn btn-primary btn-pill mt-3 px-6 py-2 fw-semibold fs-6">
          Generate barcodes
        </button>
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
              In this section you can choose the products you want to apply the
              discount to and define those discounts.
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
                  style={{ border: "2px solid #efefef", borderRadius: "25px" }}
                >
                  <div className="col-3 d-flex align-items-center gap-5">
                    <i
                      className="fa fa-circle fs-3"
                      style={{ color: "#e5e5e5" }}
                    ></i>
                    <h4 className="m-0 fw-semibold">Silver Ticket</h4>
                  </div>
                  <div className="col-3 text-center">
                    <h4 className="m-0 fw-bold">AED 199.00</h4>
                    <small className="text-color-gray-1">
                      net of all taxes
                    </small>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-3">
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
                  style={{ border: "2px solid #efefef", borderRadius: "25px" }}
                >
                  <div className="col-3 d-flex align-items-center gap-5">
                    <i
                      className="fa fa-circle fs-3"
                      style={{ color: "#03f14a" }}
                    ></i>
                    <h4 className="m-0 fw-semibold">Gold Ticket</h4>
                  </div>
                  <div className="col-3 text-center">
                    <h4 className="m-0 fw-bold">AED 199.00</h4>
                    <small className="text-color-gray-1">
                      net of all taxes
                    </small>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-3">
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
                  style={{ border: "2px solid #efefef", borderRadius: "25px" }}
                >
                  <div className="col-3 d-flex align-items-center gap-5">
                    <i
                      className="fa fa-circle fs-3"
                      style={{ color: "#d6a158" }}
                    ></i>
                    <h4 className="m-0 fw-semibold">Platinum Ticket</h4>
                  </div>
                  <div className="col-3 text-center">
                    <h4 className="m-0 fw-bold">AED 199.00</h4>
                    <small className="text-color-gray-1">
                      net of all taxes
                    </small>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-3">
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
                  style={{ border: "2px solid #efefef", borderRadius: "25px" }}
                >
                  <div className="col-3 d-flex align-items-center gap-5">
                    <i
                      className="fa fa-circle fs-3"
                      style={{ color: "#aaaae8" }}
                    ></i>
                    <h4 className="m-0 fw-semibold">Royal Ticket</h4>
                  </div>
                  <div className="col-3 text-center">
                    <h4 className="m-0 fw-bold">AED 199.00</h4>
                    <small className="text-color-gray-1">
                      net of all taxes
                    </small>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-3">
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
      </div>
      </div>
    </>
  );
};

export default index;
