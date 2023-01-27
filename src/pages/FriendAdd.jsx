import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Button from "../components/button/Button";
import { BsSearch } from "react-icons/bs";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";

const FriendAdd = () => {
  // 검색ref, 검색성공하면 기본이미지를 서버에서 받자.
  const serchRef = useRef("");

  return (
    <Layout>
      <Navbar />
      <div style={{ padding: "60px 100px 0px 100px" }}>
        <Container>
          <BoxText>
            <h2>친구추가</h2>
            <h3>id로 추가하기</h3>
            <HorizonLine />
            <div>
              <input
                ref={serchRef}
                type="text"
                placeholder="친구 카카오톡 ID"
              />
              <Button
                size="s"
                bc="transparent"
                hoverC="#000"
                padding="5px 0px 0px 0px"
                // onClick={}
              >
                <BsSearch />
              </Button>
            </div>
            <div>
              <ViewImg>
                <img src />
              </ViewImg>
            </div>
            <div>
              <h4>유저이름</h4>
            </div>
            <div>
              <Button
                size="m"
                bc="#fff"
                hoverC="#000"
                br="10px"
                margin="25px 0px 0px 240px"
                // onClick={}
              >
                추가하기
              </Button>
            </div>
          </BoxText>
        </Container>
      </div>
    </Layout>
  );
};

export default FriendAdd;
const Container = styled.div`
  width: 500px;
  height: 842px;
  background-color: #c2c1c1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h3 {
    padding-right: 160px;
  }
  h4 {
    align-items: center;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  width: 300px;
  height: 500px;
`;

const ViewImg = styled.div`
  margin-top: 30px;
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
