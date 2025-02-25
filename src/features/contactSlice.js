import { createSlice } from '@reduxjs/toolkit'
import { closePanel } from './panelSlice';

const initialState = {
    contactsArr: [],
    currentContact: null
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        /**
         * set the contact array
         */
        setContactsArr: (state, action) => {
            state.contactsArr = action.payload;
        }
        ,
        /**
         * add contact to the contacts array
         */
        addContact: (state, action) => {
            state.contactsArr.push({ ...action.payload })
        },
        /**
         * set the current contact to edit or display
         */
        setCurrentContact: (state, action) => {
            state.currentContact = action.payload;
        },
     
    },
    /**
     * set current contact to null when the panel is closed
     */
    extraReducers: (builder) => {
        builder.addCase(closePanel, (state, _action) => {
            state.currentContact = null;
        })
    }

})

export const { setContactsArr, setCurrentContact, addContact } = contactSlice.actions;
export default contactSlice.reducer;