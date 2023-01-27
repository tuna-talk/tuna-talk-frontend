import React, { useState } from "react";
import styled from "styled-components";
import { StInput, StForm, StBox, StBtn } from "./../lib/signStyle";
import SignLayout from "./../signLayout/SignLayout";
import Button from "./../components/button/Button";
import { useNavigate } from "react-router-dom";
import { userApis } from "./../apis/userApis";

const SignIn = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    userEmail: "",
    userPw: "",
  });

  const loginHandler = ({ target: { value, name } }) => {
    setLogin((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const result = await userApis.signInUser(login);
    console.log(result.data);
    if (result.data.statuscode === 200) {
      const token = result.headers.authorization;
      localStorage.setItem("token", token);
      window.location = "/";
    } else {
      alert("일치하는 정보가 없습니다!");
    }
  };

  const moveSocialLoginPage = (url) => () => {
    window.location.replace(url);
  };
  return (
    <>
      <SignLayout>
        <StWrap onSubmit={onLogin}>
          <h2>logo</h2>
          <StForm>
            <StInput
              type="text"
              name="userEmail"
              value={login.userEmail}
              placeholder="아이디"
              onChange={loginHandler}
              required
            />
            <StInput
              type="password"
              name="userPw"
              value={login.userPw}
              placeholder="비밀번호"
              onChange={loginHandler}
              required
            />
            <div>
              <StBtn>로그인</StBtn>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </p>
            </div>
          </StForm>
        </StWrap>
      </SignLayout>
    </>
  );
};

export default SignIn;

const StWrap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
