import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

import ContactRow from './ContactRow';
import "../styles/contactsTable.css"


/**
 * @fileoverview ContactsTable - A component for displaying a contacts table.
 * The table includes details such as contact type, name, role, and contact details.
 * Data is retrieved from Redux and passed to the ContactRow component.
 */
const ContactsTable = () => {

    /**
     * Get the contacts array from the Redux store.
     */
    let contactsArr = useSelector(state => state.contact.contactsArr)

    return (<>

        <TableContainer component={Paper} className='tableContainer' sx={{ alignItems: 'left' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ '& .MuiTableCell-root': { fontWeight: 'bold', textAlign: 'left' } }}>
                    <TableRow>
                        <TableCell><Avatar src='' sx={{ width: 24, height: 24 }}/></TableCell>
                        <TableCell >Contact type</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Contact Details</TableCell>
                        <TableCell>Main Contact</TableCell>
                        <TableCell>...</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {contactsArr.map((contact) => (
                        <ContactRow key={contact.id} contact={contact} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default ContactsTable;
