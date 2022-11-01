import React from "react";
import { Wrapper } from "./CheckBoxesArea.styles";
import Checkbox from "../Checkbox/Checkbox";

const CheckBoxesArea = ({
  setPower,
  lowerValue,
  setLowerValue,
  upperValue,
  setUpperValue,
  numberValue,
  setNumberValue,
  symbolValue,
  setSymbolValue,
}) => {
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        text="include uppercase letters"
        value={upperValue}
        setValue={setUpperValue}
        setPower={setPower}
      />
      <Checkbox
        type="checkbox"
        text="include lowercase letters"
        value={lowerValue}
        setValue={setLowerValue}
        setPower={setPower}
      />
      <Checkbox
        type="checkbox"
        text="include numbers"
        value={numberValue}
        setValue={setNumberValue}
        setPower={setPower}
      />
      <Checkbox
        type="checkbox"
        text="include symbols"
        value={symbolValue}
        setValue={setSymbolValue}
        setPower={setPower}
      />
    </Wrapper>
  );
};

export default CheckBoxesArea;
