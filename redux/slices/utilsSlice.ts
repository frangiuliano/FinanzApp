import { createSlice } from "@reduxjs/toolkit";
import { UtilsState } from "../../interfaces/dolarInterface";

const initialState: UtilsState = {
  dolares: [],
  dolarTarjeta: [],
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setDolar: (state, action) => {
      state.dolares = action.payload;
    },
    setDolarTarjeta: (state, action) => {
      state.dolarTarjeta = action.payload;
    },
  },
});

export const { setDolar, setDolarTarjeta } = utilsSlice.actions;

export default utilsSlice.reducer;
