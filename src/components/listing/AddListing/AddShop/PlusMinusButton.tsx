import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
interface IProps {
  handleAddButtonClick: () => void;
  handleMinusButtonClick: () => void;
}
const PlusMinusButton: FC<IProps> = ({
  handleAddButtonClick,
  handleMinusButtonClick,
}) => {
  return (
    <>
      <div className="ms-6 d-flex align-items-center justify-content-center gap-3">
        <span
          className="d-inline-block me-3 h-5 w-5 rounded d-flex align-items-center justify-content-center text-white fs-5 cursor-pointer"
          style={{
            backgroundColor: "#777",
          }}
          onClick={handleAddButtonClick}
        >
          <PlusIcon className="h-4 w-4 fw-bold" />
        </span>
        <span
          className="d-inline-block me-3 h-5 w-5 rounded d-flex align-items-center justify-content-center text-white fs-5 cursor-pointer"
          style={{
            backgroundColor: "#777",
          }}
          onClick={handleMinusButtonClick}
        >
          <MinusIcon className="h-4 w-4 fw-bold" />
        </span>
      </div>
    </>
  );
};

export default PlusMinusButton;
