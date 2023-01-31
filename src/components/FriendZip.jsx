import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";
import styled from "styled-components";
import { __removeFriendThunk } from "../redux/modules/friendInfoSlice";
import { __postChatopenThunk } from "../redux/modules/chatSlice";

const FriendZip = (props) => {
  const myEmail = localStorage.getItem("userEmail");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friendEmail = [props.friendEmail];
  const removeFriend = () => {
    dispatch(__removeFriendThunk({ myEmail, friendEmail }));
  };
  const test = async () => {
    await dispatch(__postChatopenThunk(friendEmail));
    navigate(`/chat/${props?.friendNickname}`);
  };
  return (
    <div>
      <Roomarr>
        <img
          src={process.env.PUBLIC_URL + "/basic.png"}
          alt="로고"
          onClick={test}
        />
        <h4>{props?.friendNickname}</h4>
        <Button
          size="m"
          margin="0px 0px 100px 350px"
          bc="transparent"
          hoverBc="#000"
          onClick={() => {
            return removeFriend();
          }}
        >
          <img src={process.env.PUBLIC_URL + "/remove.png"} alt="로고" />
        </Button>
      </Roomarr>
    </div>
  );
};

export default FriendZip;

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
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5%;
    position: absolute;
    object-fit: cover;
    padding-left: 30px;
    padding-bottom: 5px;
  }
  h2 {
    margin: 0px 0px 0px 70px;
  }
  h4 {
    margin-top: 100px;
    margin-left: 100px;
  }
`;
