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
  background-color: #00ff00;
  border-color: #00ff00;
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
  background-color: #00dcfa;
  border-color: #00dcfa;
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
