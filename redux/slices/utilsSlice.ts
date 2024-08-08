import { createSlice } from "@reduxjs/toolkit";
import { UtilsState } from "../../interfaces/dolarInterface";

const initialState: UtilsState = {
  dolares: [],
  dolarTarjeta: [],
  autenticado: false,
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
    setAutenticado: (state, action) => {
      state.autenticado = action.payload;
    },
  },
});

export const { setDolar, setDolarTarjeta, setAutenticado } = utilsSlice.actions;

export default utilsSlice.reducer;
