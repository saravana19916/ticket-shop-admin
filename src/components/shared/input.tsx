import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      sizeClass = "px-4 py-2",
      fontClass = "text-sm font-normal",
      rounded = "rounded-2xl",
      type,
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

    return (
      <input
        ref={ref}
        type={type}
        placeholder={t(placeholder)}
        onChange={handleChange}
        value={value}
        style={style}
        className={`d-block placeholder-danger-subtle p-4 form-control ${sizeClass} ${fontClass} ${rounded} ${className} ${bgColorClass}`}
        {...args}
      />
    );
  }
);

export default Input;
