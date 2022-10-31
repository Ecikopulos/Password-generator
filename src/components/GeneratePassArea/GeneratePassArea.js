import React, { useState } from "react";
import { Wrapper } from "./GeneratePassArea.styles";
import Slider from "../Slider/Slider";
import CheckBoxesArea from "../CheckBoxesArea/CheckBoxesArea";
import Button from "../Button/Button";
import PasswordStrengthArea from "../PasswordStrengthArea/PasswordStrengthArea";

const GeneratePassArea = () => {
  const [passwordPower, setPasswordPower] = useState(0);
  return (
    <Wrapper>
      <Slider />
      <CheckBoxesArea setPower={setPasswordPower} />
      <PasswordStrengthArea power={passwordPower} />
      <Button />
    </Wrapper>
  );
};

export default GeneratePassArea;
