import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Button from "../components/button/Button";
// import { BsSearch } from "react-icons/bs";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addFriendThunk } from "../redux/modules/friendinfoSilce";

const FriendAdd = () => {
  // 검색ref, 검색성공하면 기본이미지를 서버에서 받자.

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { friendinfo } = useSelector((state) => state.friendinfo);
  const userEmail = useRef("");
  console.log(userEmail);
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
              onSubmit={() => {
                dispatch(__addFriendThunk());
                navigate("/Home");
              }}
            >
              <input
                ref={userEmail}
                type="text"
                placeholder="친구 카카오톡 ID"
              />
              <Button size="h" bc="#f70202">
                검색
              </Button>
            </form>
            <div>
              {friendinfo.map((props) => (
                <addData />
              ))}
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
