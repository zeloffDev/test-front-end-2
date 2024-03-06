import { createSlice } from "@reduxjs/toolkit";

interface TestState {}

const initialState: TestState = {};

const testSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setFriend: (state, action) => {},
  },
});

export const { setFriend } = testSlice.actions;
export default testSlice.reducer;
