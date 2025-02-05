import React, { FC } from "react";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FormikErrors, FormikTouched } from "formik";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
interface IZoningAndAllocation {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
}

const ZoningAndAllocation: FC<IZoningAndAllocation> = (
  {
    // handleOnChange,
    // errors,
    // touched,
    // values,
  }
) => {
  // const handleDropdownChange = (field: string, value: string | null) => {
  //   handleOnChange(field, value);
  // };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = event.target;
  //   handleOnChange(name, value);
  // };
  return (
    <>
      {/* <div className="col-12 mb-5">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 mb-3 text-black">
            Zoning &amp; Allocation
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            the explanation about this section goes here
          </span>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <Dropdown>
                <CustomDropdownToggle
                  variant="light"
                  id="dropdown-basic"
                  className="w-100 rounded-pill bg-white text-start p-2 ps-5  fs-5 d-flex justify-content-between align-items-center fs-12px border-gray-light-3 text-black"
                >
                  <span
                    className={`${
                      values?.zoningAndAllocation?.zone
                        ? "fs-14px text-black"
                        : "fs-14px text-color-gray-1"
                    }`}
                  >
                    {values?.zoningAndAllocation?.zone || "Zone"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                </CustomDropdownToggle>
                <Dropdown.Menu className="m-0 w-100 fs-5">
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleDropdownChange("zone", "Zone One")}
                  >
                    Zone One
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() => handleDropdownChange("zone", "Zone Two")}
                  >
                    Zone Two
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => handleDropdownChange("zone", "Zone Three")}
                  >
                    Zone Three
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.zone &&
                errors?.zoningAndAllocation?.zone && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.zone}
                  </span>
                )}
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <Dropdown>
                <CustomDropdownToggle
                  variant="light"
                  id="dropdown-basic"
                  className="w-100 rounded-pill bg-white text-start p-2 ps-5 fs-12px  fs-5 d-flex justify-content-between align-items-center border-gray-light-3 text-black"
                >
                  <span
                    className={`${
                      values?.zoningAndAllocation?.floor
                        ? "fs-14px text-black"
                        : "fs-14px text-color-gray-1"
                    }`}
                  >
                    {values?.zoningAndAllocation?.floor || "Floor"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                </CustomDropdownToggle>
                <Dropdown.Menu className="w-100 fs-5 m-0">
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleDropdownChange("floor", "First Floor")}
                  >
                    First Floor
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() =>
                      handleDropdownChange("floor", "Second Floor")
                    }
                  >
                    Second Floor
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => handleDropdownChange("floor", "Third Floor")}
                  >
                    Third Floor
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.floor &&
                errors?.zoningAndAllocation?.floor && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.floor}
                  </span>
                )}
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <Dropdown>
                <CustomDropdownToggle
                  variant="light"
                  id="dropdown-basic"
                  className="w-100 rounded-pill bg-white text-start fs-12px p-2 ps-5  fs-5 d-flex justify-content-between align-items-center border-gray-light-3 text-black"
                >
                  <span
                    className={`${
                      values?.zoningAndAllocation?.section
                        ? "fs-14px text-black"
                        : "fs-14px text-color-gray-1"
                    }`}
                  >
                    {values?.zoningAndAllocation?.section || "Section"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                </CustomDropdownToggle>
                <Dropdown.Menu className="m-0 w-100 fs-5">
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() =>
                      handleDropdownChange("section", "Section One")
                    }
                  >
                    Section One
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() =>
                      handleDropdownChange("section", "Section Two")
                    }
                  >
                    Section Two
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.section &&
                errors?.zoningAndAllocation?.section && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.section}
                  </span>
                )}
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <Dropdown>
                <CustomDropdownToggle
                  variant="light"
                  id="dropdown-basic"
                  className="w-100 rounded-pill bg-white text-start p-2 ps-5 fs-12px  fs-5 d-flex justify-content-between align-items-center border-gray-light-3 text-black"
                >
                  <span
                    className={`${
                      values?.zoningAndAllocation?.row
                        ? "fs-14px text-black"
                        : "fs-14px text-color-gray-1"
                    }`}
                  >
                    {values.zoningAndAllocation?.row || "Row"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                </CustomDropdownToggle>
                <Dropdown.Menu className="m-0 w-100 fs-5">
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleDropdownChange("row", "Row A")}
                  >
                    Row A
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleDropdownChange("row", "Row B")}
                  >
                    Row B
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleDropdownChange("row", "Row C")}
                  >
                    Row C
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.row &&
                errors?.zoningAndAllocation?.row && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.row}
                  </span>
                )}
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <InputGroup>
                <FormControl
                  className="fw-normal w-50 p-3 ps-5 fs-14px text-black form-control-label-rounded-start"
                  disabled
                  value="Total capacity"
                />
                <FormControl
                  className="fw-normal fs-6 form-control-text-input-rounded-end"
                  name="totalCapacity"
                  onChange={handleChange}
                  value={values.zoningAndAllocation?.totalCapacity}
                />
              </InputGroup>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.totalCapacity &&
                errors?.zoningAndAllocation?.totalCapacity && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.totalCapacity}
                  </span>
                )}
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <InputGroup>
                <FormControl
                  className="fw-normal w-50 p-3 ps-5 fs-14px text-black form-control-label-rounded-start"
                  disabled
                  value="Blocked"
                />
                <FormControl
                  className=" fw-normal fs-6 form-control-text-input-rounded-end"
                  value={values?.zoningAndAllocation?.blocked}
                  name="blocked"
                  onChange={handleChange}
                />
              </InputGroup>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.blocked &&
                errors?.zoningAndAllocation?.blocked && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.blocked}
                  </span>
                )}
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <InputGroup>
                <FormControl
                  className="fw-normal w-50 p-3 ps-5 fs-14px text-black form-control-label-rounded-start"
                  disabled
                  value="On Sale Cap"
                />
                <FormControl
                  className=" fw-normal fs-6 form-control-text-input-rounded-end"
                  value={values?.zoningAndAllocation?.onSaleCap}
                  name="onSaleCap"
                  onChange={handleChange}
                />
              </InputGroup>
              {errors &&
                touched &&
                touched?.zoningAndAllocation?.onSaleCap &&
                errors?.zoningAndAllocation?.onSaleCap && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.zoningAndAllocation?.onSaleCap}
                  </span>
                )}
            </div>
          </div>
        </Form.Group>
      </div> */}
    </>
  );
};

export default ZoningAndAllocation;
