import React from "react";
import styled from "styled-components";
// @ts-ignore
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const StyledDateFlatpickr = styled.div`
  & input {
    font-size: 1rem;
    padding: 12px 12px 12px 20px;
    border-color: #d1d5db;
    font-weight: 400;
    color: #000;
    border-radius: 50px;
    margin-bottom: 0.5rem;
    width: 100%;

    .dark-mode & {
      border-color: #d1d5db;
      color: #fff;
    }

    &:hover {
      border-color: #b3b3b3;
      .dark-mode & {
        border-color: #d1d5db;
      }
    }

    &:focus {
      border-color: #fec9da80;
      outline: 1px solid #fec9da80;
      .dark-mode & {
        border-color: #777;
      }
    }

    &:focus-within {
      border-color: #fec9da80;
      outline: 1px solid #fec9da80;
      .dark-mode & {
        border-color: #777;
      }
    }

    &:disabled {
      background-color: #f2f2f2;
      color: #888;
      cursor: not-allowed;
    }
  }
`;

interface DateFlatpickrProps {
  id?: any;
  value: Date | null | string;
  onChange: (date: Date | null) => void;
  type?: "date" | "datetime" | "time" | "range";
  placeholder?: string;
}

const DateFlatpickr: React.FC<DateFlatpickrProps> = ({
  id,
  value,
  onChange,
  type = "date",
  placeholder = "Select Date",
}) => {
  const options = {
    date: { enableTime: false, noCalendar: false, dateFormat: "Y-m-d" },
    range: {
      enableTime: false,
      noCalendar: false,
      dateFormat: "Y-m-d",
      mode: "range",
    },
    datetime: {
      enableTime: true,
      noCalendar: false,
      dateFormat: "Y-m-d H:i",
      minuteIncrement: 1,
    },
    time: {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      minuteIncrement: 1,
    },
  }[type];
  return (
    <StyledDateFlatpickr>
      <Flatpickr
        id={id}
        className="form-control"
        value={value}
        onChange={(selectedDates: Date[]) => onChange(selectedDates[0] || null)}
        options={options}
        placeholder={placeholder}
      />
      {/* <span className="d-inline-block me-3 p-3 cursor-pointer cursor-pointer z-3">
        <ChevronLeftIcon className="h-4 w-4" />
        <ChevronRightIcon className="h-4 w-4" />
      </span> */}
    </StyledDateFlatpickr>
  );
};

export default DateFlatpickr;
