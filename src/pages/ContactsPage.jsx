import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { IconButton } from '@mui/material';

import ContactsTable from "../components/ContactsTable";
import { setContactsArr } from '../features/contactSlice';
import Filter from '../components/Filter';


const ContactsPage = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => dispatch(setContactsArr(data.contacts)))
            .catch(error => console.error(error))
    }
        , [])

    return (
        <>
            <IconButton color="primary">
                <FilterAltOutlinedIcon />
                <span style={{left:0, fontSize: "14px" }}>Filter</span>
            </IconButton>
            <Filter/>
            <ContactsTable />

        </>
    );
}

export default ContactsPage;