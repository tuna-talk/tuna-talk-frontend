import React from "react";
import Button from "./button/Button";
import styled from "styled-components";
import { __removeChatListThunk } from "../redux/modules/chatSlice";
import { useNavigate } from "react-router-dom";

const AddData = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const addFriend = () => {
    navigate("/friendsList");
  };

  return (
    <form onSubmit={addFriend}>
      <ViewImg>
        <img src={props.userMsg} />
      </ViewImg>
      <div>
        <h4>{props.userName}</h4>
      </div>
      <Button
        size="m"
        bc="#fff"
        hoverC="#000"
        br="10px"
        padding="0px 0px 0px 0px"
        margin="20px 0px 0px 240px"
      >
        추가하기
      </Button>
    </form>
  );
};
export default AddData;

const ViewImg = styled.div`
  margin-top: 30px;
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
