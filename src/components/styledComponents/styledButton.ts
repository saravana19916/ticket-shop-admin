import styled from "styled-components";
import { Link } from "react-router-dom";

const BaseButton = styled.button`
  border-radius: 50px;
  font-weight: 500;
  padding: 10px 24px;
  font-size: 14px;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: #fff;
  }

  i {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  span {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const ButtonPrimary = styled(BaseButton)`
  background-color: #ed003b;
  border-color: #ed003b;

  &:hover {
    background-color: #e00036;
  }
`;

export const IconButtonPrimary = styled(ButtonPrimary)`
  padding: 10px 12px;
`;

export const LinkButtonPrimary = styled(ButtonPrimary).attrs({ as: Link })`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;
// Secondary Buttons
export const ButtonSecondary = styled(BaseButton)`
  border-color: #e5e7eb;
  color: #374151;
  background-color: #ffffff;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

export const ButtonSecondaryGrey = styled(ButtonSecondary)`
  border-color: #dadbdf;
  background-color: #e4e4e4;
`;

export const ButtonSecondaryDarkGrey = styled(ButtonSecondary)`
  border-color: #8c8c8c;
  background-color: #8c8c8c;
  color: #fff;

  &:hover {
    background-color: #a6a6a6;
    border-color: #a6a6a6;
    color: #fff;
  }
`;

// Success and Status Buttons
export const ButtonSuccess = styled(BaseButton)`
  background-color: #16d9c6;
  border-color: #16d9c6;
`;

export const ButtonActive = styled(BaseButton)`
  background-color: #00ff00;
  border-color: #00ff00;
  font-size: 12px;
  padding: 8px 32px;
  min-width: 130px;
`;

export const ButtonNotActive = styled(ButtonActive)`
  background-color: #00dcfa;
  border-color: #00dcfa;
`;
