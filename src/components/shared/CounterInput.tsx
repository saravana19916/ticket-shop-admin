import React, { useState } from "react";
import styled from "styled-components";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const CounterInputContainer = styled.div`
  font-size: 1rem;
  border: 1px solid #e5e7eb;
  font-weight: 400;
  color: #000;
  border-radius: 50px;
  margin-bottom: 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 20px;
  .dark-mode & {
    border-color: #555;
    color: #fff;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .dark-mode & {
    color: #fff;
  }
  svg {
    width: 1rem;
    height: 1rem;
    color: black;
  }
`;

interface CounterInputProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <CounterInputContainer>
      <Button
        onClick={(event) => {
          event.preventDefault();
          onDecrement(); // <-- CALL the function
        }}
      >
        <MinusIcon />
      </Button>
      <span>{count}</span>
      <Button
        onClick={(event) => {
          event.preventDefault();
          onIncrement(); // <-- CALL the function
        }}
      >
        <PlusIcon />
      </Button>
    </CounterInputContainer>
  );
};

export default CounterInput;
