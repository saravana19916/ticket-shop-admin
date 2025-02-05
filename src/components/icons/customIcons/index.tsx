import React, { FC } from "react";
import Dirham from "./Dirham";
interface IProps {
  width: string;
  height: string;
  color: string;
  name: string;
}
const index: FC<IProps> = ({ color, width, height, name }) => {
  switch (name) {
    case "dirham":
      return (
        <>
          <Dirham width={width} height={height} color={color} />
        </>
      );
    default:
      return <></>;
  }
};

export default index;
