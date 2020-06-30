import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  height: 4rem;
  width: ${(props) => props.width};
  grid-column: ${(props) => props.span || "span 1"};

  font-size: 2rem;
  font-family: "Notable", sans-serif;
  color: #2e2e2e;

  background: ${(props) => props.background || "#1c91ff50"};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.backgroundHover || "#1c91ff"};
    color: #fff;
    cursor: pointer;
  }
`;

const ButtonText = styled.p`
  margin: 0;
`;

export const Button = ({
  buttonText,
  width,
  span,
  background,
  backgroundHover,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundHover={backgroundHover}
      background={background}
      span={span}
      width={width}
    >
      <ButtonText>{buttonText}</ButtonText>
    </StyledButton>
  );
};
