import React, { useState } from "react";
import styled, { css } from "styled-components";

const PickListContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: center;
`;

const ListItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  border: 1px solid #e9edf4;
  border-radius: 16px;
  padding: 10px 15px;
  color: #5b5b5b;
  font-size: 14px;
  margin: 12px 0px;
  ${(props) =>
    props.selected &&
    css`
      background-color: #fec9da80;
    `}
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  //   background-color: #007bff;
  color: #000;
  cursor: pointer;
  &:hover {
    // background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

type PickListProps = {
  sourceItems: string[];
  targetItems: string[];
  onChange: (source: string[], target: string[]) => void;
};

const PickList: React.FC<PickListProps> = ({
  sourceItems,
  targetItems,
  onChange,
}) => {
  const [sourceList, setSourceList] = useState(sourceItems);
  const [targetList, setTargetList] = useState(targetItems);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  const moveItem = (
    from: string[],
    to: string[],
    item: string | null,
    setFrom: Function,
    setTo: Function
  ) => {
    if (item) {
      const newFrom = from.filter((i) => i !== item);
      const newTo = [...to, item];
      setFrom(newFrom);
      setTo(newTo);
      onChange(newFrom, newTo);
    }
  };

  return (
    <PickListContainer>
      <ListContainer>
        <label className="fs-5 fw-500 text-black form-label">
          Available Tickets
        </label>
        {sourceList.map((item) => (
          <ListItem
            key={item}
            selected={selectedSource === item}
            onClick={() => setSelectedSource(item)}
          >
            {item}
          </ListItem>
        ))}
      </ListContainer>

      <ButtonContainer>
        <Button
          onClick={() =>
            moveItem(
              sourceList,
              targetList,
              selectedSource,
              setSourceList,
              setTargetList
            )
          }
          disabled={!selectedSource}
        >
          <i className="fe fe-arrow-right"></i>
        </Button>
        <Button
          onClick={() =>
            moveItem(
              targetList,
              sourceList,
              selectedTarget,
              setTargetList,
              setSourceList
            )
          }
          disabled={!selectedTarget}
        >
          <i className="fe fe-arrow-left"></i>
        </Button>
      </ButtonContainer>

      <ListContainer>
        <label className="fs-5 fw-500 text-black form-label">
          Selected Tickets
        </label>
        {targetList.map((item) => (
          <ListItem
            key={item}
            selected={selectedTarget === item}
            onClick={() => setSelectedTarget(item)}
          >
            {item}
          </ListItem>
        ))}
      </ListContainer>
    </PickListContainer>
  );
};
export default PickList;
