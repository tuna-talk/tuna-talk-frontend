import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import { React, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { getChatRoom, getMessage } from "../redux/modules/socketSlice";
import ChatRoom from "../components/ChatRoom";
// import {
//   addMessage,
//   getMessage,
//   getChatRoom,
// } from "../redux/modules/socketSlice";

const Chat = () => {
  const myEmail = localStorage.getItem("userEmail");
  const chatRoomId = useSelector((state) => state.friendinfo);
  console.log(chatRoomId);
  const chatRef = useRef("");

  const navigate = useNavigate();
  const { friendNickname } = useParams();
  const dispatch = useDispatch();
  // console.log(friendNickname);

  const [message, setMessage] = useState("");

  const sock = new SockJS("/ws-stomp");
  const client = Stomp.over(sock);

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  // const myEmail = localStorage.getItem("userEmail");
  const me = localStorage.getItem("userNickname");
  console.log(me);
  const you = useSelector((state) => state.friendinfo.friendNickname);
  console.log("you", you);
  // const users = useSelector((state) => state.chat.users);
  // const chatRoom = useSelector((state) => state.chat.chatRoom);

  // 방정보 가져오기
  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  //이전 채팅 내용 가져오기
  useEffect(() => {
    dispatch(getMessage());
  }, []);

  // 채팅 엔터키/shif+enter 막기
  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      window.scrollTo(0, 0);
      // sendMessage();
    }
  };

  useEffect(() => {
    // 소켓 연결
    client.connect(config, () => {
      // 채팅방 구독
      client.subscribe(
        `/sub/chats/${chatRoomId}`,
        (res) => {
          let newMessage = JSON.parse(res.body);
          // dispatch(subMessage(newMessage));
        },
        config
      );
    });
  }, []);

  // 채팅 전송
  const myChat = () => {
    const message = chatRef.current.value;
    if (message === "") {
      return;
    }
    const masData = {
      chatRoomId: 1,
      userEmail: myEmail,
      message: message,
    };
    client.send(`/pub/chats`, JSON.stringify(masData));
    chatRef.current.value = null;
  };

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
          {/* <ChatName>{room[0]?.name}</ChatName> */}
          <h4>{friendNickname}</h4>
        </StchatName>

        <Stchatlining>
          {/* {chatList.map((chat, idx) => {
            if (chat.memberId === users.memberId) {
              return (
                <div>
                  key={idx}
                  <div>
                    <div>{chat.message}</div>
                  </div>
                </div>
              );
            }
            if (chat.memberId != users.memberId) {
              return (
                <div>
                  <div>
                    <div>나는 상대방</div>
                    <div>{chat.message}</div>
                  </div>
                </div>
              );
            }
          })} */}
        </Stchatlining>
        <Footer>
          <textarea type="text" ref={chatRef} onKeyDown={handleEnterPress} />
          <Button onClick={myChat}>전송</Button>
        </Footer>
      </Container>
    </Layout>
  );
};

export default Chat;
const Container = styled.div`
  width: 600px;
  height: 900px;
  border-radius: 10px;
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

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  margin: auto;
  margin-top: 20px;
  textarea {
    width: 495px;
    height: 170px;
    border-radius: 10px;
  }
`;
