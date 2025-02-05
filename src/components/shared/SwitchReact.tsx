import React from "react";
import Switch from "react-switch";

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
};

const SwitchReact: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      className="react-switch"
      onColor="#d81c2b"
      uncheckedIcon={
        <div className="d-flex align-items-center text-white h-100 justify-content-center pe-1">
          Off
        </div>
      }
      checkedIcon={
        <div className="d-flex align-items-center text-white h-100 justify-content-center ps-1">
          On
        </div>
      }
    />
  );
};

export default SwitchReact;
