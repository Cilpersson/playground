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

export const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPrevoiusValue] = useState();
  const [previousValueOperand, setPrevoiusValueOperand] = useState();
  const [currentOperand, setCurrentOperand] = useState("");
  const [sum, setSum] = useState("");

  const operandValue = (operand) => {
    setPrevoiusValue(currentValue);
    setPrevoiusValueOperand(currentValue + operand);
    setCurrentValue(0);
    setCurrentOperand(operand);
  };

  const totalValue = () => {
    if (currentOperand === "*") {
      setSum(currentValue * previousValue);
    }

    if (currentOperand === "+") {
      setSum(currentValue + previousValue);
    }

    if (currentOperand === "/") {
      setSum(currentValue / previousValue);
    }

    if (currentOperand === "-") {
      setSum(currentValue - previousValue);
    }
  };

  return (
    <>
      <Grid>
        <Display
          sum={sum}
          currentValue={currentValue}
          previousValue={previousValueOperand}
        />
        <Button
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
        <Button
          onClick={() => setCurrentValue(7)}
          width="4rem"
          buttonText="7"
        />
        <Button
          onClick={() => setCurrentValue(8)}
          width="4rem"
          buttonText="8"
        />
        <Button
          onClick={() => setCurrentValue(9)}
          width="4rem"
          buttonText="9"
        />
        <Button
          onClick={() => operandValue("/")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="/"
        />
        <Button
          onClick={() => setCurrentValue(4)}
          width="4rem"
          buttonText="4"
        />
        <Button
          onClick={() => setCurrentValue(5)}
          width="4rem"
          buttonText="5"
        />
        <Button
          onClick={() => setCurrentValue(6)}
          width="4rem"
          buttonText="6"
        />
        <Button
          onClick={() => operandValue("+")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="+"
        />
        <Button
          onClick={() => setCurrentValue(1)}
          width="4rem"
          buttonText="1"
        />
        <Button
          onClick={() => setCurrentValue(2)}
          width="4rem"
          buttonText="2"
        />
        <Button
          onClick={() => setCurrentValue(3)}
          width="4rem"
          buttonText="3"
        />
        <Button
          onClick={() => operandValue("-")}
          backgroundHover="#15cf84"
          background="#15cf8450"
          width="4rem"
          buttonText="-"
        />
        <Button span="span 3" width="100%" buttonText="0" />
        <Button
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
    </>
  );
};

/*
 const setValue = (value) => {
    const temporaryValue = value;
    if (currentValue === 0 && value !== ".") {
      setCurrentValue(temporaryValue);
    } else if (typeof temporaryValue === "number") {
      setCurrentValue(currentValue.toString() + value.toString());
      console.log(currentValue);
    }
    // Add commas between numbers
    // if (currentValue.length % 3 === 0) {
    //   setCurrentValue(`${currentValue.toString()},`);
    // }
  };

  const setOperand = (operand) => {
    setCurrentOperand(operand);
    setPrevoiusValue(currentValue.toString() + operand);
    setCurrentValue(0);
  };

  const totalValue = (valueOne, valueTwo) => {
    setCurrentValue(+currentValue);

    if (currentOperand === "*") {
      console.log("kommer jag hit", valueOne, typeof valueTwo);

      // setSum(+valueOne * parseFloat(valueTwo));
      console.log(sum);
    }
  };
*/
