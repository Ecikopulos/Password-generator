import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-inline: 5%;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    text-transform: uppercase;
  }

  p.grey {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media (min-height: 600px) and (min-width: 376px) {
    height: 56px;
    margin-bottom: 16px;
  }

  @media (min-height: 750px) and (min-width: 630px) {
    height: 72px;
    margin-bottom: 32px;

    p {
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    p.grey {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const StrengthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled.div`
  width: 6px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  margin-left: 6px;

  &.weak {
    background-color: ${({ theme }) => theme.colors.red};
    border: none;
  }

  &.medium {
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
  }

  &.strong {
    background-color: ${({ theme }) => theme.colors.yellow};
    border: none;
  }

  &.power {
    background-color: ${({ theme }) => theme.colors.green};
    border: none;
  }

  @media (min-height: 750px) and (min-width: 630px) {
    width: 10px;
    height: 28px;
    margin-left: 8px;
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
`;
