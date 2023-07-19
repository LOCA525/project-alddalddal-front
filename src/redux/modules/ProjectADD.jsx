import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "",
  base: "",
};

const loungeContentSlice = createSlice({
  name: "loungeContent",
  initialState,
  reducers: {
    AddLoungeContent: (state, action) => {
      return {
        ...state,
        content: action.payload.comments.content,
        base: action.payload.selectedOption,
      };
    },
  },
});

export default loungeContentSlice.reducer;
export const { AddLoungeContent } = loungeContentSlice.actions;
