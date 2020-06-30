import React from "react";
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
  return (
    <>
      <Grid>
        <Display />
        <Button span="span 2" width="100%" buttonText="CA" />
        <Button width="4rem" buttonText="*" />
        <Button width="4rem" buttonText="/" />
        <Button width="4rem" buttonText="7" />
        <Button width="4rem" buttonText="8" />
        <Button width="4rem" buttonText="9" />
        <Button width="4rem" buttonText="+" />
        <Button width="4rem" buttonText="4" />
        <Button width="4rem" buttonText="5" />
        <Button width="4rem" buttonText="6" />
        <Button width="4rem" buttonText="-" />
        <Button width="4rem" buttonText="1" />
        <Button width="4rem" buttonText="2" />
        <Button width="4rem" buttonText="3" />
        <Button width="4rem" buttonText="." />
        <Button span="span 2" width="100%" buttonText="0" />

        <Button span="span 2" width="100%" buttonText="=" />
      </Grid>
    </>
  );
};
