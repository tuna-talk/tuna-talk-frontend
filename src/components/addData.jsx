import React from "react";
import Button from "./button/Button";
import styled from "styled-components";
import { __removeChatListThunk } from "../redux/modules/chatSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __pulsFriendThunk } from "../redux/modules/friendInfoSlice";

const AddData = (props) => {
  const myEmail = localStorage.getItem("userEmail");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const addFriend = () => {
    navigate("/friendsList");
  };
  const friendEmail = [props.friendEmail];

  return (
    <Stform onSubmit={addFriend}>
      <ViewImg>
        <img src={process.env.PUBLIC_URL + "/basic.png"} alt="로고" />
      </ViewImg>
      <NickName>
        <h4>{props.friendNickname}</h4>
      </NickName>
      <Button
        size="m"
        bc="#fff"
        hoverC="#000"
        br="10px"
        padding="0px 0px 0px 0px"
        margin="20px 0px 0px 240px"
        onClick={() => {
          dispatch(__pulsFriendThunk({ myEmail, friendEmail }));
        }}
      >
        추가하기
      </Button>
    </Stform>
  );
};
export default AddData;

const Stform = styled.form`
  display: flex;
  flex-direction: column;
`;

const ViewImg = styled.div`
  margin: 0px 0px 0px 130px;
  width: 50px;
  height: 50px;
  display: flex;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5%;
    position: absolute;
    object-fit: cover;
  }
`;

const NickName = styled.div`
  align-items: center;
  justify-content: center;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    /* opacity: 0.3; */
  }
`;
