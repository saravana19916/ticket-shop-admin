import React, { FC, useState } from "react";
import styled from "styled-components";

// Styled component for the tab container
const TabContainer = styled.div`
  background-color: #fcd3e1; // pink-lighter
  padding: 0.8rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  gap: 1.5rem;
`;

// Styled component for individual tab buttons
const TabButton = styled.button<{ active: boolean }>`
  font-weight: ${(props) => (props.active ? "600" : "500")};
  border: none;
  background-color: ${(props) => (props.active ? "#ED003B" : "white")};
  color: ${(props) => (props.active ? "white" : "#000")};
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#ED003B" : "#fff")};
  }
`;
interface IProps {
  tabs: string[];
}
const index: FC<IProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].toLowerCase());

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          active={activeTab === tab.toLowerCase()}
          onClick={() => setActiveTab(tab.toLowerCase())}
        >
          {tab}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default index;
