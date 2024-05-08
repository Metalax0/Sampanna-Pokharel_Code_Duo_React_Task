import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/uiSlice";
import favoriteSlice from "../slices/favoriteSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        favorite: favoriteSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
