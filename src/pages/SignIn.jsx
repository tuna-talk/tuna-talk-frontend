import React from "react";
import styled from "styled-components";
import { StInput, StForm, StBox, StBtn } from "./../lib/signStyle";
import SignLayout from "./../signLayout/SignLayout";
import Button from "./../components/button/Button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <SignLayout>
        <StWrap>
          <h2>logo</h2>
          <StForm>
            <StInput type="text" name="username" placeholder="아이디" />
            <StInput type="password" name="password" placeholder="비밀번호" />
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
  min-height: 1000px;
  margin: 0 auto;
  text-align: center;
`;
