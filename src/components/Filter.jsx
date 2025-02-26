import React, { useState } from "react";
import { Box, Typography, FormControl, MenuItem, Button, IconButton, Chip, Divider, Checkbox, ListItemText, Select } from "@mui/material";
import { Close as CloseIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux"; 
import { setContactsArr } from "../features/contactSlice";

const FilterPanel = () => {
    const dispatch = useDispatch();  
    const contacts = useSelector(st => st.contact.contactsArr);

    const uniqueTags = [...new Set(contacts.flatMap(contact => contact.tags))];
    const uniqueContactTypes = [...new Set(contacts.map(contact => contact.contactType))];

    const [selectedContactTypes, setSelectedContactTypes] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedActiveContacts, setSelectedActiveContacts] = useState([]);

    const filterOptions = [
        { id: 1, type: "Contact Type", state: selectedContactTypes, setState: setSelectedContactTypes, options: uniqueContactTypes },
        { id: 2, type: "Tags", state: selectedTags, setState: setSelectedTags, options: uniqueTags },
        { id: 3, type: "Active Contact", state: selectedActiveContacts, setState: setSelectedActiveContacts, options: ["active","inActive"] }
    ];

    const handleMultiSelectChange = (e, setState, options) => {
        const value = e.target.value;
        setState(value.includes("All") ? (value.length === options.length + 1 ? [] : options) : value);
    };

  
    const handleSave = () => {
        let filteredContacts = contacts.filter(contact => {
            let isMatch = true;

            // פילטר לפי סוג קשר
            if (selectedContactTypes.length > 0 && !selectedContactTypes.includes(contact.contactType)) {
                isMatch = false;
            }

            // פילטר לפי תגיות
            if (selectedTags.length > 0 && !selectedTags.some(tag => contact.tags.includes(tag))) {
                isMatch = false;
            }

            // פילטר לפי סטטוס פעולה (active/inActive)
            if (selectedActiveContacts.length > 0 && !selectedActiveContacts.includes(contact.isActive ? "active" : "inActive")) {
                isMatch = false;
            }

            return isMatch;
        });

        // עדכון ה-Redux עם אנשי הקשר המפולטרים
        dispatch(setContactsArr(filteredContacts)); 
    };

    return (
        <Box sx={{ width: 220, p: 2, backgroundColor: "white", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6" fontWeight="bold" color="#1E2A42">Filter</Typography>
                <IconButton><CloseIcon sx={{ color: "#1E2A42" }} /></IconButton>
            </Box>

            <Chip label="x Clear all" sx={{ backgroundColor: "#D3DAE6", color: "#55607A", fontSize: "12px", height: "22px", mt: 1, mb: 2, alignSelf: "start", borderRadius: "4px" }}
                onClick={() => { setSelectedContactTypes([]); setSelectedTags([]); setSelectedActiveContacts([]); }} />

            {filterOptions.map(filter => (
                <Box key={filter.id}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Box sx={{ width: 22, height: 22, backgroundColor: "#D3DAE6", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", mr: 1 }}>
                            <RemoveIcon sx={{ color: "#55607A", fontSize: 18 }} />
                        </Box>
                        <Typography color="#1E2A42">{filter.type}</Typography>
                    </Box>
                    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                        <Select multiple value={filter.state} onChange={(e) => handleMultiSelectChange(e, filter.setState, filter.options)}
                            renderValue={(selected) => selected.length === filter.options.length ? "All" : selected.join(", ")}
                            sx={{ backgroundColor: "white", borderRadius: "20px", height: 27, width: 195 }}>
                            <MenuItem value="All"><Checkbox checked={filter.state.length === filter.options.length} /><ListItemText primary="All" /></MenuItem>
                            {filter.options.map((option, index) => (
                                <MenuItem key={index} value={option}><Checkbox checked={filter.state.includes(option)} /><ListItemText primary={option} /></MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button color="secondary" sx={{ textTransform: "none", color: "#1E2A42" }}>Cancel</Button>
                <Button variant="contained" sx={{ backgroundColor: "#1E2A42", color: "white", textTransform: "none", "&:hover": { backgroundColor: "#142033" } }} onClick={handleSave}>Save</Button> {/* הוספתי את הפונקציה כאן */}
            </Box>
        </Box>
    );
};

export default FilterPanel;
