import React, { FC, useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../../styledComponents/styledForm";
import DateFlatpickr from "../../../../shared/DateFlatpickr";
import CustomTooltip from "../../../../shared/CustomTooltip";
interface IDateTimeType {
  startDateAndTime: Date | null;
  endDateAndTime: Date | null;
  doorOpenTime: Date | null;
  doorCloseTime: Date | null;
}
interface IGeneralInfo {}
const GeneralInfo: FC<IGeneralInfo> = ({}) => {
  const [dateTime, setDateTime] = useState<IDateTimeType>({
    startDateAndTime: null,
    endDateAndTime: null,
    doorOpenTime: null,
    doorCloseTime: null,
  });
  const handleDateTimeChange = (type: string, value: Date | null) => {
    setDateTime((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  return (
    <>
      <div className="col-12 mb-7">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black mb-4 d-flex align-items-center">
            General Info
            <CustomTooltip
              iconMarginBottom="1px"
              title="In this section, you can set the date and time of your show."
            />
          </Form.Label>

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
                  value={dateTime?.startDateAndTime}
                  onChange={(date) =>
                    handleDateTimeChange("startDateAndTime", date)
                  }
                  type="datetime"
                  placeholder="Enter Start Date Time"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>End Date & Time</FormLabelStyled>
                <DateFlatpickr
                  value={dateTime?.endDateAndTime}
                  onChange={(date) =>
                    handleDateTimeChange("endDateAndTime", date)
                  }
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
                <FormLabelStyled htmlFor="doorOpenTime">
                  Doors Open Time
                </FormLabelStyled>
                <DateFlatpickr
                  value={dateTime?.doorOpenTime}
                  onChange={(date) =>
                    handleDateTimeChange("doorOpenTime", date)
                  }
                  type="time"
                  placeholder="Enter Door Open Time"
                />
              </Form.Group>
            </div>
            <div className="col-xl-12 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled htmlFor="doorCloseTime">
                  Doors Close Time
                </FormLabelStyled>
                <DateFlatpickr
                  value={dateTime?.doorCloseTime}
                  onChange={(date) =>
                    handleDateTimeChange("doorCloseTime", date)
                  }
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
