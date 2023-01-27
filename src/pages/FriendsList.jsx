import React from "react";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";

const FriendsList = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <div style={{ padding: "0px 100px 0px 100px" }}>
        <Container>
          <h2>친구</h2>
          <BoxText>
            <Stmy>
              <ViewImg>
                <img src />
              </ViewImg>
              <h4>유저이름</h4>
            </Stmy>
            <HorizonLine />
            <div>친구 추가 목록</div>
          </BoxText>
        </Container>
      </div>
    </Layout>
  );
};

export default FriendsList;
const Container = styled.div`
  width: 500px;
  height: 700px;
  background-color: #c2c1c1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    margin: 0px 0px 0px 0px;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;
  margin: 0px 0px 0px 10px;
`;

const ViewImg = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid blueviolet;
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
  margin: 10px 350px 0px 0px;
  border: 3px solid red;
`;
