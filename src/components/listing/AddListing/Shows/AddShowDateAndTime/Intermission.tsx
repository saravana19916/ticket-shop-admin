import React, { FC, useState } from "react";
import { FormikErrors, FormikTouched } from "formik";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import ToggleButton from "../../../../shared/ToggleButton";

import {
  FormInputStyled,
  FormLabelStyled,
  DateTimeInputGroup,
  DateTimeCustomInput,
} from "../../../../styledComponents/styledForm";
import DateFlatpickr from "../../../../shared/DateFlatpickr";
interface IIntermission {}
const Intermission: FC<IIntermission> = ({}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
    // alert(checked);
  };
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <div className="d-flex flex-column">
            <Form.Group>
              <label className="custom-switch form-switch me-5 mb-3">
                <input
                  type="radio"
                  name="custom-switch-radio1"
                  className="custom-switch-input"
                  checked={checked}
                  onClick={() => setChecked((prev) => !prev)}
                />
                <span className="custom-switch-indicator custom-switch-indicator-md"></span>
              </label>
            </Form.Group>
            {/* <Form.Group>
              <label className="custom-switch form-switch mb-3">
                <input
                  type="radio"
                  name="custom-switch-radio1"
                  className="custom-switch-input"
                  defaultChecked
                />
                <span className="custom-switch-indicator custom-switch-indicator-md"></span>
              </label>
            </Form.Group> */}
            {/* <ToggleButton
              isToggled={checked}
              handleToggle={handleChange}
              divClassName="mb-3"
            /> */}
            <Form.Label className="fs-5 fw-500 text-black mb-4">
              Intermission
            </Form.Label>
          </div>
          <span className="text-gray d-block mb-3 fs-12px mb-7">
            Pick your show dates by highlighting the dates of your event.
          </span>
          <div className="row">
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Start Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime}
                  onChange={setDateTime}
                  type="time"
                  placeholder="Enter Start Time"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>End Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime}
                  onChange={setDateTime}
                  type="time"
                  placeholder="Enter End Time"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
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
          </div>
        </Form.Group>
      </div>
    </>
  );
};
export default Intermission;
