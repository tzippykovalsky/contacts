import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contactsArr: [],
    currentContact: null
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contactsArr.push({ ...action.payload })
        },
        setCurrentContact: (state, action) => {
            state.currentContact = action.payload;
        },
        // נכון לעשות שכאשר סוגרים את הפאנל אז מתרחשת פה פעולת  currentContact: null
    }

})

export const { setAddMode, setDisplayMode, setEditMode, openPanel, closePanel } = contactSlice.actions;
export default contactSlice.reducer;