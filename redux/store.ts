import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import utilsReducer from "./slices/utilsSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    utils: utilsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
