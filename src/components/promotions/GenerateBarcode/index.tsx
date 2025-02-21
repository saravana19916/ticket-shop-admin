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
import {
  Button,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Buttons from "../../bootstrap/buttons/buttons";
import { Chip } from "@mui/material";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import {
  FormDivStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";
import DateFlatpickr from "../../shared/DateFlatpickr";
import CounterInput from "../../shared/CounterInput";
interface IProps {}

interface IDateTimeType {
  startDateAndTime: Date | null;
  endDateAndTime: Date | null;
}

const index: FC<IProps> = () => {
  const tabList = ["Tickets", "Services", "Add ons", "Mechandise", "F&B"];
  const [dateTime, setDateTime] = useState<IDateTimeType>({
    startDateAndTime: null,
    endDateAndTime: null,
  });
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
  const handleDateTimeChange = (type: string, value: Date | null) => {
    setDateTime((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-0 p-md-5">
        <div className="row mb-4">
          <BackBreadCrumb />
          <div className="col-12 mb-3 mt-3">
            <span className="fw-600 fs-2">Generate Barcode</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-5 align-items-start">
          <span className="fw-600 fs-5">Campaign information</span>
          <form className="row">
            <div className="col-12 col-md-6 mb-5">
              <FormLabelStyled className="d-flex align-items-center">
                Campaign name
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Define a name for your campaign so you can differentiate
                      it.
                    </Tooltip>
                  }
                >
                  <i
                    style={{
                      marginBottom: "2px",
                    }}
                    className="fe fe-info d-inline-block ms-2 cursor-pointer"
                  ></i>
                </OverlayTrigger>
              </FormLabelStyled>
              <FormInputStyled
                type="text"
                placeholder="Enter name"
                className="form-control"
                name="campaignName"
              />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <FormLabelStyled className="d-flex align-items-center">
                Discount Type
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Insert the organization or company this invitation or
                      issued to.
                    </Tooltip>
                  }
                >
                  <i
                    style={{
                      marginBottom: "2px",
                    }}
                    className="fe fe-info d-inline-block ms-2 cursor-pointer"
                  ></i>
                </OverlayTrigger>
              </FormLabelStyled>
              <SelectDropDown
                options={listingType}
                placeholder="Select Type"
                classNamePrefix="Select"
              />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <FormLabelStyled className="d-flex align-items-center">
                Start Date & Time
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Define the date and time for your campaign to start.
                    </Tooltip>
                  }
                >
                  <i
                    style={{
                      marginBottom: "2px",
                    }}
                    className="fe fe-info d-inline-block ms-2 cursor-pointer"
                  ></i>
                </OverlayTrigger>
              </FormLabelStyled>{" "}
              <DateFlatpickr
                value={dateTime?.startDateAndTime}
                onChange={(date) =>
                  handleDateTimeChange("startDateAndTime", date)
                }
                type="datetime"
                placeholder="Enter Start Date Time"
              />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <FormLabelStyled className="d-flex align-items-center">
                Expiry date & time
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Define the date and time for your campaign to end and
                      codes to expire .{" "}
                    </Tooltip>
                  }
                >
                  <i
                    style={{
                      marginBottom: "2px",
                    }}
                    className="fe fe-info d-inline-block ms-2 cursor-pointer"
                  ></i>
                </OverlayTrigger>
              </FormLabelStyled>{" "}
              <DateFlatpickr
                value={dateTime?.endDateAndTime}
                onChange={(date) =>
                  handleDateTimeChange("endDateAndTime", date)
                }
                type="datetime"
                placeholder="Enter Expiry Date Time"
              />
              <small className="text-gray"></small>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <FormLabelStyled className="d-flex align-items-center">
                Number of Codes
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Define the number of unique codes you like to create
                    </Tooltip>
                  }
                >
                  <i
                    style={{
                      marginBottom: "2px",
                    }}
                    className="fe fe-info d-inline-block ms-2 cursor-pointer"
                  ></i>
                </OverlayTrigger>
              </FormLabelStyled>{" "}
              <CounterInput
                count={count}
                onIncrement={() => setCount(count + 1)}
                onDecrement={() => setCount(count - 1)}
              />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <FormLabelStyled className="d-flex align-items-center">
                Usage time per code{" "}
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Define the number of times each code can be used.
                    </Tooltip>
                  }
                >
                  <i
                    style={{
                      marginBottom: "2px",
                    }}
                    className="fe fe-info d-inline-block ms-2 cursor-pointer"
                  ></i>
                </OverlayTrigger>
              </FormLabelStyled>{" "}
              <SelectDropDown
                options={listingType}
                placeholder="Select Type"
                classNamePrefix="Select"
              />
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
                    <div className="col-12 col-sm-4 d-flex align-items-center gap-5">
                      <i
                        className="fa fa-circle fs-3"
                        style={{ color: "#03f14a" }}
                      ></i>
                      <h4 className="m-0 fw-semibold">Gold Ticket</h4>
                    </div>
                    <div className="col-12 col-sm-4">
                      <h4 className="m-0 fw-bold">AED 199.00</h4>
                      <small className="text-color-gray-1">
                        net of all taxes
                      </small>
                    </div>
                    <div className="col-12 col-sm-4 d-flex align-items-center gap-3">
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
    </>
  );
};

export default index;
