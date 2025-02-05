import React, { FC, useEffect, useState } from "react";
import { Form, FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../../shared/CustomDropDownToggle";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { FormikErrors, FormikTouched } from "formik";
import { IAddListingAddZoningAndCapacity } from "../type";
import { FormLabelStyled } from "../../../../styledComponents/styledForm";
import Select from "react-select";
interface IProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (
    field: string,
    value: string | null | (string | number)[]
  ) => void;
}
interface ISeatsOptions {
  value: number;
  label: number;
}
const BlockedSeats: FC<IProps> = ({
  errors,
  touched,
  values,
  handleOnChange,
}) => {
  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "400",
      fontSize: "14px",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#777",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      padding: "4px",
      paddingLeft: "14px",
      borderRadius: "50px",
      borderColor: state.isFocused ? "#fec9da80" : "#e5e7eb",
      outline: state.isFocused ? "1px solid #fec9da80" : "none",
      boxShadow: "null",
      "&:focus": {
        borderColor: "#fec9da80",
        outline: "1px solid #fec9da80",
      },
      "&:focus-within": {
        borderColor: "#fec9da80",
        outline: "1px solid #fec9da80",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "500",
      fontSize: "18px",
      margin: "0px",
      padding: "0px",
      backgroundColor: "",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#ED003B" : "transparent",
      color: state.isSelected ? "#fff" : provided.color,
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
      },
    }),
  };
  const [seats, setSeats] = useState<ISeatsOptions[]>([]);
  useEffect(() => {
    const rangeFrom = Number(values.seats?.rangeFrom);
    const rangeUpTo = Number(values.seats?.rangeUpTo);

    if (!isNaN(rangeFrom) && !isNaN(rangeUpTo)) {
      const newSeats = [];
      for (let i = rangeFrom; i <= rangeUpTo; i++) {
        newSeats.push({
          label: i,
          value: i,
        });
      }
      setSeats(newSeats);
    }
  }, [values.seats?.rangeFrom, values.seats?.rangeUpTo]);
  const _handleOnSelect = (seat: number) => {
    const blockedSeats = values.seats?.blockedSeats || [];
    if (blockedSeats.includes(seat)) {
      const updatedSeats = blockedSeats.filter((s) => s !== seat);
      handleOnChange("seats.blockedSeats", updatedSeats);
    } else {
      const updatedSeats = [...blockedSeats, seat];
      handleOnChange("seats.blockedSeats", updatedSeats);
    }
  };
  return (
    <>
      <div className="col-12 mb-7 px-0">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Blocked Seats
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            in this section you define the blocked seats.
          </span>
          <div className="row">
            <div className="col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Blocked Seats</FormLabelStyled>
                <Select
                  options={seats}
                  placeholder="Select Blocked Seats"
                  classNamePrefix="Select"
                  className="mb-2"
                  styles={customStyles}
                  value={seats?.find((l) => l.value === l?.value)}
                  onChange={(e: any) => _handleOnSelect(e?.value)}
                />
              </Form.Group>
              {errors?.seats?.blockedSeats && touched?.seats?.blockedSeats && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.seats?.blockedSeats}
                  </span>
                </>
              )}
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default BlockedSeats;
