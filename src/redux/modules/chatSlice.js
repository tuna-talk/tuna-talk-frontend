import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  chatcollect: [
    {
      chatRoomId: 1,
      createdAt: "",
      modifiedAt: "",
      roomName: "",
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

// 전체 채팅 GET요청
export const __getChatListThunk = createAsyncThunk(
  "GET_CHATS",
  async (_, thunkAPI) => {
    try {
      const Request = await axiosInstance.get("/chats", config);
      return thunkAPI.fulfillWithValue(Request.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 채팅리스트에서 채팅방 삭제요청
export const __removeChatListThunk = createAsyncThunk(
  "REMOVE_CHAT",
  async (payload, thunkAPI) => {
    try {
      axiosInstance.delete(`/chats/${payload}`, config);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const chatSlice = createSlice({
  name: "chatcollect",
  initialState,
  reducers: {},
  extraReducers: {
    [__getChatListThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.chatcollect = action.payload;
    },
    [__getChatListThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getChatListThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__removeChatListThunk.fulfilled]: (state, action) => {
      const target = state.chatcollect.findIndex(
        (chatcollect) => chatcollect.chatRoomId === action.payload
      );
      state.chatcollect.splice(target, 1);
    },
  },
});
export default chatSlice.reducer;
