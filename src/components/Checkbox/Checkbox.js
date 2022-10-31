import React, { useState } from "react";
import { Label, StyledCheckbox, Text } from "./CheckBox.styles";

const Checkbox = ({ type, text = "default", value, setValue, setPower }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
    setValue((prev) => !prev);
    if (value) {
      setPower((prev) => prev - 1);
    } else {
      setPower((prev) => prev + 1);
    }
  };

  return (
    <Label>
      <StyledCheckbox
        className={isChecked ? "checked" : ""}
        type={type}
        checked={isChecked}
        value={value}
        setValue={setValue}
        onChange={() => handleCheck()}
      />
      <Text>{text}</Text>
    </Label>
  );
};

export default Checkbox;
