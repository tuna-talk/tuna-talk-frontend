import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  friendinfo: [
    {
      userId: 1,
      userEmail: "",
      userNickname: "",
      userMessage: "",
    },
  ],
  error: null,
  isLoading: false,
};

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

// 친구 GET요청
export const __getFriendThunk = createAsyncThunk(
  "GET_CHATS",
  async (userEmail, thunkAPI) => {
    try {
      const Request = await axiosInstance.get(`/friend/${userEmail}`, config);
      return thunkAPI.fulfillWithValue(Request.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 친구 서치 post요철
export const __searchFriendThunk = createAsyncThunk(
  "SEARCH_FRIEND",
  async (payload, thunkAPI) => {
    try {
      const userEmail = payload.myEmail;
      const friendEmail = payload.userEmail;
      const Request = await axiosInstance.post(`/friend/${userEmail}`, {
        friendEmail,
      });

      return thunkAPI.fulfillWithValue(Request.config.data);
    } catch (e) {
      return console.log(e);
    }
  }
);

// 친구삭제요청
// export const __removeFriendThunk = createAsyncThunk(
//   "REMOVE_CHAT",
//   async (payload, thunkAPI) => {
//     try {
//       axiosInstance.delete(`/chats/${payload}`, config);
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.code);
//     }
//   }
// );

export const friendInfoSlice = createSlice({
  name: "friendinfo",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getChatListThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.chatcollect = action.payload;
    // },
    // [__getChatListThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [__searchFriendThunk.pending]: (state) => {
    //   state.friendinfo.isLoading = true;
    // },
    // [__searchFriendThunk.fulfilled]: (state, action) => {
    //   state.friendinfo.push(action.payload);
    //   console.log(action.payload);
    // },
    // [__searchFriendThunk.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },
  },
});
export default friendInfoSlice.reducer;
