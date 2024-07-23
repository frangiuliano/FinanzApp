import {
  setCategorias,
  setCantidadDeCuotas,
  setMoneda,
  setMetodoDePago,
  addGasto,
} from "@/redux/slices/formSlice";
import firebase from "./database/firebase";
import {
  Categoria,
  CantidadDeCuotas,
  Moneda,
  MetodoDePago,
  Gasto,
} from "@/interfaces/formInterfaces";
import { AppDispatch } from "@/redux/store"; // Importa tu tipo AppDispatch si lo tienes definido
import * as Burnt from "burnt";

export const getCategories = async (dispatch: AppDispatch) => {
  try {
    const querySnapshot = await firebase
      .firestore()
      .collection("categorias")
      .get();
    const categories: Categoria[] = [];

    querySnapshot.forEach((doc) => {
      categories.push(doc.data() as Categoria);
    });

    dispatch(setCategorias(categories));
  } catch (error) {
    console.error("Error fetching categories: ", error);
  }
};

export const getCuotas = async (dispatch: AppDispatch) => {
  try {
    const querySnapshot = await firebase
      .firestore()
      .collection("cantidadDeCuotas")
      .get();
    const cantidadDeCuotas: CantidadDeCuotas[] = [];

    querySnapshot.forEach((doc) => {
      cantidadDeCuotas.push(doc.data() as CantidadDeCuotas);
    });

    dispatch(setCantidadDeCuotas(cantidadDeCuotas));
  } catch (error) {
    console.error("Error fetching cantidadDeCuotas: ", error);
  }
};

export const getMoneda = async (dispatch: AppDispatch) => {
  try {
    const querySnapshot = await firebase
      .firestore()
      .collection("monedas")
      .get();
    const monedas: Moneda[] = [];

    querySnapshot.forEach((doc) => {
      monedas.push(doc.data() as Moneda);
    });

    dispatch(setMoneda(monedas));
  } catch (error) {
    console.error("Error fetching categories: ", error);
  }
};

export const getMetodosDePago = async (dispatch: AppDispatch) => {
  try {
    const querySnapshot = await firebase
      .firestore()
      .collection("metodosDePago")
      .get();
    const metodosDePago: MetodoDePago[] = [];

    querySnapshot.forEach((doc) => {
      metodosDePago.push(doc.data() as MetodoDePago);
    });

    dispatch(setMetodoDePago(metodosDePago));
  } catch (error) {
    console.error("Error fetching categories: ", error);
  }
};

export const addSpend = (spend: Gasto) => async (dispatch: AppDispatch) => {
  try {
    const docRef = await firebase
      .firestore()
      .collection("gastos")
      .add(spend);
    console.log("Document written with ID: ", docRef.id);

    dispatch(addGasto(spend));

    Burnt.toast({
      title: "Gasto cargado correctamente!",
      preset: "done",
      from: "top",
      duration: 5,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
