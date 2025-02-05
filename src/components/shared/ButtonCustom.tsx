import React, { FC } from "react";
import styled from "styled-components";
interface IProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  isLoading?: boolean;
  onClick?: (e: any) => void;
  bgClassName?: string;
  paddingClassName?: string;
  roundedClassName?: string;
  fontSizeClassName?: string;
  fontWeightClassName?: string;
  borderClassName?: string;
}
const ButtonCustom: FC<IProps> = ({
  title,
  className,
  type = "button",
  onClick,
  isLoading,
  bgClassName = "btn-primary-1",
  roundedClassName = "rounded-pill",
  paddingClassName = "",
  fontWeightClassName,
  fontSizeClassName = "fs-6",
  borderClassName,
  icon,
}) => {
  return (
    <>
      <button
        type={type}
        className={`${className} ${bgClassName} ${roundedClassName} ${paddingClassName} ${fontWeightClassName} ${fontSizeClassName} ${borderClassName} btn`}
        onClick={onClick}
        disabled={isLoading}
      >
        {icon && <span className="me-2">{icon}</span>}
        {title}
        {isLoading ? (
          <div
            role="status"
            aria-hidden="true"
            className="spinner-border spinner-border-sm ms-2"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )}
      </button>
    </>
  );
};

export default ButtonCustom;
