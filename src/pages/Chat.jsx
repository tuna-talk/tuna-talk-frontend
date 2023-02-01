import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import { React, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {
  getChatRoom,
  getMessage,
  subMessage,
} from "../redux/modules/socketSlice";

// import {
//   addMessage,
//   getMessage,
//   getChatRoom,
// } from "../redux/modules/socketSlice";

const Chat = () => {
  const myEmail = localStorage.getItem("userEmail");
  const Myname = localStorage.getItem("userNickname");
  const chatRef = useRef("");

  const navigate = useNavigate();
  const { chatRoomId } = useParams();
  const dispatch = useDispatch();
  console.log(chatRoomId);

  const [message, setMessage] = useState("");

  const sock = new SockJS("https://iamhyunjun.shop/ws-stomp");
  const client = Stomp.over(sock);

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  const { chatcollect } = useSelector((state) => state.chatcollect);
  console.log(chatcollect);
  const { messages } = useSelector((state) => state.messages);

  // const users = useSelector((state) => state.chat.users);
  // const chatRoom = useSelector((state) => state.chat.chatRoom);

  // 방정보 가져오기
  // useEffect(() => {
  //   dispatch(getChatRoom());
  // }, []);

  // 이전 채팅 내용 가져오기
  // useEffect(() => {
  //   dispatch(getMessage());
  // }, []);

  // 채팅 엔터키/shif+enter 막기
  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      window.scrollTo(0, 0);
      // sendMessage();
    }
  };

  useEffect(() => {
    // 소켓 연결
    console.log(chatcollect.chatRoomId);
    if (chatcollect.chatRoomId) {
      console.log(chatcollect.chatRoomId);
      try {
        client.connect(
          {},
          () => {
            console.log(chatcollect.chatRoomId);
            // 채팅방 구독
            client.subscribe(`/sub/chats/${chatcollect.chatRoomId}`, (res) => {
              console.log(res.body);
              const receive = JSON.parse(res.body);
              console.log(receive);
              dispatch(subMessage(receive));
            });
          },
          {}
        );
      } catch (e) {
        console.log(e);
      }
    }
  }, [chatcollect]);

  // 채팅 전송
  const myChat = () => {
    const message = chatRef.current.value;
    if (message === "") {
      return;
    }
    client.send(
      `/pub/chats`,
      {},
      JSON.stringify({
        chatRoomId: chatcollect.chatRoomId,
        userEmail: myEmail,
        message: message,
      })
    );
    chatRef.current.value = null;
  };
  console.log(9999, messages);

  // const chatlog = messages.map((chating) => (
  //   <div>
  //     <img src={process.env.PUBLIC_URL + "/basic.png"} alt="로고" />
  //     <span>{chating.userNickname}</span>
  //     <span>{chating.message}</span>
  //   </div>
  // ));

  console.log(987, Myname);
  // console.log(789, userNickname);

  const scrollRef = useRef();
  console.log(scrollRef);
  useEffect(() => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [messages]);

  return (
    <Layout>
      <Container>
        <StchatName>
          <Button
            fs="30px"
            color="#000"
            bc="transparent"
            hoverC="#fff"
            onClick={() => {
              navigate("/chatList");
            }}
          />
        </StchatName>

        <Down>
          <Chatdown>
            <div ref={scrollRef}>
              {Myname &&
                messages.map((chating) =>
                  chating.userNickname === Myname ? (
                    <SendMessage>
                      <div>
                        <span>{chating.message}</span>
                        <img
                          src={process.env.PUBLIC_URL + "/basic.png"}
                          alt="로고"
                        />
                      </div>
                    </SendMessage>
                  ) : (
                    <ReceivedMessage>
                      <div>
                        <img
                          src={process.env.PUBLIC_URL + "/basic.png"}
                          alt="로고"
                        />
                        <Dou>
                          <h4>{chating.userNickname}님</h4>
                          <span>{chating.message}</span>
                        </Dou>
                      </div>
                    </ReceivedMessage>
                  )
                )}
            </div>
          </Chatdown>
        </Down>

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

const Dou = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 10px;
  h4 {
    margin-top: 10px;
  }
`;

const Down = styled.div`
  /* width: 100%; */
  /* overflow-y: hidden; */
  /* height: 100%; */
  /* padding-bottom: 20px; */
`;

const Chatdown = styled.div`
  /* background: #fff; */
  /* width: 100%; */
  /* padding: 20px 25px; */
  /* overflow-y: scroll; */
  /* height: 100%; */
`;

const ReceivedMessage = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  div {
    display: flex;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5%;
    margin-top: 5px;
  }
`;

const SendMessage = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: right;
  div {
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5%;
  }
`;

const ReceivedMessageBox = styled.div`
  display: inline-block;
  background: #2f80ed;
  color: #f2f2f2;
  max-width: 80%;
  text-align: left;
  padding: 10px;
  margin-right: 20px;
  border-radius: 22px 0px 22px 22px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5%;
  }
  /* span {
    margin-left: 90px;
    margin-top: 50px;
  } */
`;

// const Stchatlining = styled.div`
//   display: flex;
//   width: 500px;
//   height: 100px;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 20px 0px 0px 0px;
//   img {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 50px;
//     height: 50px;
//     border-radius: 5%;
//     position: absolute;
//     object-fit: cover;
//     padding-left: 30px;
//     padding-bottom: 5px;
//   }
//   span {
//     margin-left: 90px;
//     margin-top: 50px;
//   }
// `;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  margin-top: 673px;
  textarea {
    width: 495px;
    height: 170px;
    border-radius: 10px;
  }
`;
