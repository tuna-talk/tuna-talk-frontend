import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import HorizonLine from "../components/horizontal/HorizonLine";
import Layout from "../components/Layout";
import AddData from "../components/AddData";
import { useDispatch, useSelector } from "react-redux";
import { __getFriendThunk } from "../redux/modules/friendInfoSlice";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import FriendZip from "../components/FriendZip";

const FriendsList = () => {
  const userName = localStorage.getItem("userNickname");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(__getFriendThunk(userEmail));
  // }, [dispatch]);

  const { isLoading, error, friendinfo } = useSelector(
    (state) => state.friendinfo
  );

  if (isLoading) {
    return <div> 로딩중 .... </div>;
  }
  if (error) return <div>알수 없는 에러가 발생했습니다.</div>;

  return (
    <Layout>
      <Navbar />
      <Header />
      <div style={{ padding: "0px 100px 0px 100px" }}>
        <Container>
          <h2>친구</h2>
          <BoxText>
            <Stmy>
              <ViewImg>
                <img src={process.env.PUBLIC_URL + "/basic.png"} alt="로고" />
              </ViewImg>
              <h4>{userName}</h4>
            </Stmy>
            <HorizonLine />
            <Friendbox>
              <Friendbox>
                {friendinfo.map((props) => (
                  <FriendZip
                    key={props?.id}
                    friendNickname={props?.friendNickname}
                    friendEmail={props?.friendEmail}
                  />
                ))}
              </Friendbox>
            </Friendbox>
          </BoxText>
        </Container>
      </div>
    </Layout>
  );
};

export default FriendsList;
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
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* opacity: 0.3; */
  margin: 0px 0px 0px 10px;
`;

const ViewImg = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid blueviolet;
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

const Stmy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 350px 0px 0px;
  /* border: 3px solid red; */
  h4 {
    padding: 0px 10px 0px 10px;
  }
`;

const Friendbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 350px 0px;
`;
