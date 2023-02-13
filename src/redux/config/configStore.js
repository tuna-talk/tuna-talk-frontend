import { configureStore } from "@reduxjs/toolkit";
import chatcollect from "../modules/chatSlice";
import friendinfo from "../modules/friendInfoSlice";
import socket from "../modules/socketSlice";
import messages from "../modules/socketSlice";

const store = configureStore({
  reducer: { chatcollect, friendinfo, socket, messages },
});

export default store;
