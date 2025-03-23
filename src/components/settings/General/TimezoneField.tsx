import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import { ITimezone } from "react-timezone-select";

const TimezoneField: React.FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const customStyles = {
    placeholder: (provided: any) => ({
      ...provided,
      ".dark-mode &": {
        color: "#626281",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "400",
      fontSize: "14px",
      ".dark-mode &": {
        color: "#fff",
      },
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      padding: "4.8px",
      paddingLeft: "14px",
      borderRadius: "50px",
      borderColor: state.isFocused ? "#fec9da80" : "#d1d5db",
      outline: state.isFocused ? "1px solid #fec9da80" : "none",
      boxShadow: "none",
      "&:focus": {
        borderColor: "#fec9da80",
        outline: "1px solid #fec9da80",
      },
      "&:focus-within": {
        borderColor: "#fec9da80",
        outline: "1px solid #fec9da80",
      },
      ".dark-mode &": {
        background: "#282848 !important",
        borderColor: "rgba(255, 255, 255, 0.1) !important",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "500",
      fontSize: "18px",
      margin: "0px",
      padding: "0px",
      backgroundColor: "",
      ".dark-mode &": {
        color: "#fff",
      },
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      ".dark-mode &": {
        color: "#fff",
      },
    }),
    option: (provided: any, state: any) => {
      return {
        ...provided,
        backgroundColor: state.isSelected ? "#ED003B" : "transparent",
        color: state.isSelected ? "#fff" : provided.color,
        marginBottom: "2px",
        borderRadius: "4px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
        },
      };
    },
  };

  return (
    <TimezoneSelect
      value={selectedTimezone}
      onChange={setSelectedTimezone}
      styles={customStyles}
    />
  );
};

export default TimezoneField;
