import styled from "styled-components";

const ResponsiveTile = styled.div`
  max-width: 450px;
  min-width: 400px;
  @media (max-width: 500px) {
    max-width: 100%;
    min-width: auto;
    width: 100%;
    margin: auto;
  }
`;

export default ResponsiveTile;
