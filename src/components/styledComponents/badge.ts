import styled, { css } from "styled-components";

interface BadgeProps {
  status?: "Cancelled" | "Used" | "Issued" | "Other";
  minWidth?: string;
}

const StyledBadge = styled.div<BadgeProps>`
  margin-left: auto;
  margin-right: 0.5rem;
  font-size: 10px;
  display: inline-block;
  border-radius: 50rem;
  text-align: center;

  ${(props) =>
    props.status === "Cancelled" &&
    css`
      background-color: #ff003e; /* Bootstrap's btn-danger */
      color: white;
    `}

  ${(props) =>
    props.status === "Used" &&
    css`
      background-color: #00bef2; /* Bootstrap's btn-secondary */
      color: white;
    `}

  ${(props) =>
    props.status === "Issued" &&
    css`
      background-color: #3ab879; /* Bootstrap's btn-success */
      color: white;
    `}

  ${(props) =>
    props.status === "Other" &&
    css`
      background-color: #00bef2; /* Bootstrap's btn-info */
      color: white;
    `}
`;

export default StyledBadge;

export const ActiveBadge = styled.span<BadgeProps>`
  display: block;
  border-radius: 50px;
  color: #fff;
  background-color: #16d9c6;
  border-color: #16d9c6;
  font-weight: 500;
  font-size: 12px;
  padding: 8px 32px;
  min-width: 130px;
  display: block;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
`;

export const NotActiveBadge = styled(ActiveBadge)`
  background-color: #baf1e4;
  border-color: #baf1e4;
`;

export const WhiteBadge = styled(ActiveBadge)<BadgeProps>`
  color: #000;
  background-color: #fff;
  min-width: 112px;
  font-size: 10px;
  ${(props) =>
    props.minWidth &&
    css`
      min-width: ${props.minWidth};
    `}
`;

export const SuccessBadge = styled.span`
  border-radius: 8px;
  border: 1px solid #7ed4ad; /* Added 'solid' for proper border */
  background-color: #d3f1df;
  color: #118b50;
  padding: 2px 10px;
`;
export const DangerBadge = styled.span`
  border-radius: 8px;
  border: 1px solid #f5a6a6;
  background-color: #fbeaea;
  color: #d9534f;
  padding: 2px 10px;
`;
export const WaringBadge = styled.span`
  border-radius: 8px;
  border: 1px solid #e0b97c;
  background-color: #fdf4e3;
  color: #c09853;
  padding: 2px 10px;
  font-weight: 500;
`;
export const InfoBadge = styled.span`
  border-radius: 8px;
  border: 1px solid #5bc0de;
  background-color: #d9edf7;
  color: #31708f;
  padding: 2px 10px;
  font-weight: 500;
`;
export const SaleOffBadge = styled.span`
  border-radius: 50px;
  min-width: 100px;
  border: 1px solid #ed003b;
  background-color: #ed003b;
  color: #fff;
  padding: 2px 10px;
  font-weight: 500;
`;
