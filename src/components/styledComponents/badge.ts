import styled, { css } from "styled-components";

interface BadgeProps {
  status: "Cancelled" | "Used" | "Issued" | "Other";
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
