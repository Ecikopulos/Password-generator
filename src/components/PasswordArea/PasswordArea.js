import React, { useState } from "react";
import { Icon, PasswordText, PopUp, Wrapper } from "./PasswordArea.styles";

let time;

const PasswordArea = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);

    clearTimeout(time);

    time = setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const copyPasswordKey = async (e) => {
    if (e.key === " ") {
      await navigator.clipboard.writeText(password);
      setCopied(true);

      clearTimeout(time);

      time = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <Wrapper>
      <PasswordText>{password}</PasswordText>
      <Icon tabIndex="0" onClick={copyPassword} onKeyDown={copyPasswordKey} />
      <PopUp isCopied={copied}>Copied!</PopUp>
    </Wrapper>
  );
};

export default PasswordArea;
