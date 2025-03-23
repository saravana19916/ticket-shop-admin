import React from "react";
import Switch from "react-switch";

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
  hideLabel?: boolean;
};

const SwitchReact: React.FC<SwitchProps> = ({
  checked,
  onChange,
  hideLabel = false,
}) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      className="react-switch"
      activeBoxShadow="#d81c2b"
      onColor="#d81c2b"
      uncheckedIcon={
        <div className="d-flex align-items-center text-white h-100 justify-content-center pe-1">
          {hideLabel ? "" : "Off"}
        </div>
      }
      checkedIcon={
        <div className="d-flex align-items-center text-white h-100 justify-content-center ps-1">
          {hideLabel ? "" : "On"}
        </div>
      }
    />
  );
};

export default SwitchReact;
