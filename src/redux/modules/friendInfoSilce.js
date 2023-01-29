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

// 유저조회 GET요청
// export const __getChatListThunk = createAsyncThunk(
//   "GET_CHATS",
//   async (_, thunkAPI) => {
//     try {
//       const Request = await axiosInstance.get(`/friend/`, config);
//       return thunkAPI.fulfillWithValue(Request.data);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.code);
//     }
//   }
// );

// 친구추가 post요청
export const __addFriendThunk = createAsyncThunk(
  "ADD_FRIEND",
  async (payload, thunkAPI) => {
    try {
      console.log("프랜드 에드에서 잘 넘어왔나?", payload);
      const Request = await axiosInstance.post(`/friend/${payload}`);

      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
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

export const friendinfoSlice = createSlice({
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
    // [__getChatListThunk.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [__addFriendThunk.pending]: (state) => {
      state.friendinfo.isLoading = true;
    },
    [__addFriendThunk.fulfilled]: (state, action) => {
      state.friendinfo.comments.push(action.payload);
      console.log(action.payload);
    },
    [__addFriendThunk.rejected]: (state, action) => {
      state.friendinfo.error = action.payload;
    },
    // [__removeChatListThunk.fulfilled]: (state, action) => {
    //   const target = state.chatcollect.findIndex(
    //     (chatcollect) => chatcollect.chatRoomId === action.payload
    //   );
    //   state.chatcollect.splice(target, 1);
    // },
  },
});
export default friendinfoSlice.reducer;
