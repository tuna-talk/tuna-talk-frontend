import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Layout from "../components/Layout";
import HorizonLine from "../components/horizontal/HorizonLine";

const ChatList = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <div style={{ padding: "0px 100px 0px 100px" }}>
        <Container>
          <h2>채팅</h2>
          <input type="text" placeholder="채팅방 이름, 참여자 검색" size={69} />
          <HorizonLine />
          <BoxText>
            <h2>채팅목록 get</h2>
          </BoxText>
        </Container>
      </div>
    </Layout>
  );
};

export default ChatList;
const Container = styled.div`
  width: 500px;
  height: 700px;
  background-color: #c2c1c1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    margin: 15px 0px 15px 0px;
  }
  input {
    margin: 0px 0px 10px 0px;
    padding: 10px 4px 10px 3px;
    opacity: 0.3;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;
`;

const ViewImg = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid red;
  display: flex;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 10%;
    border-radius: 5%;
    position: absolute;
    object-fit: cover;
  }
`;

const Stmy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 150px 0px 0px;
  border: 3px solid red;
  hr {
    border-bottom: 1px solid #000;
  }
`;
