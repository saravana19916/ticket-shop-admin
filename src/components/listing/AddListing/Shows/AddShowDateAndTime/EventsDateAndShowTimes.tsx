import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";
import { IShowDateAndTimeSectionProps } from "../../../../../commondata/showDateAndTime";
import { toast } from "react-toastify";
import { IAddShowDateTimeProps } from "./helper";
import { FormikErrors, FormikTouched } from "formik";
import ButtonCustom from "../../../../shared/ButtonCustom";

interface IEventsDateAndShowTimesProps {
  date: any;
  dataList: IShowDateAndTimeSectionProps[];
  values: IAddShowDateTimeProps;
  errors: FormikErrors<IAddShowDateTimeProps>;
  touched: FormikTouched<IAddShowDateTimeProps>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IAddShowDateTimeProps>>;
  editEventId: number | null | string;
}
const EventsDateAndShowTimes: FC<IEventsDateAndShowTimesProps> = ({
  date,
  values,
  errors,
  touched,
  setFieldValue,
  editEventId,
}) => {
  const handleDateSelect = (date: any) => {
    setFieldValue("eventDate", date);
  };
  const CustomDropdownToggle = styled(DropdownToggle)`
    &::before,
    &::after {
      content: none !important;
    }
  `;

  const _handleShowTimeOnChange = (time: any) =>
    setFieldValue("showTime", time);
  const _handleDoorOpenOnChange = (time: any) =>
    setFieldValue("doorOpen", time);
  const _handleEventEndTimeOnChange = (time: any) =>
    setFieldValue("eventEnd", time);
  const _handleShowDurationOnChange = (e: any) => {
    if (e) {
      setFieldValue("showDuration", e.target.value);
    } else {
      setFieldValue("showDuration", null);
    }
  };
  const _handleIntermissionDurationOnChange = (e: any) => {
    if (e) {
      setFieldValue("intermissionDuration", e.target.value);
    } else {
      setFieldValue("intermissionDuration", null);
    }
  };
  return (
    <>
      <div className="col-12 mb-4">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 mb-3 text-black">
            Events’ Dates & Show times
          </Form.Label>
          <span className="text-gray d-block mb-3 fs-12px">
            In this section you can add your show dates and event timings.
          </span>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-6">
              <Dropdown>
                <CustomDropdownToggle
                  variant="light"
                  id="dropdown-basic"
                  className="w-100 rounded-pill text-start p-3 d-flex justify-content-between align-items-center bg-white text-color-gray-1 form-control-border-color"
                  aria-label="Choose Show Date"
                >
                  <span className="d-inline-block ms-3 fs-6">
                    {values.eventDate
                      ? moment(values.eventDate).format("DD.MM.YYYY")
                      : "Choose Show Date"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                </CustomDropdownToggle>
                <Dropdown.Menu className="w-100 fs-5 m-0">
                  {date?.map((item: any, index: number) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDateSelect(item)}
                    >
                      {moment(item).format("DD.MM.YYYY")}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {errors && touched && errors?.eventDate && touched?.eventDate && (
                <>
                  <span className="text-danger d-inline-block ms-3 mt-1">
                    {errors?.eventDate}
                  </span>
                </>
              )}
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-6">
              <div className="row p-0 m-0 position-relative custom-time">
                <DatePicker
                  selected={values?.showTime}
                  onChange={_handleShowTimeOnChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  placeholderText="Choose Show Time"
                  className="col-12 rounded-pill p-3 bg-white ps-5 py-4 custom-time-picker cursor-pointer border form-control-border-color"
                />
                <ChevronDownIcon className="w-4 h-4 me-3 position-absolute icon" />
              </div>
              {errors && touched && errors?.showTime && touched?.showTime && (
                <>
                  <span className="text-danger d-inline-block ms-3 mt-1">
                    {errors?.showTime}
                  </span>
                </>
              )}
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-6">
              <InputGroup>
                <FormControl
                  placeholder="Insert Show Duration"
                  className="p-4 fw-normal fs-6 ps-6 w-50 form-control-text-input-rounded-start"
                  value={values?.showDuration || ""}
                  onChange={_handleShowDurationOnChange}
                />
                <FormControl
                  className="p-4 ps-3 fs-6 form-control-label-rounded-end"
                  disabled
                  value="Minutes"
                />
              </InputGroup>
              {errors &&
                touched &&
                errors?.showDuration &&
                touched?.showDuration && (
                  <>
                    <span className="text-danger d-inline-block ms-3 mt-1">
                      {errors?.showDuration}
                    </span>
                  </>
                )}
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-6">
              <InputGroup>
                <FormControl
                  placeholder="Intermission Duration"
                  className="p-4 fw-normal fs-6 ps-6 w-50 border-start-rounded border-form-input"
                  value={values?.intermissionDuration || ""}
                  onChange={_handleIntermissionDurationOnChange}
                />
                <FormControl
                  className="p-4 ps-3 fs-6 form-control-label-rounded-end"
                  disabled
                  value="Minutes"
                />
              </InputGroup>
              {errors &&
                touched &&
                errors?.intermissionDuration &&
                touched?.intermissionDuration && (
                  <>
                    <span className="text-danger d-inline-block ms-3 mt-1">
                      {errors?.intermissionDuration}
                    </span>
                  </>
                )}
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-6">
              <div className="row p-0 m-0 position-relative custom-time">
                <DatePicker
                  selected={values?.doorOpen}
                  onChange={_handleDoorOpenOnChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  placeholderText="Choose Door Opening Time"
                  className="col-12 rounded-pill p-3 bg-white ps-5 py-4 custom-time-picker cursor-pointer form-control-border-color"
                />
                <ChevronDownIcon className="w-4 h-4 me-3 position-absolute icon" />
              </div>
              {errors && touched && errors?.doorOpen && touched?.doorOpen && (
                <span className="text-danger d-inline-block ms-3 mt-1">
                  {errors?.doorOpen}
                </span>
              )}
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-6">
              <div className="row position-relative custom-time p-0 m-0">
                <DatePicker
                  selected={values?.eventEnd}
                  onChange={_handleEventEndTimeOnChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  placeholderText="Choose Event End Time"
                  className="col-12 rounded-pill p-3 bg-white ps-5 py-4 custom-time-picker cursor-pointer form-control-border-color"
                />
                <ChevronDownIcon className="w-4 h-4 position-absolute icon" />
              </div>
              {errors && touched && errors?.eventEnd && touched?.eventEnd && (
                <>
                  <span className="text-danger d-inline-block ms-3 mt-1">
                    {errors?.eventEnd}
                  </span>
                </>
              )}
            </div>
          </div>
        </Form.Group>
      </div>
      <div className="col-12">
        <div className="float-end mb-3">
          <ButtonCustom
            title={editEventId ? "Update Show" : "Add Show"}
            className="fs-6"
            paddingClassName="p-2 px-5"
            icon={
              <PlusIcon className="w-4 h-4" style={{ marginBottom: "1px" }} />
            }
            type="submit"
          />
        </div>
      </div>
    </>
  );
};

export default EventsDateAndShowTimes;
