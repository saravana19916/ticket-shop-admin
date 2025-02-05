import React, { FC } from "react";
interface IInputGroupProps {
  inputName?: string;
  inputClassName: string;
  inputStyle: string;
  inputType: string;
  inputPlaceholder: string;
  inputGroupId: string;
  buttonClassName: string;
  buttonType: "submit" | "button" | "reset";
  buttonTitle: string;
  handleAction: () => void;
}
const InputGroup: FC<IInputGroupProps> = ({
  inputName,
  inputClassName,
  inputType,
  inputPlaceholder,
  inputGroupId,
  buttonClassName,
  buttonType,
  buttonTitle,
  handleAction,
}) => {
  return (
    <>
      <div className="input-group mb-3 mb-lg-2">
        <input
          type={inputType}
          className={`form-control ${inputClassName}`}
          placeholder={inputPlaceholder}
          aria-label={inputPlaceholder}
          aria-describedby={inputGroupId}
          name={inputName}
          style={{ borderRadius: "50px 0 0 50px" }}
        />
        <button
          className={`btn ${buttonClassName}`}
          type={buttonType}
          id={inputGroupId}
          onClick={handleAction}
          style={{ borderRadius: "0px 50px 50px 0px" }}
        >
          {buttonTitle}
        </button>
      </div>
    </>
  );
};

export default InputGroup;
