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
    dispatch(__removeChatListThunk(props.id));
  };

  return (
    <div
      onClick={() => {
        navigate(`/chat/${props.id}`);
      }}
    >
      <Roomarr>
        <img />
        <h2>{props.roomName}</h2>
        <h4>{props.message}</h4>
        <Button
          size="m"
          margin="0px 0px 100px 350px"
          bc="#007bf7"
          onClick={() => {
            return remove();
          }}
        >
          삭제하기
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
  padding: 20px 0px 0px 0px;
  img {
    display: flex;
    border: 1px solid blueviolet;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5%;
    position: absolute;
    object-fit: cover;
    margin: 0px 0px 110px 0px;
  }
  h2 {
    margin: 0px 0px 0px 70px;
  }
  h4 {
    padding: 0px 260px 0px 0px;
  }
`;
