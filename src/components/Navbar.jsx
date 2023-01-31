import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Button
        fs="30px"
        color="#c0c0c0"
        bc="transparent"
        hoverC="#868686"
        activeC="#000"
        margin="30px 0px 10px 0px"
        onClick={() => {
          navigate("/friendsList");
        }}
      >
        <img src={process.env.PUBLIC_URL + "/basic.png"} alt="로고" />
      </Button>
      <Button
        fs="25px"
        color="#c0c0c0"
        bc="transparent"
        hoverC="#868686"
        activeC="#000"
        padding="20px 0px 20px 0px"
        onClick={() => {
          navigate("/chatList");
        }}
      >
        <img src={process.env.PUBLIC_URL + "/chat.png"} alt="로고" />
      </Button>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  height: 900px;
  width: 100px;
  box-shadow: 2px 2px #cacaca;
  float: left;
  img {
    margin: auto;
    width: 50px;
    height: 50px;
  }
`;
