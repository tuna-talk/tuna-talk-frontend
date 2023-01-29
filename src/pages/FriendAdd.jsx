import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Button from "../components/button/Button";
// import { BsSearch } from "react-icons/bs";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __addFriendThunk } from "../redux/modules/friendinfoSilce";
import AddData from "../components/AddData";

const FriendAdd = () => {
  // 검색ref, 검색성공하면 기본이미지를 서버에서 받자.

  const dispatch = useDispatch();
  const { friendinfo } = useSelector((state) => state.friendinfo);
  console.log("친구정보", friendinfo);
  const userEmail = useRef("");
  // console.log(userEmail);

  const [visible, setVisible] = useState(false);

  const findFriend = () => {
    dispatch(__addFriendThunk(friendinfo.userEmail));
    setVisible(true);
  };

  return (
    <Layout>
      <Navbar />
      <div style={{ padding: "60px 100px 0px 100px" }}>
        <Container>
          <BoxText>
            <h2>친구추가</h2>
            <h3>id로 추가하기</h3>
            <HorizonLine />
            <form onSubmit={findFriend}>
              <input
                ref={userEmail}
                type="text"
                placeholder="친구 카카오톡 ID"
              />
              <Button size="h" bc="#f70202" padding="0px 0px 20px 0px">
                검색
              </Button>
            </form>
            {visible && (
              <div>
                {friendinfo.map((props) => (
                  <AddData
                    key={props.userEmail}
                    userPic={props.userImage}
                    userName={props.userNickname}
                  />
                ))}
              </div>
            )}
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
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
