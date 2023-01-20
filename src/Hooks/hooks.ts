import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../Store/store";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
