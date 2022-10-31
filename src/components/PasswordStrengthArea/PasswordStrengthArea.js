import React from "react";
import { Bar, StrengthWrapper, Wrapper } from "./PasswordStrengthArea.styles";

const PasswordStrengthArea = ({ power }) => {
  return (
    <Wrapper>
      <p className="grey">strength</p>
      <StrengthWrapper>
        <p>
          {power === 0
            ? "none"
            : power === 1
            ? "weak"
            : power === 2
            ? "medium"
            : power === 3
            ? "strong"
            : "power!"}
        </p>
        {power === 0 ? (
          <Bar />
        ) : power === 1 ? (
          <Bar className="weak" />
        ) : power === 2 ? (
          <Bar className="medium" />
        ) : power === 3 ? (
          <Bar className="strong" />
        ) : (
          <Bar className="power" />
        )}

        {power <= 1 ? (
          <Bar />
        ) : power === 2 ? (
          <Bar className="medium" />
        ) : power === 3 ? (
          <Bar className="strong" />
        ) : (
          <Bar className="power" />
        )}

        {power <= 2 ? (
          <Bar />
        ) : power === 3 ? (
          <Bar className="strong" />
        ) : (
          <Bar className="power" />
        )}

        {power <= 3 ? <Bar /> : <Bar className="power" />}
      </StrengthWrapper>
    </Wrapper>
  );
};

export default PasswordStrengthArea;
