import React, { useState } from "react";
import { Wrapper } from "./GeneratePassArea.styles";
import Slider from "../Slider/Slider";
import CheckBoxesArea from "../CheckBoxesArea/CheckBoxesArea";
import Generate from "../Generate/Generate";
import PasswordStrengthArea from "../PasswordStrengthArea/PasswordStrengthArea";

const GeneratePassArea = () => {
  const [passwordPower, setPasswordPower] = useState(0);
  const [currentValue, setCurrentValue] = useState(10);
  const [upperValue, setUpperValue] = useState(false);
  const [lowerValue, setLowerValue] = useState(false);
  const [numberValue, setNumberValue] = useState(false);
  const [symbolValue, setSymbolValue] = useState(false);
  return (
    <Wrapper>
      <Slider currentValue={currentValue} setCurrentValue={setCurrentValue} />
      <CheckBoxesArea
        setPower={setPasswordPower}
        upperValue={upperValue}
        setUpperValue={setUpperValue}
        lowerValue={lowerValue}
        setLowerValue={setLowerValue}
        numberValue={numberValue}
        setNumberValue={setNumberValue}
        symbolValue={symbolValue}
        setSymbolValue={setSymbolValue}
      />
      <PasswordStrengthArea power={passwordPower} />
      <Generate
        upperValue={upperValue}
        lowerValue={lowerValue}
        numberValue={numberValue}
        symbolValue={symbolValue}
        currentValue={currentValue}
      />
    </Wrapper>
  );
};

export default GeneratePassArea;
