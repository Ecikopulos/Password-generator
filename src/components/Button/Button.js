import React, { useContext } from "react";
import { Wrapper, Text, Icon } from "./Button.styles";
import { Context } from "../../assets/Context/Context";

const Allowed = {
  uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowers: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890",
  symbols: "!@#$%^&*()_+~`|}{[]\\:;?><,./-=",
};

const Button = () => {
  const {
    currentValue,
    upperValue,
    lowerValue,
    numberValue,
    symbolValue,
    setGeneratedPass,
  } = useContext(Context);

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

    if (upperValue && lowerValue && numberValue && symbolValue) {
      console.log("generate pass from all ");
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(Allowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (upperValue && lowerValue && numberValue) {
      console.log("generate pass from upper, lower and numbers ");
      delete newAllowed.symbols;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (upperValue && lowerValue && symbolValue) {
      console.log("generate pass from upper, lower and symbols ");
      delete newAllowed.numbers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (upperValue && numberValue && symbolValue) {
      console.log("generate pass from upper, numbers and symbols ");
      delete newAllowed.lowers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (lowerValue && numberValue && symbolValue) {
      console.log("generate pass from lowers, numbers and symbols ");
      delete newAllowed.uppers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (lowerValue && upperValue) {
      console.log("generate pass from lowers and uppers");
      delete newAllowed.numbers;
      delete newAllowed.symbols;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (lowerValue && numberValue) {
      console.log("generate pass from lowers and numbers");
      delete newAllowed.uppers;
      delete newAllowed.symbols;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (lowerValue && symbolValue) {
      console.log("generate pass from lowers and symbols");
      delete newAllowed.uppers;
      delete newAllowed.numbers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (upperValue && numberValue) {
      console.log("generate pass from uppers and numbers");
      delete newAllowed.lowers;
      delete newAllowed.symbols;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (upperValue && symbolValue) {
      console.log("generate pass from uppers and symbols");
      delete newAllowed.lowers;
      delete newAllowed.numbers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (numberValue && symbolValue) {
      console.log("generate pass from numbers and symbols");
      delete newAllowed.lowers;
      delete newAllowed.uppers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (upperValue) {
      console.log("generate pass from uppers");
      delete newAllowed.lowers;
      delete newAllowed.symbols;
      delete newAllowed.numbers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (lowerValue) {
      console.log("generate pass from lowers");
      delete newAllowed.uppers;
      delete newAllowed.symbols;
      delete newAllowed.numbers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (numberValue) {
      console.log("generate pass from numbers");
      delete newAllowed.lowers;
      delete newAllowed.symbols;
      delete newAllowed.uppers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    if (symbolValue) {
      console.log("generate pass from symbols");
      delete newAllowed.lowers;
      delete newAllowed.uppers;
      delete newAllowed.numbers;
      for (let i = 0; i < currentValue; i++) {
        pass += getRandomCharFromString(Object.values(newAllowed).join(""));
      }
      return setGeneratedPass(pass);
    }

    return setGeneratedPass("Check Something");
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

export default Button;
