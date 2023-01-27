import React from "react";
import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
// import { IoIosArrowBack } from "react-icons/io";

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
            {/* <IoIosArrowBack /> */}
          </Button>
          <h4>참여자 이름</h4>
        </StchatName>
        <HorizonLine />
        <Stchatlining>채팅이 보여지는곳</Stchatlining>
        <Stchatbox>
          <textarea />
        </Stchatbox>
      </Container>
    </Layout>
  );
};

export default Chat;
const Container = styled.div`
  width: 600px;
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
  justify-content: flex-start;
  margin: 15px 210px 0px 0px;

  h4 {
    margin: 0px 0px 0px 100px;
  }
`;

const Stchatlining = styled.div`
  width: 500px;
  height: 655px;
`;

const Stchatbox = styled.div`
  display: flex;
  width: 600px;
  height: 150px;

  textarea {
    width: 600px;
    height: 150px;
  }
`;
