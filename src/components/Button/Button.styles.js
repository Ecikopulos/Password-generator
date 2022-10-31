import styled from "styled-components";
import arrow from "../../assets/icons/icon-arrow-right.svg";

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  text-transform: uppercase;

  @media (min-height: 750px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Icon = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${arrow});
`;

export const Wrapper = styled.button`
  -webkit-appearance: none;
  border: none;
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-inline: 25%;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    border: solid 1px ${({ theme }) => theme.colors.green};
  }

  &:hover ${Text} {
    color: ${({ theme }) => theme.colors.green};
  }

  &:hover ${Icon} {
    background-color: ${({ theme }) => theme.colors.green};
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
  }

  @media (min-height: 600px) and (min-width: 376px) {
    height: 56px;
  }

  @media (min-height: 750px) and (min-width: 630px) {
    height: 65px;
  }
`;
