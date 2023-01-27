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
  isSuccess: false,
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
      const { data } = await axiosInstance.get("/chats", config);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {},
  // extraReducers: {},
});
export default chatSlice.reducer;
