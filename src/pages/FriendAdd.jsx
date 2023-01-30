import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Button from "../components/button/Button";
// import { BsSearch } from "react-icons/bs";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { __searchFriendThunk } from "../redux/modules/friendInfoSlice";
import AddData from "../components/AddData";

const FriendAdd = () => {
  // 검색ref, 검색성공하면 기본이미지를 서버에서 받자.

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const email = useRef();

  return (
    <Layout>
      <Navbar />
      <div style={{ padding: "60px 100px 0px 100px" }}>
        <Container>
          <BoxText>
            <h2>친구추가</h2>
            <h3>id로 추가하기</h3>
            <HorizonLine />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const userEmail = email.current.value;
                console.log(userEmail);
                dispatch(__searchFriendThunk(userEmail));
                setVisible(true);
              }}
            >
              <input type="text" ref={email} placeholder="친구 카카오톡 ID" />
              <Button size="h" bc="#f70202" padding="0px 0px 20px 0px">
                검색
              </Button>
            </form>
          </BoxText>
          {visible && <AddData />}
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
  div {
    display: flex;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  width: 300px;
  height: 300px;
`;
