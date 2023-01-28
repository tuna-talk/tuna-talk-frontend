import React, { useState } from "react";
import styled from "styled-components";
import { StInput, StForm, StBtn } from "./../lib/signStyle";
import SignLayout from "./../signLayout/SignLayout";
import { useNavigate } from "react-router-dom";
import { userApis } from "../apis/userApis";
const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userNickname: "",
    userPw: "",
    userPwCheck: "",
    userEmail: "",
  });
  const userInfoHandler = ({ target: { value, name } }) => {
    setUserInfo((prev) => ({ ...prev, [name]: value.trim() }));
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (!userInfo.userPw === userInfo.userPwCheck) {
      alert("비밀번호와 비밀번호 확인이 같지 않습니다!");
      return;
    }
    const result = await userApis.signUpUser(userInfo);
    console.log(result);
    if (result.data.data === "회원가입 성공") {
      alert("회원가입 성공");
      navigate("/");
    } else {
      alert("예기치 못한 오류가 발생하였습니다!");
      window.location.reload();
    }
  };
  return (
    <>
      <SignLayout>
        <StWrap>
          <StForm onSubmit={signUpHandler}>
            <StInput
              type="text"
              name="userEmail"
              placeholder="이메일"
              required
              onChange={userInfoHandler}
              onBlur={({ target: { value } }) => {
                if (value.trim() === "") {
                  return;
                }
                let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
                if (regex.test(value)) {
                  return;
                }
                alert("이메일 형식에 맞게 작성해주세요!");
              }}
              value={userInfo.userEmail}
            />
            <StInput
              value={userInfo.userPw}
              type="password"
              name="userPw"
              onChange={userInfoHandler}
              onBlur={() => {
                if (userInfo.userPw === userInfo.userPwCheck) {
                  return;
                }
                userInfo.userPwCheck &&
                  alert("비밀번호 확인과 일치하지 않습니다!");
              }}
              required
              minLength="8"
              maxLength="15"
              placeholder="비밀번호 - 8-15자를 입력해 주세요"
            />
            <StInput
              type="password"
              name="userPwCheck"
              required
              maxLength="15"
              minLength="8"
              placeholder="비밀번호확인"
              value={userInfo.userPwCheck}
              onChange={userInfoHandler}
              onBlur={() => {
                if (userInfo.userPw === userInfo.userPwCheck) {
                  return;
                }
                alert("비밀번호와 일치하지 않습니다!");
              }}
            />
            <StInput
              required
              type="text"
              name="userNickname"
              onChange={userInfoHandler}
              value={userInfo.userNickname}
              placeholder="이름"
            />
            <div>
              <StBtn>회원가입</StBtn>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/");
                }}
              >
                로그인으로 가기
              </p>
            </div>
          </StForm>
        </StWrap>
      </SignLayout>
    </>
  );
};
export default SignUp;
const StWrap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
