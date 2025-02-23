import { createSlice } from "@reduxjs/toolkit";

/**
 * enum for the panel mode
 */
const enumMode = {
    ADD: "ADD",
    EDIT: "EDIT",
    DISPLAY: "DISPLAY"
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
         * open the panel
         */
        openPanel: (state, _action) => {
            state.open = true;
        },
        /**
         * close the panel
         */
        closePanel: (state, _action) => {
            state.open = false;
        },
        /**
         * set the panel to edit mode
         */
        setEditMode: (state, _action) => {
            state.mode = enumMode.EDIT;
        },
        /**
         * set the panel to display mode
         */
        setDisplayMode: (state, _action) => {
            state.mode = enumMode.DISPLAY;
        },
        /**
         * set the panel to add mode
         */
        setAddMode: (state, _action) => {
            state.mode = enumMode.ADD;
        },
        // נכון לעשות שכאשר סוגרים את הפאנל אז מתרחשת פה פעולת  currentContact: null
    }

})

export const { setAddMode, setDisplayMode, setEditMode, openPanel, closePanel } = panelSlice.actions
export default panelSlice.reducer;
