import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { ThemeEnum, UISliceType } from "../../types/uiSliceType";

const initialState: UISliceType = {
    theme: ThemeEnum.light,
};

const uiOptions: CreateSliceOptions = {
    name: "ui",
    initialState,
    reducers: {
        setTheme: (state: UISliceType, action: PayloadAction<ThemeEnum>) => {
            return { ...state, theme: action.payload };
        },
    },
};

const uiSlice = createSlice(uiOptions);
export const { setTheme } = uiSlice.actions;
export default uiSlice.reducer;
