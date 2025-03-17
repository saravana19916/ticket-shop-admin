import React, { FC, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Eye, Mail, Slash } from "react-feather";
import { ButtonPrimaryLight } from "../../styledComponents/styledButton";
interface IProps {
  menuItems: IMenuItems[];
  dropdownName?: React.ReactNode | string;
  dropDownType?: string;
}
interface IMenuItems {
  icon?: React.ReactNode | string;
  itemName?: string;
  onClick: () => void;
  isDisabled?: boolean;
}
const CustomDropdownMenu: FC<IProps> = ({
  dropdownName = "...",
  menuItems,
  dropDownType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      {dropDownType === "ButtonPrimaryLight" ? (
        <>
          <ButtonPrimaryLight className="btn" onClick={toggleDropdown}>
            {dropdownName}
          </ButtonPrimaryLight>
        </>
      ) : (
        <>
          <DropdownToggle onClick={toggleDropdown}>
            <span className="d-inline-block mb-1">{dropdownName}</span>
          </DropdownToggle>
        </>
      )}

      <DropdownMenu isOpen={isOpen} position={position}>
        {menuItems?.map((item) => (
          <>
            <DropdownItem onClick={item.onClick} disabled={item.isDisabled}>
              {item.icon}
              {item.itemName}
            </DropdownItem>
          </>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default CustomDropdownMenu;

const DropdownContainer = styled.div`
  display: inline-block;
`;

const DropdownToggle = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: black;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: gray;
  }
`;

const DropdownMenu = styled.div<{
  isOpen: boolean;
  position: { top: number; left: number };
}>`
  position: fixed;
  top: ${({ position }) => position.top}px;
  left: ${({ position }) => position.left}px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 200px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  overflow: hidden;
`;

const DropdownItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;
