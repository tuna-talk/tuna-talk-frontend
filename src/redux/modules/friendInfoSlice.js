import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  friendinfo: [
    {
      userId: 1,
      userEmail: "",
      userNickname: "",
      userImage: "",
      userMessage: "",
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

// 친구 서치 post요철
export const __searchFriendThunk = createAsyncThunk(
  "SEARCH_FRIEND",
  async (userEmail, thunkAPI) => {
    try {
      console.log(userEmail);
      const searchInfo = { userEmail };
      const Request = await axiosInstance.post(
        `/friend/${userEmail}`,
        searchInfo
      );
      console.log("서버로 보내기", Request.config.data);
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
