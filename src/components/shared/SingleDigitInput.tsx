import React from "react";
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

function SingleDigitInput({ value, onChange }: SingleDigitInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "" || /^[0-9]$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onInput={handleChange}
      maxLength={1}
    />
  );
}

export default SingleDigitInput;
