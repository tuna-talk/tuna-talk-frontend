import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
// import { BsFillPersonPlusFill } from "react-icons/bs";
import Button from "./button/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HearderContainer>
      <Button
        bc="transparent"
        fs="25px"
        color="#868686"
        hoverC="#000"
        margin="10px 0px 10px 375px"
        padding="0px 0px 0px 55px"
        display="flex"
        onClick={() => {
          navigate("/friendAdd");
        }}
      >
        {/* <BsFillPersonPlusFill /> */}
      </Button>
    </HearderContainer>
  );
};

export default Header;

const HearderContainer = styled.div`
  display: flex;
`;
