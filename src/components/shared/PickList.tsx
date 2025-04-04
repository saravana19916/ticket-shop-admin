import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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
  // align-self: center;
  margin-top: 4rem;
`;

const ListItem = styled(motion.div)<{ selected: boolean; isDark?: boolean }>`
  cursor: pointer;
  border: 1px solid #d1d5db;
  border-radius: 16px;
  padding: 10px 15px;
  color: ${(props) => (props.isDark ? "#000" : "#6b7280")};
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
  height: 35px;
  border: none;
  color: #000;
  border-radius: 50px;
  cursor: pointer;
  // background-color: #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:disabled {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    // background-color: #f0f0f0;
    cursor: auto;
  }
`;

const listItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

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
  const [selectedSource, setSelectedSource] = useState<string[]>([]);
  const [selectedTarget, setSelectedTarget] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    selected: string[],
    setSelected: Function
  ) => {
    console.log(selected);

    setSelected((prev: string[]) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const moveItems = (
    from: string[],
    to: string[],
    selected: string[],
    setFrom: Function,
    setTo: Function,
    setSelected: Function
  ) => {
    const newFrom = from.filter((item) => !selected.includes(item));
    const newTo = [...selected, ...to];
    setFrom(newFrom);
    setTo(newTo);
    setSelected([]);
    onChange(newFrom, newTo);
  };

  return (
    <PickListContainer>
      <ListContainer>
        <label className="fs-5 fw-500 text-black form-label">
          Available Tickets
        </label>
        <AnimatePresence>
          {sourceList.map((item) => (
            <ListItem
              key={item}
              selected={selectedSource.includes(item)}
              onClick={() =>
                toggleSelection(item, selectedSource, setSelectedSource)
              }
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listItemVariants}
              transition={{ duration: 0.2 }}
            >
              {item}
            </ListItem>
          ))}
        </AnimatePresence>
      </ListContainer>

      <ButtonContainer>
        <Button
          onClick={() =>
            moveItems(
              sourceList,
              targetList,
              selectedSource,
              setSourceList,
              setTargetList,
              setSelectedSource
            )
          }
          disabled={selectedSource?.length === 0}
        >
          <i className="fe fe-arrow-right"></i>
        </Button>
        <Button
          onClick={() =>
            moveItems(
              targetList,
              sourceList,
              selectedTarget,
              setTargetList,
              setSourceList,
              setSelectedTarget
            )
          }
          disabled={selectedTarget?.length === 0}
        >
          <i className="fe fe-arrow-left"></i>
        </Button>
      </ButtonContainer>

      <ListContainer>
        <label className="fs-5 fw-500 text-black form-label">
          Selected Tickets
        </label>
        <AnimatePresence>
          {targetList.map((item) => (
            <ListItem
              key={item}
              selected={selectedTarget.includes(item)}
              isDark
              onClick={() =>
                toggleSelection(item, selectedTarget, setSelectedTarget)
              }
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listItemVariants}
              transition={{ duration: 0.2 }}
            >
              {item}
            </ListItem>
          ))}
        </AnimatePresence>
      </ListContainer>
    </PickListContainer>
  );
};
export default PickList;
