import React, { InputHTMLAttributes, useState } from "react";
import { useTranslation } from "react-i18next";

export interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  bgColorClass: string;
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
  handleChange?: (e: any) => void;
  value?: string;
  style?: any;
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      className = "",
      sizeClass = "px-4 py-2",
      fontClass = "text-sm font-normal",
      rounded = "rounded-2xl",
      type = "password",
      handleChange,
      value,
      bgColorClass,
      placeholder,
      style,
      ...args
    },
    ref
  ) => {
    const { t } = useTranslation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
    return (
      <>
        <div className="input-group mb-3">
          <input
            ref={ref}
            type={isPasswordVisible ? "text" : "password"}
            placeholder={t(placeholder)}
            onChange={handleChange}
            value={value}
            style={{ ...style, borderRadius: "50px 0 0 50px" }}
            className={`d-block placeholder-danger-subtle p-4 form-control ${sizeClass} ${fontClass} ${rounded} ${className} ${bgColorClass}`}
            {...args}
          />
          <button
            style={{ ...style, borderRadius: "0px 50px 50px 0px" }}
            className={`btn text-black-50 border-0 ${rounded}`}
            type="button"
            id="button-addon2"
            onClick={togglePasswordVisibility}
          >
            <i
              className={`align-middle fs-6 ${
                isPasswordVisible ? "ri-eye-line" : "ri-eye-off-line"
              }`}
            ></i>
          </button>
        </div>
      </>
    );
  }
);

export default Password;
