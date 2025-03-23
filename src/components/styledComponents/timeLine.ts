import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 0;
  gap: 48px;

  &::before {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 5px;
    bottom: 6px;
    width: 2px;
    background: #e0e0e0;
  }
  i {
    color: #6c757d;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

export const TimelineItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const TimeLineDot = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  z-index: 1;
  //   border: 3px solid white;
  //   box-shadow: 0 0 0 4px ${({ color }) => color}33; /* Outer glow effect */
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .status {
    font-weight: 600;
    font-size: 16px;
    color: #343a40;
  }

  .date {
    font-size: 12px;
    color: #6c757d;
  }
`;
