import React from "react";
import styled from "styled-components/macro";

const StyledDisplay = styled.div`
  height: 5rem;
  width: 100%;
  margin: auto;
  padding: 0.5rem;
  box-sizing: border-box;

  grid-column: 1/-1;

  font-size: 2rem;
  font-family: "Notable", sans-serif;

  background: #2e2e2e;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const StyledValue = styled.p`
  color: #fff;
  margin: 0;
`;

const PreviousValue = styled(StyledValue)`
  font-size: 1rem;
  color: #ffffff90;
`;
const CurrentValue = styled(StyledValue)``;

const Sum = styled(StyledValue)``;

export const Display = ({ currentValue, previousValue, sum }) => {
  return (
    <StyledDisplay>
      {sum === "" && (
        <>
          <PreviousValue>{previousValue}</PreviousValue>
          <CurrentValue>{currentValue}</CurrentValue>
        </>
      )}
      {sum !== "" && (
        <Sum>{isNaN(sum) ? "ERROR" : sum === Infinity ? "ERROR" : sum}</Sum>
      )}
      {console.log(sum)}
    </StyledDisplay>
  );
};
