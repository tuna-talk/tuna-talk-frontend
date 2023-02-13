import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";
import styled from "styled-components";
import { __removeChatListThunk } from "../redux/modules/chatSlice";

const ChatRoom = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const remove = () => {
    dispatch(__removeChatListThunk(props.ChatRoomId));
  };

  return (
    <div>
      <Roomarr>
        <img
          src={process.env.PUBLIC_URL + "/basic.png"}
          alt="로고"
          onClick={() => {
            navigate(`/chat/${props.id}`);
          }}
        />
        <h2>{props.id}</h2>
        <h4>{props.message}</h4>
        <Button
          size="m"
          margin="0px 0px 100px 350px"
          bc="transparent"
          onClick={() => {
            return remove();
          }}
        >
          <img src={process.env.PUBLIC_URL + "/remove.png"} alt="로고" />
        </Button>
      </Roomarr>
    </div>
  );
};
export default ChatRoom;
const Roomarr = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-start;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5%;
    position: absolute;
    object-fit: cover;
    padding-left: 30px;
    padding-bottom: 50px;
  }
  h2 {
    margin: 0px 0px 0px 70px;
  }
  h4 {
    padding: 0px 260px 0px 0px;
  }
`;
