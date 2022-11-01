import React, { useState } from "react";
import { Title, Wrapper } from "./AppVisual.styles";
import PasswordArea from "../../components/PasswordArea/PasswordArea";
import GeneratePassArea from "../../components/GeneratePassArea/GeneratePassArea";
import { Context } from "../../assets/Context/Context";

const AppVisual = () => {
  const [generatedPass, setGeneratedPass] = useState("Generate!");
  return (
    <Context.Provider
      value={{
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
