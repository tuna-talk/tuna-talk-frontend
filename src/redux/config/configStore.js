import { configureStore } from "@reduxjs/toolkit";
import chatcollect from "../modules/chatSlice";

const store = configureStore({
  reducer: { chatcollect },
});

export default store;
