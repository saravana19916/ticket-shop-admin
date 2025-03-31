import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
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

const CustomDropdownMenu: React.FC<IProps> = ({
  dropdownName = "...",
  menuItems,
  dropDownType,
}) => {
  return (
    <DropdownStyled>
      <Dropdown>
        {dropDownType === "ButtonPrimaryLight" ? (
          <Dropdown.Toggle as={StyledButtonPrimaryLight}>
            {dropdownName}
          </Dropdown.Toggle>
        ) : (
          <Dropdown.Toggle as={CustomButton}>{dropdownName}</Dropdown.Toggle>
        )}

        <DropdownMenu as={Dropdown.Menu}>
          {menuItems?.map((item, index) => (
            <DropdownItem
              key={index}
              onClick={item.onClick}
              disabled={item.isDisabled}
            >
              {item.icon}
              {item.itemName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </DropdownStyled>
  );
};

export default CustomDropdownMenu;

/* Styled Components */
const DropdownStyled = styled.div`
  display: inline-block;
`;

/* Custom button if ButtonPrimaryLight is used */
const StyledButtonPrimaryLight = styled(ButtonPrimaryLight)`
  border: none;
  cursor: pointer;
`;

/* Default dropdown button */
const CustomButton = styled.button`
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

const DropdownMenu = styled(Dropdown.Menu)`
  border: 1px solid #ccc !important;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
`;

const DropdownItem = styled(Dropdown.Item)<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: ${({ disabled }) =>
    disabled ? "#f8f9fa !important" : "transparent"};
  color: ${({ disabled }) => (disabled ? "#6c757d !important" : "black")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "#f8f9fa" : "#f5f5f5")};
  }
`;
