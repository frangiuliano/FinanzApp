import { Dolar } from "@/interfaces/dolarInterface";
import { setDolar, setDolarTarjeta } from "@/redux/slices/utilsSlice";
import { AppDispatch } from "@/redux/store";

export const getDolares = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares");
    const data: Dolar[] = await response.json();
    dispatch(setDolar(data));
  } catch (error) {
    console.error("Error fetching dolar value: ", error);
  }
};

export const getDolarTarjeta = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/tarjeta");
    const data: Dolar[] = await response.json();
    dispatch(setDolarTarjeta(data));
  } catch (error) {
    console.error("Error trayendo dolar trajeta: ", error);
  }
};
