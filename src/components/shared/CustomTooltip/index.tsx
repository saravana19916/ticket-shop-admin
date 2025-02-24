import React, { FC, ReactNode } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";
interface IProps {
  title: ReactNode;
  placement?: Placement;
  iconMarginBottom?: string;
}
const index: FC<IProps> = ({
  title,
  placement = "top",
  iconMarginBottom = "0px",
}) => {
  return (
    <>
      <OverlayTrigger
        placement={placement}
        overlay={<Tooltip>{title}</Tooltip>}
      >
        <i
          className="fe fe-info d-inline-block ms-2 cursor-pointer"
          style={{
            marginBottom: iconMarginBottom,
          }}
        ></i>
      </OverlayTrigger>
    </>
  );
};

export default index;
