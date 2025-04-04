import React from "react";
import styled from "styled-components";
import { ButtonSecondary } from "../../styledComponents/styledButton";

interface SettingsTrackingProps {
  items: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #fff7f6;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 26px;
`;

const EditButton = styled.button`
  background: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 118px;

  &:hover {
    background-color: #e6f0ff;
  }
`;

const List = styled.ul`
  padding-left: 24px;
  list-style: disc;
`;

const ListItem = styled.li`
  font-size: 14px;
`;

const SettingsTracking: React.FC<SettingsTrackingProps> = ({ items }) => {
  return (
    <Container className="mt-8">
      <Header>
        <Title>Settings & Tracking</Title>
        <ButtonSecondary
          type="submit"
          className="btn ms-3 bg-transparent"
          style={{ minWidth: "118px" }}
        >
          Edit
        </ButtonSecondary>
      </Header>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SettingsTracking;
