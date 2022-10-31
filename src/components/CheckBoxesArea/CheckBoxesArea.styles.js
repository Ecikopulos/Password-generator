import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  width: 100%;
  height: 119px;

  @media (min-height: 600px) and (min-width: 376px) {
    height: 132px;
    margin-bottom: 32px;
    margin-top: 56px;
  }

  @media (min-height: 750px) and (min-width: 630px) {
    height: 182px;
  }
`;
