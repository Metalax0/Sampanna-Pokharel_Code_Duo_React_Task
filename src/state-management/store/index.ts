import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        // spells: spellsSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
