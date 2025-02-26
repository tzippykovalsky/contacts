import { createSlice } from "@reduxjs/toolkit";
import { setCurrentContact } from "./contactSlice";

/**
 * enum for the panel mode
 */
const enumMode = {
    ADD: "ADD",
    EDIT: "EDIT",
    DISPLAY: "DISPLAY",
    FILTER: "FILTER"
}

/**
 * the initial state of the panel
 */
const initialState = {
    open: false,
    mode: null
}

const panelSlice = createSlice({
    name: "panel",
    initialState,
    reducers: {
        /**
         * close the panel
         */
        closePanel: (state, _action) => {
            state.open = false;
            state.mode = null;
        },
        /**
         * open panel with edit mode
         */
        setEditMode: (state, _action) => {
            state.mode = enumMode.EDIT;
            state.open = true;

        },
        /**
         * open panel with display mode
         */
        setDisplayMode: (state, _action) => {
            state.mode = enumMode.DISPLAY;
            state.open = true;

        },
        /**
         * open panel with add mode
         */
        setAddMode: (state, _action) => {
            state.mode = enumMode.ADD;
            state.open = true;
        },
        /**
        * open panel with filter mode
        */
        setFilterMode: (state, _action) => {
            state.mode = enumMode.FILTER;
            state.open = true;
        },
    },


})

export const { setAddMode, setDisplayMode, setEditMode,setFilterMode, closePanel } = panelSlice.actions
export default panelSlice.reducer;
