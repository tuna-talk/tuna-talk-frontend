import React from "react";
import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Chat = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Container>
        <StchatName>
          <Button
            fs="30px"
            color="#000"
            bc="transparent"
            hoverC="#868686"
            onClick={() => {
              navigate("/chatList");
            }}
          >
            <IoIosArrowBack />
          </Button>
          <h4>참여자 이름</h4>
        </StchatName>
        <HorizonLine />
        <div>채팅공방이 보여지는곳</div>
        <HorizonLine />
        <div>
          <input size={69} />
        </div>
      </Container>
    </Layout>
  );
};

export default Chat;
const Container = styled.div`
  width: 500px;
  height: 900px;
  background-color: #c2c1c1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`;

const StchatName = styled.div`
  display: flex;
  align-items: center;

  Button {
    display: flex;
    align-items: center;
    float: left;
  }

  h4 {
    display: flex;
    float: center;
  }
`;
