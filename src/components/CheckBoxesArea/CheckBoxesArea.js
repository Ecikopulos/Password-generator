import React, { useContext } from "react";
import { Wrapper } from "./CheckBoxesArea.styles";
import Checkbox from "../Checkbox/Checkbox";
import { Context } from "../../assets/Context/Context";

const CheckBoxesArea = ({ setPower }) => {
  const {
    upperValue,
    setUpperValue,
    lowerValue,
    setLowerValue,
    numberValue,
    setNumberValue,
    symbolValue,
    setSymbolValue,
  } = useContext(Context);

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
