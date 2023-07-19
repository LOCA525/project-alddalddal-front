import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        nickname: action.payload,
        isLogin: action.payload,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
