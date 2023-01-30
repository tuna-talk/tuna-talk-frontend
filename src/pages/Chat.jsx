import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SockJsClient from "react-stomp";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
// import { IoIosArrowBack } from "react-icons/io";

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  const socket = new SockJS("");
  const client = Stomp.over(socket);

  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  // const chatList = useSelector((state) => state.chat.chat);
  // const users = useSelector((state) => state.chat.users);
  // const chatRoom = useSelector((state) => state.chat.chatRoom);

  useEffect(() => {
    onConneted();
    return () => {
      onConneted();
    };
  }, []);

  // 방정보 가져오기
  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  //이전 채팅 내용 가져오기
  useEffect(() => {
    dispatch(getMessage(id));
  }, []);

  // 채팅 엔터키/shif+enter 막기
  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      window.scrollTo(0, 0);
      sendMessage();
    }
  };

  // 채팅방 이름
  const room = chatRoom.filter((x) => x.id === id);

  //연결&구독 // 방입장
  function onConneted() {
    //useEffect가 실행되면 onConneted가 호출되고
    try {
      // sock이라면 url에대해 구독을 해야만 상대방에게 메시지를 보낼 수 있고,
      // 우리가 사용하는 socketjs에서는 채팅의 ip를 파악해서 ip가 맞으면 채팅방 입장이 가능하다.
      client.connect(headers, () => {
        // 소켓서버를 호출하고 header에 토큰을 확인한다

        client.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const newMessage = JSON.parse(data.body); //JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
            dispatch(addMessage(newMessage));
          },
          headers
        );
      });
    } catch (error) {}
  }

  //메시지 보내기
  const sendMessage = () => {
    client.send(
      "/pub/chat",
      JSON.stringify({
        type: "TALK",
        chatRoomId: 1,
        userEmail: "",
        message: "",
      }),
      setMessage("")
    );
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
          <h4>참여자 이름</h4>
        </StchatName>
        <HorizonLine />
        <Stchatlining>
          {chatList.map((chat, idx) => {
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
          })}
        </Stchatlining>
        <Footer>
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <Button onClick={sendMessage}>전송</Button>
        </Footer>
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
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  textarea {
    width: 600px;
    height: 150px;
  }
`;
