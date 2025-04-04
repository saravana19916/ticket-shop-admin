import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const RadioContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledLabel = styled.label<{ selected: boolean }>`
  display: flex;
  padding: 20px 40px;
  border-radius: 8px;
  border: 1px solid ${({ selected }) => (selected ? "#ed003b" : "#ccc")};
  background-color: ${({ selected }) =>
    selected ? "rgb(255, 247, 246)" : "white"};
  cursor: pointer;
  width: 180px;
  font-weight: 600;
  color: #000;
  width: 100%;
`;

const LabelRadio = styled.span`
  margin-left: 12px;
`;

const RadioButtonGroup: React.FC = () => {
  const [selected, setSelected] = useState("schedule");

  return (
    <RadioContainer className="mt-6 mb-3">
      <StyledLabel selected={selected === "schedule"}>
        <input
          className="form-check-input rounded-circle"
          type="checkbox"
          name="options"
          value="schedule"
          checked={selected === "schedule"}
          onChange={() => setSelected("schedule")}
        />
        <LabelRadio>Schedule</LabelRadio>
      </StyledLabel>

      <StyledLabel selected={selected === "sendNow"}>
        <input
          className="form-check-input rounded-circle"
          type="checkbox"
          name="options"
          value="sendNow"
          checked={selected === "sendNow"}
          onChange={() => setSelected("sendNow")}
        />
        <LabelRadio>Schedule</LabelRadio>
      </StyledLabel>
    </RadioContainer>
  );
};

export default RadioButtonGroup;
