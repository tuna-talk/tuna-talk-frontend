import { configureStore } from "@reduxjs/toolkit";
import chatcollect from "../modules/chatSlice";
import friendinfoSlice from "../modules/friendInfoSilce";

const store = configureStore({
  reducer: { chatcollect, friendinfoSlice },
});

export default store;
