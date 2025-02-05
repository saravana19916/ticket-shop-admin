import styled, { css } from "styled-components";

interface StyledTicketIndicate {
  status:
    | "Bronze Ticket"
    | "Silver Ticket"
    | "Gold Ticket"
    | "Platinum Ticket"
    | "VIP Ticket"
    | "VIP Lounge";
}

const StyledTicketIndicate = styled.div<StyledTicketIndicate>`
  ${(props) =>
    props.status === "Bronze Ticket" &&
    css`
      color: #9f7e58;
    `}

  ${(props) =>
    props.status === "Silver Ticket" &&
    css`
      color: #e5e5e5;
    `}

  ${(props) =>
    props.status === "Gold Ticket" &&
    css`
      color: #a7a72b;
    `}

  ${(props) =>
    props.status === "Platinum Ticket" &&
    css`
      color: #00ffff;
    `}
  ${(props) =>
    props.status === "VIP Ticket" &&
    css`
      color: #ff00ff;
    `}
  ${(props) =>
    props.status === "VIP Lounge" &&
    css`
      color: #f90046;
    `}
`;

export default StyledTicketIndicate;
