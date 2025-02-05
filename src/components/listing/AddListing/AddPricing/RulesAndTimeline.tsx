import React, { FC, useState } from "react";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { FormikErrors, FormikTouched } from "formik";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import moment from "moment";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import {
  DateTimeCustomInput,
  DateTimeInputGroup,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import DateFlatpickr from "../../../shared/DateFlatpickr";

interface IPricingAndCapacityProps {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
}
const PricingAndCapacity: FC<IPricingAndCapacityProps> = ({
  handleOnChange,
  errors,
  values,
  touched,
}) => {
  const handleStartDateChange = (date: any) => {
    handleOnChange("salesStartDate", date);
  };

  const handleEndDateChange = (date: any) => {
    handleOnChange("salesEndDate", date);
  };

  const handleDropdownChange = (field: string, value: string | null) => {
    handleOnChange(field, value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    handleOnChange(name, value);
  };
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black mb-4">
            Rules & Timeline
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            the explanation about this section goes here
          </span>
          <div className="row">
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Min order</FormLabelStyled>
                <FormInputStyled
                  min={1}
                  value={values?.rulesAndTimeline?.minOrder || ""}
                  name="minOrder"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Min Order"
                />
                {errors &&
                  touched &&
                  touched?.productDetails?.productName &&
                  errors?.productDetails?.productName && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.productName}
                    </span>
                  )}
              </Form.Group>
              {errors &&
                touched &&
                touched?.rulesAndTimeline?.minOrder &&
                errors?.rulesAndTimeline?.minOrder && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.rulesAndTimeline?.minOrder}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Max order</FormLabelStyled>
                <FormInputStyled
                  min={1}
                  value={values?.rulesAndTimeline?.maxOrder || ""}
                  name="maxOrder"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Max Order"
                />
                {errors &&
                  touched &&
                  touched?.productDetails?.productName &&
                  errors?.productDetails?.productName && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.productDetails?.productName}
                    </span>
                  )}
              </Form.Group>
              {errors &&
                touched &&
                touched?.rulesAndTimeline?.maxOrder &&
                errors?.rulesAndTimeline?.maxOrder && (
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.rulesAndTimeline?.maxOrder}
                  </span>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Access</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Access"
                  className="form-control"
                  name="access"
                  value={values?.rulesAndTimeline?.access || ""}
                  onChange={handleChange}
                />
                {errors &&
                  touched &&
                  touched?.rulesAndTimeline?.access &&
                  errors?.rulesAndTimeline?.access && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.rulesAndTimeline?.access}
                    </span>
                  )}
              </Form.Group>
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Scan</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Scan"
                  className="form-control"
                  name="scan"
                  value={values?.rulesAndTimeline?.scan || ""}
                  onChange={handleChange}
                />
                {errors &&
                  touched &&
                  touched?.rulesAndTimeline?.scan &&
                  errors?.rulesAndTimeline?.scan && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.rulesAndTimeline?.scan}
                    </span>
                  )}
              </Form.Group>
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Sale Start Date</FormLabelStyled>
                <DateFlatpickr
                  value={
                    values.rulesAndTimeline?.salesStartDate
                      ? moment(values.rulesAndTimeline?.salesStartDate).format(
                          "DD MMM YYYY HH:MM"
                        )
                      : ""
                  }
                  onChange={handleStartDateChange}
                  type="date"
                  placeholder="Enter Sale Start Date"
                />
                {errors &&
                  touched &&
                  touched?.rulesAndTimeline?.salesStartDate &&
                  errors?.rulesAndTimeline?.salesStartDate && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.rulesAndTimeline?.salesStartDate}
                    </span>
                  )}
              </Form.Group>
            </div>

            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>End Date & Time</FormLabelStyled>
                <DateFlatpickr
                  value={
                    values.rulesAndTimeline?.salesEndDate
                      ? moment(values.rulesAndTimeline?.salesEndDate).format(
                          "DD MMM YYYY HH:MM"
                        )
                      : ""
                  }
                  onChange={handleEndDateChange}
                  type="datetime"
                  placeholder="Enter Sale End Date"
                />
                {errors &&
                  touched &&
                  touched?.rulesAndTimeline?.salesEndDate &&
                  errors?.rulesAndTimeline?.salesEndDate && (
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.rulesAndTimeline?.salesEndDate}
                    </span>
                  )}
              </Form.Group>
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default PricingAndCapacity;
