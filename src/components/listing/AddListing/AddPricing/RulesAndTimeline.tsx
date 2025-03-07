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
import CustomTooltip from "../../../shared/CustomTooltip";

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
          <div className="row">
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Minimum Order
                  <CustomTooltip title="Minimum Order" />
                </FormLabelStyled>
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
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Maximum Order
                  <CustomTooltip title="Maximum Order" />
                </FormLabelStyled>
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
            </div>
            <div className="col-xl-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Number of Access/Entires
                  <CustomTooltip title="Number of Access/Entires" />
                </FormLabelStyled>
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
                <FormLabelStyled>
                  Number of Authorized Scan
                  <CustomTooltip title="Number of Authorized Scan" />
                </FormLabelStyled>
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
                <FormLabelStyled>
                  Sale Start Date & Time
                  <CustomTooltip title="Sale Start Date & Time" />
                </FormLabelStyled>
                <DateFlatpickr
                  value={
                    values.rulesAndTimeline?.salesStartDate
                      ? moment(values.rulesAndTimeline?.salesStartDate).format(
                          "DD MMM YYYY HH:MM"
                        )
                      : ""
                  }
                  onChange={handleStartDateChange}
                  type="datetime"
                  placeholder="Enter Sale Start Date Time"
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
                <FormLabelStyled>
                  Sale End Date & Time
                  <CustomTooltip title="Sale End Date & Time" />
                </FormLabelStyled>
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
                  placeholder="Enter Sale End Date Time"
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
