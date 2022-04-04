import { useDispatch } from "react-redux";
import { store } from "./configureStore";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export * from "./configureStore";
