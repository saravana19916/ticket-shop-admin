import styled from "styled-components";

export const AccordionH2Light = styled.span`
  color: #6d727f;
  font-size: 10px;
  display: block;
`;
export const AccordionBodyTop = styled.div`
  background-color: #fafbfb;
  border-radius: 14px;
  .dark-mode & {
    background-color: #1a1a3c;
  }
`;
export const AccordionBodyLeftSection = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: normal;
  .dark-mode & {
    color: #fff;
  }
`;

export const AccordionBodyRightSection = styled.span`
  color: #4d5562;
  font-size: 12px;
  font-weight: normal;
  .dark-mode & {
    color: #fff;
  }
`;
export const AccordionButton = styled.button`
  border-radius: 50px;
  background-color: #f3f4f4;
  font-size: 12px;
  font-weight: 500;
  color: #4d5562;
  padding: 8px 56px;
  .dark-mode & {
    background-color: #1a1a3c;
    color: #fff;
  }
`;
export const AccordionButton2 = styled.button`
  border-radius: 50px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 500;
  color: #4d5562;
  padding: 8px 56px;

  .dark-mode & {
    background-color: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`;
