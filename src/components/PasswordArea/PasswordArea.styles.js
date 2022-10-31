import styled from "styled-components";
import copy from "../../assets/icons/icon-copy.svg";

export const Wrapper = styled.div`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 90%;
  max-width: 543px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px 22px;

  @media (max-width: 300px) {
    padding-inline: 5px;
  }
  @media (min-height: 750px) and (min-width: 630px) {
    height: 80px;
  }
`;

export const PasswordText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};

  @media (min-height: 750px) and (min-width: 630px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Icon = styled.div`
  background-image: url(${copy});
  background-repeat: no-repeat;
  width: 21px;
  height: 24px;
  cursor: pointer;
`;

export const PopUp = styled.p`
  display: ${({ isCopied }) => (isCopied ? "block" : "none")};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
`;
