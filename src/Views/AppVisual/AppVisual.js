import React, { useState } from "react";
import { Title, Wrapper } from "./AppVisual.styles";
import PasswordArea from "../../components/PasswordArea/PasswordArea";
import GeneratePassArea from "../../components/GeneratePassArea/GeneratePassArea";
import { Context } from "../../assets/Context/Context";

const AppVisual = () => {
  const [currentValue, setCurrentValue] = useState(10);
  const [upperValue, setUpperValue] = useState(false);
  const [lowerValue, setLowerValue] = useState(false);
  const [numberValue, setNumberValue] = useState(false);
  const [symbolValue, setSymbolValue] = useState(false);
  const [generatedPass, setGeneratedPass] = useState("Generate!");
  return (
    <Context.Provider
      value={{
        currentValue,
        setCurrentValue,
        upperValue,
        setUpperValue,
        lowerValue,
        setLowerValue,
        numberValue,
        setNumberValue,
        symbolValue,
        setSymbolValue,
        setGeneratedPass,
      }}
    >
      <Wrapper>
        <Title>password generator</Title>
        <PasswordArea password={generatedPass} />
        <GeneratePassArea />
      </Wrapper>
    </Context.Provider>
  );
};

export default AppVisual;
