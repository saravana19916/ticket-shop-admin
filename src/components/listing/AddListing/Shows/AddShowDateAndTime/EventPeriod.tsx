import React, { FC, useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IEventPeriodProps {
  setDate: any;
}

const EventPeriod: FC<IEventPeriodProps> = ({ setDate }) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateChange = (date: Date) => {
    setDate([...selectedDates, date]);
    if (
      selectedDates.some(
        (selectedDate) => selectedDate.getTime() === date.getTime()
      )
    ) {
      setSelectedDates(
        selectedDates.filter(
          (selectedDate) => selectedDate.getTime() !== date.getTime()
        )
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const renderDayContents = (day: number, date: Date) => {
    const isSelected = selectedDates.some(
      (selectedDate) => selectedDate.getTime() === date.getTime()
    );
    return (
      <div className={isSelected ? "react-datepicker__day--highlighted" : ""}>
        {day}
      </div>
    );
  };

  return (
    <div className="col-xl-10 col-lg-11 col-12 mb-6">
      <Form.Group>
        <Form.Label className="fs-5 fw-500 mb-3 text-black d-flex align-items-center">
          Event Period
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Pick your show dates by highlighting the dates of your event.
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
        <span className="text-gray d-block mb-3 fs-12px"></span>
        <div className="bg-white border-0 custom-calendar">
          <DatePicker
            selected={null}
            onChange={handleDateChange}
            inline
            monthsShown={2}
            highlightDates={selectedDates}
            renderDayContents={renderDayContents}
          />
        </div>
      </Form.Group>
    </div>
  );
};

export default EventPeriod;
