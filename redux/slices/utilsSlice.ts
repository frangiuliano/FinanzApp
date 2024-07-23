import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dolares: [],
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setDolar: (state, action) => {
      state.dolares = action.payload;
    },
  },
});

export const { setDolar } = utilsSlice.actions;

export default utilsSlice.reducer;
