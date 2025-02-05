import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import styled from "styled-components";
export const CustomDropdownToggle = styled(DropdownToggle)`
  &::before,
  &::after {
    content: none !important;
  }
`;
