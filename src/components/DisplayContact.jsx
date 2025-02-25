import React from 'react';
import { Box, Typography, IconButton, Divider, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/StarBorder';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch, useSelector } from 'react-redux';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { setEditMode } from '../features/panelSlice';

/**
 * @fileoverview DisplayContact - A component that displays contact details in view mode.
 * Displays the contact's name, role, contact type, preferred language, phone numbers, emails, address, accounting reference, and VAT number.
 * Also includes an edit button to switch to edit mode.
 * The component is used in the side panel.
 */
const DisplayContact = () => {

    /**
     * Get the current contact from the Redux store.
     */
    let currentContact = useSelector(state => state.contact.currentContact);

    let dispatch = useDispatch();

    /**
     * Changes the panel mode to edit mode.
     */
    const changeToEditMode = () => {
        dispatch(setEditMode())
    }
    return (
        <>
            {/* תמונת פרופיל עגולה */}
            <Box sx={{ display: 'flex',justifyContent: 'center', mb: 2,}}>
                <Avatar 
                 alt={currentContact.firstName + " " + currentContact.lastName}
                 src={currentContact.avatar}
                 sx={{ width: 100, height: 100 }}/>
            </Box>

            {/* כותרת Contact Details */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Contact Details
                </Typography>
                {/* סימן כוכב ו-"Main contact" */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {currentContact.isMain ? <StarOutlinedIcon color='#4A90E2' sx={{ fontSize: 20 }} /> : <StarIcon sx={{ fontSize: 20 }} />}
                    <Typography variant="body2">Main contact</Typography>
                </Box>
                {/* Edit */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} onClick={changeToEditMode}>
                    <DriveFileRenameOutlineOutlinedIcon  color='primary' fontSize="small" />
                    <Typography color='primary'  variant="body2">Edit</Typography>
                </Box>
            </Box>

            {/* full address*/}
            <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
                {currentContact?.address}
            </Typography>

            {/* Name / Role / Contact Type */}
            <Box sx={{ display: 'flex',justifyContent: 'space-between', flexWrap: 'wrap',gap: 1, mb: 1,}}>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Name
                    </Typography>
                    <Typography variant="body2">
                        {currentContact?.firstName} {currentContact?.lastName}
                    </Typography>
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Role
                    </Typography>
                    <Typography variant="body2">{currentContact?.role}</Typography>
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Contact type
                    </Typography>
                    <Typography variant="body2">{currentContact?.contactType}</Typography>
                </Box>
            </Box>

            <Divider />

            {/* Preferred language */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Preferred language
                </Typography>
                <Typography variant="body2">{currentContact?.contactDetails?.preferredLanguage}</Typography>
            </Box>

            {/* Phone */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Phone
                </Typography>
                {currentContact?.contactDetails?.phoneNumbers.map(p =>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} key={p.number}>
                        <Typography variant="body2">{p.type}- {p.number}</Typography>
                        <IconButton size="small">
                            <PhoneIcon fontSize="small" />
                        </IconButton>
                    </Box>)}
            </Box>

            {/* Email */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Email
                </Typography>
                {currentContact?.contactDetails?.emails.map(e => {
                    return (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} key={e.email}>
                            <Typography variant="body2">{e.type}- {e.email}</Typography>
                            <IconButton size="small">
                                <EmailIcon fontSize="small" />
                            </IconButton>
                        </Box>)
                })}
            </Box>

            {/* Address */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Address
                </Typography>
                <Typography variant="body2">{currentContact.billingInformation}</Typography>
            </Box>

            <Divider sx={{ mt: 2 }} />

            {/* Accounting Ref / VAT Number */}
            <Box sx={{mt: 2, display: 'flex', justifyContent: 'space-between', gap: 2,}}>
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Accounting Ref
                    </Typography>
                    <Typography variant="body2">{currentContact.accountingRef}</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        VAT number
                    </Typography>
                    <Typography variant="body2">{currentContact.vatNumber}</Typography>
                </Box>
            </Box>
        </>
    );
};

export default DisplayContact;
