import React, { FC } from "react";
// import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
// import {
//   ChevronDownIcon,
//   MinusIcon,
//   PlusIcon,
// } from "@heroicons/react/24/outline";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
// import styled from "styled-components";
// import ReactSelect from "react-select";
// import { toast } from "react-toastify";
import { IAddListingAddZoningAndCapacity } from "./type";
import { FormikErrors, FormikTouched } from "formik";

interface IZoningAndCapacityAllocationProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (field: string, value: string | number | undefined) => void;
}

// interface OptionType {
//   value: number;
//   label: string;
// }

// const CustomDropdownToggle = styled(DropdownToggle)`
//   &::before,
//   &::after {
//     content: none !important;
//   }
// `;

// interface DropdownItem {
//   key: string;
//   label: string;
// }

// const dropdownItems: DropdownItem[] = [
//   { key: "Zone", label: "Zone" },
//   { key: "Floor", label: "Floor" },
//   { key: "Row", label: "Row" },
//   { key: "Section", label: "Section" },
//   { key: "Wing", label: "Wing" },
// ];

const ZoningAndCapacityAllocation: FC<
  IZoningAndCapacityAllocationProps
> = ({}) => {
  // const [options, setOptions] = useState<OptionType[]>([]);
  // const [selectedSkipNumbers, setSelectedSkipNumbers] = useState<any>([]);
  // const [selectedBlockNumbers, setSelectedBlockNumbers] = useState<any>([]);
  // const [selectedZone, setSelectedZone] = useState<string>("");
  // const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  // const [selectedRaw, setSelectedRaw] = useState<string | null>(null);
  // const [selectedSection, setSelectedSection] = useState<string | null>(null);
  // const [selectedWing, setSelectedWing] = useState<string | null>(null);

  // const handleSelect = (type: string, value: string) => {
  //   switch (type) {
  //     case "Zone":
  //       setSelectedZone(value);
  //       break;
  //     case "Floor":
  //       setSelectedFloor(value);
  //       break;
  //     case "Raw":
  //       setSelectedRaw(value);
  //       break;
  //     case "Section":
  //       setSelectedSection(value);
  //       break;
  //     case "Wing":
  //       setSelectedWing(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleDropdownSelect = (type: string) => (eventKey: string | null) => {
  //   if (eventKey) {
  //     handleSelect(type, eventKey);
  //   }
  // };

  // const handleNumberFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value) {
  //     const value = Number(e.target.value);
  //     handleOnChange("allocationDetails.numbering.numberFrom", value);
  //     generateNumberRange(
  //       value,
  //       values?.allocationDetails?.numbering?.numberUntil
  //     );
  //   } else {
  //     handleOnChange("allocationDetails.numbering.numberFrom", undefined);
  //     generateNumberRange(
  //       undefined,
  //       values?.allocationDetails?.numbering?.numberUntil
  //     );
  //   }
  // };

  // const handleNumberUntilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value) {
  //     const value = Number(e.target.value);
  //     handleOnChange("allocationDetails.numbering.numberUntil", value);
  //     generateNumberRange(
  //       values?.allocationDetails?.numbering?.numberFrom,
  //       value
  //     );
  //   } else {
  //     handleOnChange("allocationDetails.numbering.numberUntil", undefined);
  //     generateNumberRange(
  //       values?.allocationDetails?.numbering?.numberFrom,
  //       undefined
  //     );
  //   }
  // };

  // const generateNumberRange = (
  //   from: number | undefined,
  //   until: number | undefined
  // ) => {
  //   if (from !== undefined && until !== undefined && from <= until) {
  //     const range = Array.from({ length: until - from + 1 }, (_, i) => ({
  //       value: from + i,
  //       label: (from + i).toString(),
  //     }));
  //     setOptions(range);
  //   } else {
  //     setOptions([]);
  //     setSelectedSkipNumbers([]);
  //     setSelectedBlockNumbers([]);
  //   }
  // };

  // const handleSkipNumbersChange = (newValue: any) => {
  //   const numberArray = newValue.map((item: any) => item.value);
  //   handleOnChange("allocationDetails.numbering.skipNumbers", numberArray);
  // };

  // const handleBlockNumbersChange = (newValue: any) => {
  //   const numberArray = newValue.map((item: any) => item.value);
  //   handleOnChange("allocationDetails.numbering.blockNumbers", numberArray);
  // };

  // const availableSkipOptions: any = options.filter(
  //   (option) =>
  //     !values?.allocationDetails?.numbering?.blockNumbers?.some(
  //       (selected: any) => selected === option.value
  //     )
  // );

  // const availableBlockOptions: any = options.filter(
  //   (option) =>
  //     !values?.allocationDetails?.numbering?.skipNumbers?.some(
  //       (selected: any) => selected === option.value
  //     )
  // );
  // const getSkipNumbers = () => {
  //   const skipNumbers = values.allocationDetails?.numbering?.skipNumbers || [];
  //   const data = skipNumbers.map((number) => ({
  //     value: number,
  //     label: number.toString(),
  //   }));
  //   return data;
  // };
  // const getBlockNumbers = () => {
  //   const blockNumbers =
  //     values.allocationDetails?.numbering?.blockNumbers || [];
  //   const data = blockNumbers.map((number) => ({
  //     value: number,
  //     label: number.toString(),
  //   }));
  //   return data;
  // };
  // const _handleTotalCapacityOnChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (event.target?.value) {
  //     handleOnChange(
  //       "allocationDetails.capacity.totalCapacity",
  //       event.target?.value
  //     );
  //   } else {
  //     handleOnChange("allocationDetails.capacity.totalCapacity", undefined);
  //   }
  // };
  // const _handleOnSaleCapacityOnChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (event.target?.value) {
  //     handleOnChange(
  //       "allocationDetails.capacity.onSaleCapacity",
  //       event.target?.value
  //     );
  //   } else {
  //     handleOnChange("allocationDetails.capacity.onSaleCapacity", undefined);
  //   }
  // };
  return (
    <>
      {/* <div className="col-xl-11 col-12 mb-5">
        <Form.Group>
          <Form.Label className="fs-6 fw-500 mb-3 text-primary-1">
            Zoning & Capacity Allocation
          </Form.Label>
          <span className="text-gray d-inline-block mb-5 fs-14px">
            In this section you can design and customize your zoning, section
            and allocation as detailed or generic as you want.
          </span>
          <Form.Label className="fs-6 fw-500 mb-3">Zoning</Form.Label>
          <div className="row">
            <div className="col-5 mb-5">
              <InputGroup>
                <Dropdown onSelect={handleDropdownSelect("Zone")}>
                  <CustomDropdownToggle
                    variant="light"
                    id="dropdown-zone"
                    className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center custom-dropdown-toggle-start-rounded border-gray-light-2 bg-gray-light-2"
                  >
                    <span className="d-inline-block ms-3 fs-6 fw-600">
                      {selectedZone || "Zone"}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                  </CustomDropdownToggle>
                  <Dropdown.Menu className="fs-6 w-50 m-0">
                    {dropdownItems.map((item) => (
                      <Dropdown.Item key={item.key} eventKey={item.key}>
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <FormControl
                  className="p-2 fw-normal fs-6 ps-6 form-control-text-input-rounded-end form-control-border-color border-inline-start-0 "
                  type="text"
                />
              </InputGroup>
            </div>
            <div className="col-1 d-flex align-items-center justify-content-between">
              <button
                type="button"
                className={`d-inline-block h-6 w-6 rounded d-flex align-items-center justify-content-center text-white fs-5 mb-5 border-0 bg-color-light-gray-4`}
              >
                <PlusIcon className="h-5 w-5 fw-bold text-white" />
              </button>
            </div>
            <div className="col-5 mb-5">
              <InputGroup>
                <Dropdown onSelect={handleDropdownSelect("Floor")}>
                  <CustomDropdownToggle
                    disabled={!selectedZone}
                    variant="light"
                    id="dropdown-floor"
                    className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center custom-dropdown-toggle-start-rounded border-gray-light-2 bg-gray-light-2"
                  >
                    <span className="d-inline-block ms-3 fs-6 fw-600">
                      Floor
                    </span>
                    <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                  </CustomDropdownToggle>
                  <Dropdown.Menu className="fs-6 w-50 m-0">
                    {dropdownItems.map((item) => (
                      <Dropdown.Item key={item.key} eventKey={item.key}>
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <FormControl
                  className="p-2 fw-normal fs-6 ps-6  form-control-text-input-rounded-end bg-white"
                  type="text"
                  disabled
                />
              </InputGroup>
            </div>
            <div className="col-1 d-flex align-items-center justify-content-between">
              <button
                type="button"
                disabled
                className={`d-inline-block h-6 w-6 rounded d-flex align-items-center justify-content-center text-white fs-5 mb-5 border-0 bg-color-light-gray-4`}
              >
                <PlusIcon className="h-5 w-5 fw-bold text-white" />
              </button>
            </div>
            <div className="col-5 mb-5">
              <InputGroup>
                <Dropdown onSelect={handleDropdownSelect("Section")}>
                  <CustomDropdownToggle
                    disabled={!selectedFloor}
                    variant="light"
                    id="dropdown-section"
                    className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center custom-dropdown-toggle-start-rounded border-gray-light-2 bg-gray-light-2"
                  >
                    <span className="d-inline-block ms-3 fs-6 fw-600">
                      Section
                    </span>
                    <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                  </CustomDropdownToggle>
                  <Dropdown.Menu className="fs-6 w-50 m-0">
                    {dropdownItems.map((item) => (
                      <Dropdown.Item key={item.key} eventKey={item.key}>
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <FormControl
                  className="p-2 fw-normal fs-6 ps-6  form-control-text-input-rounded-end bg-white"
                  type="text"
                />
              </InputGroup>
            </div>
            <div className="col-1 d-flex align-items-center justify-content-between">
              <button
                type="button"
                disabled
                className={`d-inline-block h-6 w-6 rounded d-flex align-items-center justify-content-center text-white fs-5 mb-5 border-0 bg-color-light-gray-4`}
              >
                <PlusIcon className="h-5 w-5 fw-bold text-white" />
              </button>
            </div>
            <div className="col-5 mb-5">
              <InputGroup>
                <Dropdown onSelect={handleDropdownSelect("Wing")}>
                  <CustomDropdownToggle
                    disabled={!selectedSection}
                    variant="light"
                    id="dropdown-wing"
                    className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center custom-dropdown-toggle-start-rounded border-gray-light-2 bg-gray-light-2"
                  >
                    <span className="d-inline-block ms-3 fs-6 fw-600">
                      Wing
                    </span>
                    <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                  </CustomDropdownToggle>
                  <Dropdown.Menu className="fs-6 w-50 m-0">
                    {dropdownItems.map((item) => (
                      <Dropdown.Item key={item.key} eventKey={item.key}>
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <FormControl
                  value={selectedWing || ""}
                  readOnly
                  className="p-2 fw-normal fs-6 ps-6 form-control-text-input-rounded-end bg-white"
                  type="text"
                />
              </InputGroup>
            </div>
          </div>

          <Form.Label className="fs-6 fw-500 mb-3">Numbering</Form.Label>
          <div className="row">
            <div className="col-5 mb-5">
              <InputGroup>
                <FormControl
                  disabled
                  value="Number From"
                  className="p-3 fs-6 ps-5 fw-600 form-control-label-rounded-start bg-white"
                />
                <FormControl
                  className="p-3 fw-normal fs-6 ps-6 border-end-rounded form-control-border-color border-inline-start-0 "
                  type="number"
                  name="numberFrom"
                  value={values?.allocationDetails?.numbering?.numberFrom ?? ""}
                  onChange={handleNumberFromChange}
                />
              </InputGroup>
              {errors &&
                errors?.allocationDetails?.numbering?.numberFrom &&
                touched &&
                touched?.allocationDetails?.numbering?.numberFrom && (
                  <span className="text-danger d-inline-block ms-5 ps-2">
                    {errors?.allocationDetails?.numbering?.numberFrom}
                  </span>
                )}
            </div>
            <div className="col-1 mb-5"></div>
            <div className="col-5 mb-5">
              <InputGroup>
                <FormControl
                  disabled
                  value="Number Until"
                  className="p-3 fw-600 fs-6 ps-5 form-control-label-rounded-start"
                />
                <FormControl
                  className="p-3 fw-normal fs-6 ps-6 border-end-rounded bg-white form-control-border-color border-inline-start-0 "
                  type="number"
                  value={
                    values?.allocationDetails?.numbering?.numberUntil ?? ""
                  }
                  onChange={handleNumberUntilChange}
                />
              </InputGroup>
              {errors &&
                errors?.allocationDetails?.numbering?.numberUntil &&
                touched &&
                touched?.allocationDetails?.numbering?.numberUntil && (
                  <span className="text-danger d-inline-block ms-5 ps-2">
                    {errors?.allocationDetails?.numbering?.numberUntil}
                  </span>
                )}
            </div>
            <div className="col-1 mb-5"></div>
            <div className="col-5 mb-5">
              <InputGroup>
                <FormControl
                  disabled
                  value="Skip Numbers"
                  className="p-3 fw-600 fs-6 ps-5 form-control-label-rounded-start"
                />
                <ReactSelect
                  isMulti
                  value={getSkipNumbers()}
                  onChange={handleSkipNumbersChange}
                  options={availableSkipOptions}
                  className="w-50 number-select"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderStartEndRadius: "50px",
                      borderEndEndRadius: "50px",
                      backgroundColor: "#fff",
                      borderColor: "hsla(240, 3%, 71%, 0.809)",
                      padding: "3px",
                      borderInlineStart: 0,
                    }),
                  }}
                />
              </InputGroup>
              {errors &&
                errors?.allocationDetails?.numbering?.skipNumbers &&
                touched &&
                touched?.allocationDetails?.numbering?.skipNumbers && (
                  <span className="text-danger d-inline-block ms-5 ps-2">
                    {errors?.allocationDetails?.numbering?.skipNumbers}
                  </span>
                )}
            </div>
            <div className="col-1 mb-5"></div>
            <div className="col-5 mb-5">
              <InputGroup>
                <FormControl
                  disabled
                  value="Block Numbers"
                  className="p-3 fw-600 fs-6 ps-5 form-control-label-rounded-start "
                />
                <ReactSelect
                  isMulti
                  value={getBlockNumbers()}
                  onChange={handleBlockNumbersChange}
                  options={availableBlockOptions}
                  className="w-50 number-select"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderStartEndRadius: "50px",
                      borderEndEndRadius: "50px",
                      backgroundColor: "#fff",
                      borderColor: "hsla(240, 3%, 71%, 0.809)",
                      padding: "3px",
                      borderInlineStart: 0,
                    }),
                  }}
                />
              </InputGroup>
              {errors &&
                errors?.allocationDetails?.numbering?.blockNumbers &&
                touched &&
                touched?.allocationDetails?.numbering?.blockNumbers && (
                  <span className="text-danger d-inline-block ms-5 ps-2">
                    {errors?.allocationDetails?.numbering?.blockNumbers}
                  </span>
                )}
            </div>
            <div className="col-1 mb-5"></div>
          </div>
          <Form.Label className="fs-6 fw-500 mb-3">Capacity</Form.Label>
          <div className="row">
            <div className="col-5 mb-5">
              <InputGroup>
                <FormControl
                  disabled
                  value="Total Capacity"
                  className="p-3 fs-6 ps-5 fw-600 form-control-label-rounded-start"
                />
                <FormControl
                  className="p-3 fw-normal fs-6 ps-6 -3 fw-normal fs-6 ps-6 border-end-rounded bg-white form-control-border-color border-inline-start-0 "
                  type="number"
                  value={
                    values?.allocationDetails?.capacity?.totalCapacity || ""
                  }
                  onChange={_handleTotalCapacityOnChange}
                />
              </InputGroup>
              {errors &&
                errors?.allocationDetails?.capacity?.totalCapacity &&
                touched &&
                touched?.allocationDetails?.capacity?.totalCapacity && (
                  <span className="text-danger d-inline-block ms-5 ps-2">
                    {errors?.allocationDetails?.capacity?.totalCapacity}
                  </span>
                )}
            </div>
            <div className="col-1 mb-5"></div>
            <div className="col-5 mb-5">
              <InputGroup>
                <FormControl
                  disabled
                  value="On Sale Capacity"
                  className="p-3 fw-600 fs-6 ps-5 form-control-label-rounded-start"
                />
                <FormControl
                  className="p-3 fw-normal fs-6 ps-6 border-end-rounded bg-white form-control-border-color border-inline-start-0 "
                  type="number"
                  value={
                    values?.allocationDetails?.capacity?.onSaleCapacity || ""
                  }
                  onChange={_handleOnSaleCapacityOnChange}
                />
              </InputGroup>
              {errors &&
                errors?.allocationDetails?.capacity?.onSaleCapacity &&
                touched &&
                touched?.allocationDetails?.capacity?.onSaleCapacity && (
                  <span className="text-danger d-inline-block ms-5 ps-2">
                    {errors?.allocationDetails?.capacity?.onSaleCapacity}
                  </span>
                )}
            </div>
            <div className="col-1 mb-5"></div>
          </div>
        </Form.Group>
      </div> */}
    </>
  );
};

export default ZoningAndCapacityAllocation;
