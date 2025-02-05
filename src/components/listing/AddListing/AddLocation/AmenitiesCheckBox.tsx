import React, { FC, useState } from "react";
interface IProps {
  checkBoxId: string;
  checkBoxClassName: string;
  checkBoxValue: boolean;
  checkBoxLabel: string;
  labelClassName: string;
  handleCheckboxChange: (e: string | undefined) => void;
}
const AmenitiesCheckBox: FC<IProps> = ({
  checkBoxId,
  checkBoxClassName,
  checkBoxLabel,
  labelClassName,
  checkBoxValue,
  handleCheckboxChange,
}) => {
  const _handleOnChange = () => {
    if (checkBoxValue) {
      handleCheckboxChange(undefined);
    } else {
      handleCheckboxChange(checkBoxId);
    }
  };
  return (
    <>
      <div className="form-check">
        <input
          className={`form-check-input me-3 ${checkBoxClassName}`}
          type="checkbox"
          style={{
            height: "22px",
            width: "22px",
            borderColor: "#c0c0c0",
          }}
          checked={checkBoxValue}
          id={checkBoxId}
          onClick={_handleOnChange}
        />
        <label
          className={`form-check-label fw-500 ${labelClassName}`}
          htmlFor={checkBoxId}
          style={{ marginTop: "4.5px", fontSize: "14px", marginLeft: "12px" }}
        >
          <span className="fs-600">{checkBoxLabel}</span>{" "}
        </label>
      </div>
    </>
  );
};

export default AmenitiesCheckBox;
