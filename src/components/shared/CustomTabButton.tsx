// import { Button } from "@headlessui/react";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
interface IProps {
  selected: boolean;
  tabName: string;
  index: number;
  setSelectedTab?: Dispatch<SetStateAction<number>>;
  href?: string;
}
interface ButtonProps {
  isActive: boolean;
}
const Button = styled.button<ButtonProps>`
  display: block;
  white-space: nowrap;
  font-weight: 400;
  line-height: 1;
  padding: 10px 20px; /* Equivalent to px-5 py-2.5 */
  font-size: 14px; /* Equivalent to text-sm */
  text-transform: capitalize;
  border-radius: 9999px; /* Fully rounded */
  color: #6b7280; /* Equivalent to text-neutral-500 */
  transition: background-color 0.2s, color 0.2s;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  /* Responsive Styles */
  @media (min-width: 640px) {
    /* Equivalent to sm: */
    font-size: 16px; /* Equivalent to sm:text-base */
    padding: 12px 24px; /* Equivalent to sm:px-6 sm:py-3 */
  }

  /* Hover Styles */
  &:hover {
    --tw-text-opacity: 1;
    --c-neutral-900: 17, 24, 39;
    background-color: #f3f4f6 !important; /* Equivalent to hover:bg-neutral-100 */
    color: rgba(
      17,
      24,
      39,
      1
    ) !important; /* Equivalent to hover:text-neutral-900 */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    color: #a3a3a3; /* Equivalent to dark:text-neutral-400 */

    &:hover {
      background-color: #262626; /* Equivalent to dark:hover:bg-neutral-800 */
      color: #e5e5e5; /* Equivalent to dark:hover:text-neutral-100 */
    }
  }
  /* Active State */
  ${({ isActive }) =>
    isActive &&
    ` 
    background-color: #ED003B;
    color: #ffffff !important;

    &:hover {
      background-color: #ED003B !important;
      color: #ffffff !important;
    }
  `}
`;
const CustomTabButton: FC<IProps> = ({
  selected,
  tabName,
  setSelectedTab,
  index,
  href,
}) => {
  const navigate = useNavigate();
  const handleOnTabChange = () => {
    href && navigate(href);
    setSelectedTab && setSelectedTab(index);
  };
  return (
    <>
      <Button isActive={selected} type="button" onClick={handleOnTabChange}>
        {tabName}
      </Button>
    </>
  );
};

export default CustomTabButton;
