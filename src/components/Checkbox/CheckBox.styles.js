import styled from "styled-components";
import check from "../../assets/icons/icon-check.svg";

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 13px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-height: 600px) and (min-width: 376px) {
    margin-bottom: 16px;
  }
`;

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  transition: 0.2s;

  &:checked {
    position: relative;
    border: none;
    background-color: ${({ theme }) => theme.colors.green};
  }

  &.checked::before {
    content: "";
    position: absolute;
    background-image: url(${check});
    width: 14px;
    height: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 300px) {
    font-size: 10px;
  }

  @media (min-height: 600px) and (min-width: 376px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-height: 750px) and (min-width: 630px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
