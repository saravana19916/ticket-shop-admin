import React, { FC } from "react";
import Select, {
  ActionMeta,
  InputActionMeta,
  MultiValue,
  SingleValue,
} from "react-select";
import CustomOption from "./CustomOptions";
import CustomDropdownIndicator from "./CustomDropdownIndicator";

export interface IOptionType {
  value: string | number | boolean;
  label: string;
}

interface IProps {
  isMulti?: boolean;
  isSearchable?: boolean;
  selectedValue?: IOptionType | IOptionType[] | null;
  multiSelectOnChange?: (
    newValue: MultiValue<IOptionType>,
    actionMeta: ActionMeta<IOptionType>
  ) => void;
  onChange?: (
    newValue: SingleValue<IOptionType>,
    actionMeta: ActionMeta<IOptionType>
  ) => void;
  options: IOptionType[];
  classNamePrefix?: string;
  className?: string;
  placeholder?: string;

  fontSize?: string;
  onInputChange?:
    | ((newValue: string, actionMeta: InputActionMeta) => void)
    | undefined;
}

const Index: FC<IProps> = ({
  isMulti,
  selectedValue,
  onChange,
  multiSelectOnChange,
  options,
  classNamePrefix,
  className,
  placeholder,
  onInputChange,
  isSearchable,
  fontSize = "14px",
}) => {
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
      fontSize: fontSize,
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
      if (isMulti) {
        return { ...provided };
      } else
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

  const handleChange = (
    newValue: MultiValue<IOptionType> | SingleValue<IOptionType>,
    actionMeta: ActionMeta<IOptionType>
  ) => {
    if (isMulti) {
      multiSelectOnChange?.(newValue as MultiValue<IOptionType>, actionMeta);
    } else {
      onChange?.(newValue as SingleValue<IOptionType>, actionMeta);
    }
  };
  if (isMulti) {
    return (
      <Select
        options={options}
        placeholder={placeholder}
        classNamePrefix={classNamePrefix}
        styles={customStyles}
        className={className}
        isMulti={isMulti}
        value={selectedValue}
        hideSelectedOptions={false}
        onChange={handleChange}
        closeMenuOnSelect={!isMulti}
        isOptionSelected={(option) =>
          Array.isArray(selectedValue) &&
          selectedValue.some((sel) => sel.value === option.value)
        }
        components={{
          Option: CustomOption,
          DropdownIndicator: CustomDropdownIndicator,
        }}
        onInputChange={onInputChange}
        isSearchable={isSearchable}
      />
    );
  }
  return (
    <Select
      options={options}
      placeholder={placeholder}
      classNamePrefix={classNamePrefix}
      styles={customStyles}
      className={className}
      isMulti={isMulti}
      value={selectedValue}
      hideSelectedOptions={false}
      onChange={handleChange}
      closeMenuOnSelect={!isMulti}
      isOptionSelected={(option) =>
        Array.isArray(selectedValue) &&
        selectedValue.some((sel) => sel.value === option.value)
      }
      components={{
        DropdownIndicator: CustomDropdownIndicator,
      }}
    />
  );
};

export default Index;
