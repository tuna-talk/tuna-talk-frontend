import { configureStore } from "@reduxjs/toolkit";
import chatcollect from "../modules/chatSlice";
import friendinfo from "../modules/friendInfoSilce";

const store = configureStore({
  reducer: { chatcollect, friendinfo },
});

export default store;
