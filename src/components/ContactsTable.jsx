import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { useSelector } from 'react-redux';

import ContactRow from './ContactRow';
import "../styles/contactsTable.css"


/**
 * @fileoverview ContactsTable - A component for displaying a contacts table.
 * The table includes details such as contact type, name, role, and contact details.
 * Data is retrieved from Redux and passed to the ContactRow component.
 */
const ContactsTable = () => {

    let rows = useSelector(state => state.contact.contactsArr)

    return (<>

        <TableContainer component={Paper} className='tableContainer' sx={{ alignItems: 'left' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ '& .MuiTableCell-root': { fontWeight: 'bold', textAlign: 'left' } }}>
                    <TableRow>
                        <TableCell>profile</TableCell>
                        <TableCell >Contact type</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Contact Details</TableCell>
                        <TableCell>Main Contact</TableCell>
                        <TableCell>...</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((contact) => (
                        <ContactRow key={contact.id} contact={contact} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default ContactsTable;
