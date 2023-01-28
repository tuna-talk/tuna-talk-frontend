import React from "react";
import Button from "./button/Button";
import styled from "styled-components";
import { __removeChatListThunk } from "../redux/modules/chatSlice";

const addData = (props) => {
  console.log(props);
  return (
    <div>
      <ViewImg>
        <img src />
      </ViewImg>
      <div>
        <h4>유저이름</h4>
      </div>
      <Button
        size="m"
        bc="#fff"
        hoverC="#000"
        br="10px"
        margin="25px 0px 0px 240px"
        // onClick={}
      >
        추가하기
      </Button>
    </div>
  );
};
export default addData;

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
