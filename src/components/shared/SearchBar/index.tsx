import React, { FC } from "react";
import styled from "styled-components";

interface IProps {}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid #d1d5db;
  background: #fff;
  .dark-mode & {
    border-color: #d1d5db;
    color: #fff;
  }
  &:hover {
    border-color: #b3b3b3;
    .dark-mode & {
      border-color: #d1d5db;
    }
  }

  &:focus,
  &:focus-within {
    border-color: #fec9da80;
    outline: 1px solid #fec9da80;
    .dark-mode & {
      border-color: #777;
    }
  }
`;

const SearchIcon = styled.span`
  padding: 8px 12px;
  background: transparent;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  background: transparent;
`;

const SearchBar: FC<IProps> = () => {
  return (
    <SearchContainer>
      <SearchIcon>
        <i className="bi bi-search"></i>
      </SearchIcon>
      <SearchInput type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
