import { createSlice } from '@reduxjs/toolkit'
import { closePanel } from './panelSlice';
import { Update } from '@mui/icons-material';

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
         * update contact in the contacts array
         * @param {object} action - The payload object containing the contact to update
         */
        updateContact: (state, action) => {
            const contactIndex = state.contactsArr.findIndex(contact => contact.id === action.payload.id);
            if (contactIndex !== -1) {
                state.contactsArr[contactIndex] = action.payload;
            }
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

export const { setContactsArr, setCurrentContact, addContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;