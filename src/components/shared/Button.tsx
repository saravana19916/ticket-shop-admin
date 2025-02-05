import React, { FC } from "react";
import { useTranslation } from "react-i18next";
interface IButtonProps {
  title: string;
  className: string;
  type: "submit" | "button" | "reset";
  isLoading?: boolean;
  style?: any;
  onClick?: (e: any) => void;
}
const ButtonPrimary: FC<IButtonProps> = ({
  title,
  className,
  type,
  onClick,
  isLoading,
  style,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <button
        type={type}
        className={`${className} btn`}
        onClick={onClick}
        disabled={isLoading}
        style={{ ...style }}
      >
        {t(title)}
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

export default ButtonPrimary;
