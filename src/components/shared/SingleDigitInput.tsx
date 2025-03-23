import React, { forwardRef } from "react";
import styled from "styled-components";

interface SingleDigitInputProps {
  value: string;
  onChange: (value: string) => void;
}

const StyledInput = styled.input`
  width: 4rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1.25rem;
  outline: none;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  font-size: 1.125rem;
  color: #1f2937;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;

const SingleDigitInput = forwardRef<HTMLInputElement, SingleDigitInputProps>(
  ({ value, onChange }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value === "" || /^[0-9]$/.test(value)) {
        onChange(value);
      }
    };

    return (
      <StyledInput
        ref={ref} // Pass ref for autofocus support
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={1}
      />
    );
  }
);

export default SingleDigitInput;
