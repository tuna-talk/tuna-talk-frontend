import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChatList from "../pages/ChatList";
import Chat from "../pages/Chat";
import FriendsList from "../pages/FriendsList";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FriendAdd from "../pages/FriendAdd";
// import GlobalStyle from "./GlocalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/friendsList" element={<FriendsList />} />
        <Route path="/friendAdd" element={<FriendAdd />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/chat/:friendNickname" element={<Chat />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
