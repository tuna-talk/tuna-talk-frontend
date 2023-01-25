import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./../components/Layout";
import Chat from "./../pages/Chat";
import ChatList from "./../pages/ChatList";
import FriendsList from "./../pages/FriendsList";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/friendsList" element={<FriendsList />} />
          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
