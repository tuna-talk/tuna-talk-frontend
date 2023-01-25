import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ value, ...restProps }) => {
  return <StyledInput {...restProps} onChage value={value} type="text" />;
};

export default Input;

const StyledInput = styled.Input`
  border: 1px solid #333333;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  &:focus-within {
    box-shadow: 0 0 0 1px #000;
  }
`;
