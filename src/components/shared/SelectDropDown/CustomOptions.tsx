import React from "react";
import styled from "styled-components";
import { StyledInputDiv } from "../../styledComponents/styledForm";

const OptionWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 14px;
  color: ${(props) => (props.isSelected ? "#ED003B" : "#000")};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #fec9da80;
  }
`;
const CheckMark = styled.span`
  color: #ed003b;
  font-weight: bold;
`;

const CustomOption = (props: any) => {
  console.log('custom');
  const { data, isSelected, innerRef, innerProps } = props;

  return (
    <OptionWrapper ref={innerRef} {...innerProps} isSelected={isSelected}>
      <span className="d-inline-block ms-4">{data.label}</span>
      {isSelected && (
        <>
          <CheckMark>
            <i className="bi bi-check-lg d-inline-block me-2" style={{ strokeWidth: "4px" }}></i>
          </CheckMark>
          {/* <StyledInputDiv className="form-check">
            <input
              className="form-check-input cursor-pointer"
              type="checkbox"
              checked={isSelected}
            ></input>
          </StyledInputDiv> */}
        </>
      )}
    </OptionWrapper>
  );
};

export default CustomOption;
