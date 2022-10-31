import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-height: 750px) {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h1`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  line-height: 21px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-transform: capitalize;
`;
