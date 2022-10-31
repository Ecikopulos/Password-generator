import React, { useContext } from "react";
import ReactSlider from "react-slider";
import { SliderValue, Text, TextArea, Wrapper } from "./Slider.styles";
import { Context } from "../../assets/Context/Context";

const Slider = () => {
  const { currentValue, setCurrentValue } = useContext(Context);

  return (
    <Wrapper>
      <TextArea>
        <Text>Character Length</Text>
        <SliderValue>{currentValue}</SliderValue>
      </TextArea>
      <ReactSlider
        className="passLength"
        trackClassName="passLength-track"
        thumbClassName="passLength-thumb"
        defaultValue={10}
        min={1}
        max={20}
        onChange={(value) => setCurrentValue(value)}
      />
    </Wrapper>
  );
};

export default Slider;
