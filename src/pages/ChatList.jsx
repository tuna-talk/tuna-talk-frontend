import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import HorizonLine from "../components/horizontal/HorizonLine";
import { useDispatch, useSelector } from "react-redux";
import { __getChatListThunk } from "../redux/modules/chatSlice";
import { useNavigate } from "react-router-dom";
// import ChatRoom from "../components/ChatRoom";

const ChatList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { chatcollect, error } = useSelector((state) => state.chatcollect);

  useEffect(() => {
    dispatch(__getChatListThunk());
  }, [dispatch]);

  if (error) return <div>알수 없는 에러가 발생했습니다.</div>;

  return (
    <Layout>
      <Navbar />
      <Header />
      <div style={{ padding: "0px 100px 0px 100px" }}>
        <Container>
          <h2>채팅</h2>
          <input type="text" placeholder="채팅방 이름, 참여자 검색" />
          <HorizonLine />
          <BoxText>
            {/* {chatcollect.map((props) => (
              <ChatRoom
                key={props.chatRoomId}
                id={props.chatRoomId}
                roomName={props.roomName}
                message={props.lastMessage}
              />
            ))} */}
          </BoxText>
        </Container>
      </div>
    </Layout>
  );
};

export default ChatList;
const Container = styled.div`
  width: 500px;
  height: 842px;
  background-color: #c2c1c1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    margin: 15px 0px 15px 0px;
  }
  input {
    width: 490px;
    margin: 0px 0px 0px 0px;
    padding: 10px 4px 10px 3px;
    opacity: 0.3;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;
  h4 {
    padding: 10px;
    margin: auto;
  }
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
