import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { RootState } from "./rootReducer";
import { AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
