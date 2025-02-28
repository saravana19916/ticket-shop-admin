import React from "react";
import { components } from "react-select";
import { ChevronDown } from "react-feather";
import styled from "styled-components";

const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronIcon size={18} />
    </components.DropdownIndicator>
  );
};

export default CustomDropdownIndicator;

const ChevronIcon = styled(ChevronDown)`
  color: #777;
`;
