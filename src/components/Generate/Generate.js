import React, { useContext } from "react";
import { Wrapper, Text, Icon } from "./Generate.styles";
import { Context } from "../../assets/Context/Context";

const Allowed = {
  uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowers: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890",
  symbols: "!@#$%^&*()_+~`|}{[]\\:;?><,./-=",
};

const Generate = ({
  currentValue,
  upperValue,
  lowerValue,
  numberValue,
  symbolValue,
}) => {
  const { setGeneratedPass } = useContext(Context);

  const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const handleGeneratePass = (
    currentValue,
    upperValue,
    lowerValue,
    numberValue,
    symbolValue
  ) => {
    let pass = "";
    let newAllowed = { ...Allowed };

    if (!upperValue) {
      delete newAllowed.uppers;
    }
    if (!lowerValue) {
      delete newAllowed.lowers;
    }
    if (!numberValue) {
      delete newAllowed.numbers;
    }
    if (!symbolValue) {
      delete newAllowed.symbols;
    }

    for (let i = 0; i < currentValue; i++) {
      pass += getRandomCharFromString(Object.values(newAllowed).join(""));
    }
    return setGeneratedPass(pass);
  };

  return (
    <Wrapper
      onClick={() =>
        handleGeneratePass(
          currentValue,
          upperValue,
          lowerValue,
          numberValue,
          symbolValue
        )
      }
    >
      <Text>generate</Text>
      <Icon />
    </Wrapper>
  );
};

export default Generate;
