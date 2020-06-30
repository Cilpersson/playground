import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  height: 4rem;
  width: ${(props) => props.width};
  grid-column: ${(props) => props.span || "span 1"};

  font-size: 2rem;
  font-family: "Notable", sans-serif;

  color: #fff;
  background: #1c91ff;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  &:hover {
    background: #1c91ff50;
    color: #2e2e2e;
    cursor: pointer;
  }
`;

const ButtonText = styled.p`
  margin: 0;
`;

export const Button = ({ buttonText, width, span }) => {
  return (
    <StyledButton span={span} width={width}>
      <ButtonText>{buttonText}</ButtonText>
    </StyledButton>
  );
};
