import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Button, IconButton, TextField, InputAdornment, Grid, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ContactsTable from "../components/ContactsTable";
import { setContactsArr } from "../features/contactSlice";
import Filter from "../components/Filter";
import { setAddMode, setFilterMode } from "../features/panelSlice";

/**
 * @fileoverview ContactsPage - A page component for managing and displaying contacts.
 * This page includes:
 * - A button to add new contacts.
 * - A filter component to filter contacts.
 * - A table displaying the list of contacts.
 * - Data fetching from a local JSON file to populate the contacts list.
 */
const ContactsPage = () => {

    let dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    /**
    * State for the filtered contacts list.
    * This state is used to manage the contacts displayed in the table.
    */
    const [filterContacts, setFilterContacts] = useState(useSelector((st) => st.contact.contactsArr));

    /**
     * Retrieves the full contacts array from Redux state.
     * This ensures that the latest data is available for filtering and displaying.
     */
    let contacts = useSelector(st => st.contact.contactsArr);

    /**
     * useEffect to sync the filtered contacts with the Redux store.
     * Whenever the contacts array updates, the filtered array is reset.
     * 
     * Note: This causes filters to reset on contact updates. Consider handling this if needed.
     */
    useEffect(() => setFilterContacts(contacts), [contacts]);

    /**
    * Saves the position of the button from which the popover opens
    * Function to open the panel in "filter contact" mode.
    * Dispatches an action to update the panel state.
    */
    const openFilter = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
        
        dispatch(setFilterMode())
    };

    /**
     * Function to open the panel in "add new contact" mode.
     * Dispatches an action to update the panel state.
     */
    const openAddNewContact = () => {
        dispatch(setAddMode());
    };

    /**
     * useEffect to fetch contacts data from a local JSON file.
     * On component mount, it retrieves the contacts and updates the Redux store.
     * In case of an error, it logs it to the console.
     */
    useEffect(() => {
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setContactsArr(data.contacts));
                setFilterContacts(data.contacts);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <Box sx={{ padding: "20px" }}>
            {/* Header - Contacts title and Add Contact button */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1f4164" }}>
                    Contacts
                </Typography>
                <Button
                    onClick={openAddNewContact}
                    variant="contained"
                    sx={{
                        backgroundColor: "#1f4164",
                        color: "white",
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        "&:hover": { backgroundColor: "#1a3654" },
                    }}
                >
                    + New Contact
                </Button>
            </Grid>

            {/* Filter and Search Section */}
            <Grid container alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Grid item>
                    <IconButton
                        color="primary"
                        onClick={openFilter}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "6px 12px",
                            borderRadius: "8px",
                        }}
                    >
                        <FilterAltOutlinedIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                            Filter
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item>
                    <TextField
                        placeholder="Search in contacts"
                        variant="outlined"
                        size="small"
                        sx={{
                            width: 250,
                            backgroundColor: "white",
                            borderRadius: "8px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#DADCE0",
                                    borderRadius: "8px",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#AAB4BE",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#1f4164",
                                },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#5f6368" }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item>
                    <Typography variant="body2" sx={{ color: "#5f6368" }}>
                        {filterContacts.length} Contacts
                    </Typography>
                </Grid>
            </Grid>

            {/* Filter component to manage contact filtering */}
            <Filter setFilterContacts={setFilterContacts} />

            {/* Contacts table displaying the contacts */}
            <ContactsTable contactsArr={filterContacts} anchorEl={anchorEl}/>
        </Box>
    );
};

export default ContactsPage;
