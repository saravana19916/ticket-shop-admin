import React, { FC, useState } from "react";
import { FormikErrors, FormikTouched } from "formik";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import {
  FormInputStyled,
  FormLabelStyled,
  DateTimeCustomInput,
  DateTimeInputGroup,
} from "../../../../styledComponents/styledForm";
import DateFlatpickr from "../../../../shared/DateFlatpickr";

interface IGeneralInfo {}
const GeneralInfo: FC<IGeneralInfo> = ({}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [dateTime, setDateTime] = useState<Date | null>(null);
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black mb-4">
            General Info
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            in this section, you can set the date and time of your show.
          </span>
          <div className="row">
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled htmlFor="showName">Show Name</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  id="showName"
                  placeholder="Enter Show Name"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Start Date & Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime}
                  onChange={setDateTime}
                  type="datetime"
                  placeholder="Enter Start Date Time"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>End Date & Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime}
                  onChange={setDateTime}
                  type="datetime"
                  placeholder="Enter End Date Time"
                />
              </Form.Group>
            </div>
            <div className="col-xl-12 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled htmlFor="showDuration">
                  Duration (Mins)
                </FormLabelStyled>
                <FormInputStyled
                  type="text"
                  id="showDuration"
                  placeholder="Enter Duration"
                  className="form-control"
                />
              </Form.Group>
            </div>
            <div className="col-xl-12 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled htmlFor="showDuration">
                  Doors Open Time
                </FormLabelStyled>
                <DateFlatpickr
                  value={dateTime}
                  onChange={setDateTime}
                  type="time"
                  placeholder="Enter Door Open Time"
                />
              </Form.Group>
            </div>
            <div className="col-xl-12 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled htmlFor="showDuration">
                  Doors Close Time
                </FormLabelStyled>
                <DateFlatpickr
                  value={dateTime}
                  onChange={setDateTime}
                  type="time"
                  placeholder="Enter Door Close Time"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled htmlFor="language">Language</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Enter Language"
                  className="form-control"
                  name="listingName"
                />
              </Form.Group>
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};
export default GeneralInfo;
