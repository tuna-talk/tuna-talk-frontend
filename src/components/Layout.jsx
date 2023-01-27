import styled from "styled-components";
import flex from "./../lib/flex";
const Layout = ({ children }) => {
  return (
    <StWrap flex={flex}>
      <StInnerWrap flex={flex}>
        <StInnerBox>{children}</StInnerBox>
      </StInnerWrap>
    </StWrap>
  );
};
export default Layout;

const StWrap = styled.section`
  width: 100;
  height: 100vh;
  ${({ flex }) => flex({})}
`;
const StInnerWrap = styled.article`
  width: 600px;
  height: 900px;
  border-radius: 10px 10px 0px 10px;
  /* padding: 5% 0; */
  /* ${({ flex }) => flex({})} */
  flex-direction: column;
  background: #fff;
  box-shadow: 2px 2px #cacaca;
`;
const StInnerBox = styled.div`
  /* width: 50%;
  h1 {
    text-align: center;
  } */
`;
