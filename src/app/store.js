import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../features/contactSlice";
import panelSlice from "../features/panelSlice";


export const store = configureStore({
    reducer: {
        contact: contactSlice,
        panel: panelSlice
    }
})