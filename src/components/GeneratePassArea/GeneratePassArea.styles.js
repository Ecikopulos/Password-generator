import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 90%;
  max-width: 543px;
  height: 323px;
  padding: 10px 5%;

  @media (min-height: 600px) and (min-width: 376px) {
    height: 423px;
  }

  @media (min-height: 750px) and (min-width: 630px) {
    height: 528px;
    padding: 24px 32px 32px 32px;
  }
`;
