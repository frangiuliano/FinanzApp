import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Categoria,
  CantidadDeCuotas,
  Moneda,
  MetodoDePago,
  Gasto,
  FormState,
} from "@/interfaces/formInterfaces";

const initialState: FormState = {
  categorias: [],
  cantidadDeCuotas: [],
  monedas: [],
  metodosDePago: [],
  gastos: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCategorias: (state, action: PayloadAction<Categoria[]>) => {
      state.categorias = action.payload;
    },
    setCantidadDeCuotas: (state, action: PayloadAction<CantidadDeCuotas[]>) => {
      state.cantidadDeCuotas = action.payload;
    },
    setMoneda: (state, action: PayloadAction<Moneda[]>) => {
      state.monedas = action.payload;
    },
    setMetodoDePago: (state, action: PayloadAction<MetodoDePago[]>) => {
      state.metodosDePago = action.payload;
    },
    addGasto: (state, action: PayloadAction<Gasto>) => {
      state.gastos.push(action.payload);
    },
  },
});

export const {
  setCategorias,
  setCantidadDeCuotas,
  setMoneda,
  setMetodoDePago,
  addGasto,
} = formSlice.actions;

export default formSlice.reducer;
