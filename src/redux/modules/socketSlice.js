import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  isLoading: false,
  error: null,
};

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

//채팅방 생성
export const addChatroom = createAsyncThunk(
  "post/chatroom",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("", payload, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//메시지 불러오기
export const getMessage = createAsyncThunk(
  "get/chat",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(``, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//채팅방 전체 불러오기
export const getChatRoom = createAsyncThunk(
  "get/chatroom",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("", {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    // addMessage: (state, { payload }) => {
    //   state.chat = [...state.chat, payload];
    // },
  },
  extraReducers: {
    // [addChatroom.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chat = payload;
    // },
    // [getMessage.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chat = payload;
    // },
    // [getChatRoom.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chatRoom = payload;
    // },
    // [memberInfo.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.users = payload;
    // },
  },
});

export const { addMessage } = socketSlice.actions;
export default socketSlice.reducer;
