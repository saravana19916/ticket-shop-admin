import React, { FC, useState } from "react";
import { FormikErrors, FormikTouched } from "formik";
import {
  Form,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import ToggleButton from "../../../../shared/ToggleButton";
interface IDateTimeType {
  intermissionStartTime: Date | null;
  intermissionEndTime: Date | null;
}
import {
  FormInputStyled,
  FormLabelStyled,
  DateTimeInputGroup,
  DateTimeCustomInput,
} from "../../../../styledComponents/styledForm";
import DateFlatpickr from "../../../../shared/DateFlatpickr";
interface IIntermission {}
const Intermission: FC<IIntermission> = ({}) => {
  const [dateTime, setDateTime] = useState<IDateTimeType>({
    intermissionEndTime: null,
    intermissionStartTime: null,
  });
  const handleDateTimeChange = (type: string, value: Date | null) => {
    setDateTime((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
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
            <Form.Label className="fs-5 fw-500 text-black mb-4 d-flex align-items-center">
              Intermission{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    In this section, you can set the intermission time of your
                    show.
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
            </Form.Label>
          </div>
          <div className="row">
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Start Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime?.intermissionStartTime}
                  onChange={(date) =>
                    handleDateTimeChange("intermissionStartTime", date)
                  }
                  type="time"
                  placeholder="Enter Start Time"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>End Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime?.intermissionEndTime}
                  onChange={(date) =>
                    handleDateTimeChange("intermissionEndTime", date)
                  }
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
