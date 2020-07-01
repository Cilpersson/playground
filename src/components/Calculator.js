import React, { useState } from "react";
import styled from "styled-components/macro";
import { Button } from "./Button";
import { Display } from "./Display";

const Grid = styled.div`
  display: grid;
  gap: 0.2rem;

  width: 16rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPrevoiusValue] = useState();
  const [previousValueOperand, setPrevoiusValueOperand] = useState();
  const [currentOperand, setCurrentOperand] = useState("");
  const [sum, setSum] = useState("");

  const operandValue = (operand) => {
    setSum("");
    if (previousValue && operand === "+") {
      // setPrevoiusValue(currentValue + previousValue);
      // setPrevoiusValueOperand(previousValue + operand);

      setSum(+currentValue + +previousValue);
      setCurrentValue(+currentValue + +previousValue);
    }

    if (previousValue && operand === "-") {
      setSum(+previousValue - +currentValue);
      setCurrentValue(+previousValue - +currentValue);
    }

    if (previousValue && operand === "*") {
      setSum(+currentValue * +previousValue);
      setCurrentValue(+currentValue * +previousValue);
    }

    if (previousValue && operand === "/") {
      setSum(+previousValue / +currentValue);
      setCurrentValue(+previousValue / +currentValue);
    }

    setPrevoiusValue(currentValue);
    setPrevoiusValueOperand(currentValue + operand);
    setCurrentValue(0);
    setCurrentOperand(operand);
  };

  const totalValue = () => {
    if (currentOperand === "*") {
      setSum(+currentValue * +previousValue);
      setCurrentValue(+currentValue * +previousValue);
    }

    if (currentOperand === "+") {
      setSum(+currentValue + +previousValue);
      setCurrentValue(+currentValue + +previousValue);
    }

    if (currentOperand === "/") {
      setSum(+previousValue / +currentValue);
      setCurrentValue(+previousValue / +currentValue);
    }

    if (currentOperand === "-") {
      setSum(+previousValue - +currentValue);
      setCurrentValue(+previousValue - +currentValue);
    }
  };

  const numberToString = (value) => {
    if (value === 0 && currentValue.toString() === "0") {
      setCurrentValue(0);
    } else if (value !== 0 && currentValue.toString() === "0") {
      setCurrentValue(value);
    } else if (sum !== "") {
      setCurrentValue(sum);
      setSum("");
    } else {
      setCurrentValue(currentValue.toString() + value.toString());
    }
  };

  const handleFloat = () => {
    if (!currentValue.toString().includes(".")) {
      setCurrentValue(currentValue.toString() + ".");
    }
  };

  const allClear = () => {
    setCurrentValue(0);
    setPrevoiusValue();
    setPrevoiusValueOperand();
    setCurrentOperand("");
    setSum("");
  };

  return (
    <Wrapper>
      <Grid>
        <Display
          sum={sum}
          currentValue={currentValue}
          previousValue={previousValueOperand}
        />
        <Button
          onClick={() => allClear()}
          backgroundHover="#15cf84"
          background="#15cf8450"
          span="span 3"
          width="100%"
          buttonText="AC"
        />
        <Button
          onClick={() => operandValue("*")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="*"
        />
        <Button onClick={() => numberToString(7)} width="4rem" buttonText="7" />
        <Button onClick={() => numberToString(8)} width="4rem" buttonText="8" />
        <Button onClick={() => numberToString(9)} width="4rem" buttonText="9" />
        <Button
          onClick={() => operandValue("/")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="/"
        />
        <Button onClick={() => numberToString(4)} width="4rem" buttonText="4" />
        <Button onClick={() => numberToString(5)} width="4rem" buttonText="5" />
        <Button onClick={() => numberToString(6)} width="4rem" buttonText="6" />
        <Button
          onClick={() => operandValue("+")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="+"
        />
        <Button onClick={() => numberToString(1)} width="4rem" buttonText="1" />
        <Button onClick={() => numberToString(2)} width="4rem" buttonText="2" />
        <Button onClick={() => numberToString(3)} width="4rem" buttonText="3" />
        <Button
          onClick={() => operandValue("-")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="-"
        />
        <Button
          onClick={() => numberToString(0)}
          span="span 3"
          width="100%"
          buttonText="0"
        />
        <Button
          onClick={() => handleFloat()}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="."
        />
        <Button
          onClick={() => totalValue()}
          backgroundHover="#15cf84"
          background="#15cf8450"
          span="span 4"
          width="100%"
          buttonText="="
        />
      </Grid>
    </Wrapper>
  );
};
