import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { BsFillChatFill } from "react-icons/bs";
// import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Fbutton
        onClick={() => {
          navigate("/friendsList");
        }}
      >
        {/* <BsFillChatFill /> */}
      </Fbutton>
      <Cbutton
        onClick={() => {
          navigate("/chatList");
        }}
      >
        {/* <BsFillPersonFill /> */}
      </Cbutton>
    </NavContainer>
  );
};

export default Navbar;

const Fbutton = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-top: 30px;
  margin-bottom: 10px;
  &:hover {
    color: #868686;
  }
  &:active {
    color: #000;
  }
`;
const Cbutton = styled.button`
  font-size: 23px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
  &:hover {
    color: #868686;
  }
  &:active {
    color: #000 !important;
  }
`;
const Lbutton = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
  &:hover {
    color: #868686;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  height: 100vh;
  width: 100px;
  box-shadow: 2px 2px 0px 0px #cacaca;
`;
