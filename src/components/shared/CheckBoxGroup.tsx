import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
interface IProps {
  checkBoxId: string;
  //   checkBoxStyle: any;
  checkBoxClassName: string;
  checkBoxValue: boolean;
  checkBoxLabel: string;
  checkBoxLabelLink?: string;
  labelClassName: string;
  checkBoxName?: string;
  handleCheckboxChange: (e: string | undefined) => void;
}
const CheckBoxGroup: FC<IProps> = ({
  checkBoxId,
  checkBoxClassName,
  checkBoxLabel,
  labelClassName,
  checkBoxLabelLink,
  checkBoxValue,
  handleCheckboxChange,
  checkBoxName,
}) => {
  const _handleOnChange = () => {
    if (checkBoxValue) {
      handleCheckboxChange(undefined);
    } else {
      handleCheckboxChange(checkBoxId);
    }
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="form-check">
        <input
          className={`form-check-input border-0 ${checkBoxClassName}`}
          type="checkbox"
          style={{
            backgroundColor: checkBoxValue ? "" : "#F0F0F5",
            height: "16px",
            width: "16px",
          }}
          name={checkBoxName}
          checked={checkBoxValue}
          id={checkBoxId}
          onClick={_handleOnChange}
        />
        <label
          className={` form-check-label ${labelClassName}`}
          htmlFor={checkBoxId}
          style={{ marginTop: "4px", fontSize: "12px" }}
        >
          <span>{t(checkBoxLabel)}</span>{" "}
          {checkBoxLabelLink && (
            <>
              <a href="#" className="fw-600 text-gray">
                {t(checkBoxLabelLink)}
              </a>
            </>
          )}
        </label>
      </div>
    </>
  );
};

export default CheckBoxGroup;
