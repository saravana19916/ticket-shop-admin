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
  FormStyledContentSection,
  StyledInputDiv,
} from "../../../../styledComponents/styledForm";
import DateFlatpickr from "../../../../shared/DateFlatpickr";
import CustomTooltip from "../../../../shared/CustomTooltip";
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

  const [showCustomRowAndZones, setShowCustomRowAndZones] =
    useState<boolean>(false);
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <div className="d-flex flex-column">
            <div className="mb-6">
              <FormStyledContentSection>
                <span className="question">
                  Would you like to add intermission?
                </span>
                <StyledInputDiv className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="addSections"
                    value="yes"
                    id="addSections"
                    onChange={() => {
                      setShowCustomRowAndZones(true);
                    }}
                    checked={showCustomRowAndZones}
                  />
                  <label
                    htmlFor="addSections"
                    className="form-check-label ms-3"
                    style={{
                      marginTop: "7px",
                      fontSize: "12px",
                    }}
                  >
                    Yes
                  </label>
                </StyledInputDiv>
                <StyledInputDiv className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="donNotAddSections"
                    name="addSections"
                    value="no"
                    checked={!showCustomRowAndZones}
                    onChange={() => {
                      setShowCustomRowAndZones(false);
                    }}
                  />
                  <label
                    htmlFor="addSections"
                    className="form-check-label ms-3"
                    style={{
                      marginTop: "7px",
                      fontSize: "12px",
                    }}
                  >
                    No
                  </label>
                </StyledInputDiv>
              </FormStyledContentSection>
            </div>
            {/* <Form.Group>
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
            </Form.Group> */}
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
          </div>
          {showCustomRowAndZones && (
            <>
              <Form.Label className="fs-5 fw-500 text-black mb-4 d-flex align-items-center">
                Intermission{" "}
                <CustomTooltip
                  iconMarginBottom="1px"
                  title="In this section, you can set the intermission time of your
                    show."
                />
              </Form.Label>
              <div className="row">
                <div className="col-12 mb-6">
                  <Form.Group>
                    <FormLabelStyled>
                      Start Time
                      <CustomTooltip title="Start Time" />
                    </FormLabelStyled>
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
                    <FormLabelStyled>
                      End Time
                      <CustomTooltip title="End Time" />
                    </FormLabelStyled>
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
                      <CustomTooltip title="Duration (Mins)" />
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
            </>
          )}
        </Form.Group>
      </div>
    </>
  );
};
export default Intermission;
