import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;

  .passLength {
    max-width: 100%;
    margin-inline: auto;
  }

  .passLength-track {
    /* Top value to align your track to the center of your thumb */
    top: 10px;
    /* thickness of the track */
    height: 8px;
    /* default color of your track */
    background: ${({ theme }) => theme.colors.black};
  }

  .passLength-track.passLength-track-0 {
    /* color of the track before the thumb */
    background: ${({ theme }) => theme.colors.green};
  }

  .passLength-thumb {
    cursor: pointer;
    /*color for the thumb */
    background: ${({ theme }) => theme.colors.white};
    /* shape of the thumb: circle */
    width: 28px;
    height: 28px;
    border-radius: 100%;
    /* remove default outline when selected */
    outline: none;
  }

  .passLength-thumb:hover {
    background: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  line-height: 31px;
  letter-spacing: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
`;

export const SliderValue = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  line-height: 31px;
  letter-spacing: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.green};
`;
