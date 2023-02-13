import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  friendinfo: [
    {
      id: 1,
      userId: 1,
      userEmail: "",
      userNickname: "",
      userMessage: "",
      friendEmail: "",
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
  async (_, thunkAPI) => {
    try {
      // const userEmail = myEmail;
      const Request = await axiosInstance.get("/friend/", config);

      return thunkAPI.fulfillWithValue(Request.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 친구 서치 get요철
export const __searchFriendThunk = createAsyncThunk(
  "SEARCH_FRIEND",
  async (payload, thunkAPI) => {
    try {
      const userEmail = payload.myEmail;
      const friendEmail = payload.userEmail;
      const Request = await axiosInstance.get(
        `/friend/${userEmail}/${friendEmail}`
      );

      return thunkAPI.fulfillWithValue(Request.data);
    } catch (e) {
      return console.log(e);
    }
  }
);

// 친구 더하기 post
export const __pulsFriendThunk = createAsyncThunk(
  "PULS_FRIEND",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const userEmail = payload.myEmail;
      const friendEmail = payload.friendEmail[0];
      const Request = await axiosInstance.post(`/friend/${userEmail}`, {
        config,
        friendEmail,
      });
      return thunkAPI.fulfillWithValue(Request.data);
    } catch (e) {
      return console.log(e);
    }
  }
);

// 친구삭제요청;
export const __removeFriendThunk = createAsyncThunk(
  "REMOVE_CHAT",
  async (payload, thunkAPI) => {
    try {
      console.log("친구 삭제", payload);
      const userEmail = payload.myEmail;
      const friendEmail = payload.friendEmail[0];
      axiosInstance.delete(`/friend/${userEmail}/${friendEmail}`, config);
      return thunkAPI.fulfillWithValue(friendEmail);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

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
    [__searchFriendThunk.fulfilled]: (state, action) => {
      state.friendinfo = [action.payload];
    },
    // [__searchFriendThunk.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },
    // [__pulsFriendThunk.pending]: (state) => {
    //   state.friendinfo.isLoading = true;
    // },
    [__pulsFriendThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.friendinfo.push(action.payload);
    },
    // [__pulsFriendThunk.rejected]: (state, action) => {
    //   state.friendinfo.error = action.payload;
    // },
    [__removeFriendThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      const target = state.friendinfo.findIndex(
        (friendinfo) => friendinfo.friendEmail === action.payload
      );
      state.friendinfo.splice(target, 1);
    },
  },
});
export default friendInfoSlice.reducer;
