import React, { useState } from "react";
import styled from "styled-components";

interface EditableInputProps {
  initialValue: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<{ isEditable: boolean }>`
  font-weight: 600;
  font-size: 26px;
  border: none;
  background: ${(props) => (props.isEditable ? "white" : "white")};
  opacity: ${(props) => (props.isEditable ? 1 : 1)};
  pointer-events: ${(props) => (props.isEditable ? "auto" : "none")};
  padding: 5px 10px;
  transition: background 0.3s, opacity 0.3s;
`;

const EditButton = styled.span`
  font-weight: 600;
  color: #007bff;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const EditableInput: React.FC<EditableInputProps> = ({ initialValue }) => {
  const [isEditName, setIsEditName] = useState<boolean>(false);
  const [value, setValue] = useState<string>(initialValue);

  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={value}
        isEditable={isEditName}
        onChange={(e) => setValue(e.target.value)}
      />
      <span
        className="fw-semibold text-primary cursor-pointer"
        onClick={() => setIsEditName((prev) => !prev)}
      >
        {isEditName ? "Save" : "Edit Name"}
      </span>
    </InputContainer>
  );
};

export default EditableInput;
