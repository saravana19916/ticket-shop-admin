import React, { FC } from "react";
interface IProps {
  isToggled: boolean;
  handleToggle: () => void;
  toggleOnTitle?: string;
  toggleOffTitle?: string;
  divClassName?: string;
}
const ToggleButton: FC<IProps> = ({
  isToggled,
  handleToggle,
  toggleOffTitle,
  toggleOnTitle,
  divClassName = "col-12 mb-3",
}) => {
  return (
    <>
      <div className={`${divClassName}`}>
        {isToggled ? (
          <>
            <div
              className="badge rounded-pill text-white toggle-button on p-1 ps-2 pe-4 fs-5 cursor-pointer"
              onClick={handleToggle}
            >
              <div className="d-flex gap-2 align-items-center">
                <i className="bi bi-circle-fill fs-4 toggle-circle"></i>
                <span className="fs-6" style={{ marginTop: "2px" }}>
                  {toggleOnTitle || "ON"}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="badge rounded-pill text-white toggle-button off p-1 pe-2 ps-4 fs-5 cursor-pointer"
              onClick={handleToggle}
            >
              <div className="d-flex gap-2 align-items-center">
                <span className="fs-6" style={{ marginTop: "2px" }}>
                  {toggleOffTitle || "OFF"}
                </span>
                <i className="bi bi-circle-fill fs-4 toggle-circle"></i>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ToggleButton;
