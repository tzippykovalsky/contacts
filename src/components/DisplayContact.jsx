import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/StarBorder';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkIcon from '@mui/icons-material/Link'; // לדוגמה לכתובת אתר
// import CustomIcons from ... // אם יש אייקונים ספציפיים

const DisplayContact = () => {
    return (
        <
        >
    

            {/* תמונת פרופיל עגולה */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                }}
            >
                <Box
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: '#ccc',
                        // אפשר להוסיף כאן רקע של תמונה אמיתית עם backgroundImage
                    }}
                />
            </Box>

            {/* כותרת Contact Details */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Contact Details
                </Typography>
                {/* סימן כוכב ו-"Main contact" */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <StarIcon sx={{ fontSize: 20 }} />
                    <Typography variant="body2">Main contact</Typography>
                </Box>
                {/* Edit */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">Edit</Typography>
                    <IconButton size="small">
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* "Flat 1, Halapid 12 Petah Tikwa" */}
            <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
                Flat 1, Halapid 12 Petah Tikwa
            </Typography>

            {/* Name / Role / Contact Type */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 1,
                }}
            >
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Name
                    </Typography>
                    <Typography variant="body2">John Balingit</Typography>
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Role
                    </Typography>
                    <Typography variant="body2">Manager</Typography>
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Contact type
                    </Typography>
                    <Typography variant="body2">Contractor</Typography>
                </Box>
            </Box>

            <Divider />

            {/* Preferred language */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Preferred language
                </Typography>
                <Typography variant="body2">Hebrew</Typography>
            </Box>

            {/* Phone */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Phone
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">Work - 052-5465461</Typography>
                    <IconButton size="small">
                        <PhoneIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* Email */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Email
                </Typography>
                {/* שתי שורות אימייל לדוגמה */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">Private - ufhy@jfd.co.il</Typography>
                    <IconButton size="small">
                        <EmailIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">Private - ufhy@jfd.co.il</Typography>
                    <IconButton size="small">
                        <EmailIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* Address */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Address
                </Typography>
                <Typography variant="body2">Halapid 9</Typography>
            </Box>

            <Divider sx={{ mt: 2 }} />

            {/* Accounting Ref / VAT Number */}
            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Accounting Ref
                    </Typography>
                    <Typography variant="body2">88888</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        VAT number
                    </Typography>
                    <Typography variant="body2">587974</Typography>
                </Box>
            </Box>
        </>
    );
};

export default DisplayContact;
