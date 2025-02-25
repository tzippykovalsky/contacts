import { IconButton, Rating, TableCell, TableRow, Box } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useDispatch } from "react-redux";
import { setDisplayMode } from "../features/panelSlice";
import { setCurrentContact } from "../features/contactSlice";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

/**
 * @fileoverview ContactRow - A component that represents a single row in the contacts table.
 * Displays contact information including name, role, contact details, and an interactive star rating.
 * Also includes an eye icon to toggle contact details display.
 */
const ContactRow = ({ contact }) => {
  let dispatch = useDispatch();

  /**
   * Handles clicking the eye icon to set the contact in display mode.
   * Updates the Redux state to show the selected contact.
   */
  function clickEyeIcon() {
    dispatch(setCurrentContact(contact));
    dispatch(setDisplayMode());
  }

  return (
    <TableRow
      className="tableRow"
      key={contact.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>Profile</TableCell>

      <TableCell component="th" scope="contact">
        {contact.contactType}
      </TableCell>

      {/* Name */}
      <TableCell>{contact.firstName + " " + contact.lastName}</TableCell>

      {/* Role */}
      <TableCell>{contact.role}</TableCell>

      {/* Contact Details Icons */}
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <PersonOutlineOutlinedIcon size="small" />
          <PhoneOutlinedIcon size="small" />
          <MailOutlineOutlinedIcon size="small" />
        </Box>
      </TableCell>

      {/* Main Contact (Star Rating) */}
      <TableCell align="right">
        <Rating
          max={1}
          name="simple-controlled"
          value={contact.isMain ? 1 : 0}
          sx={{
            "& .MuiRating-iconFilled": { color: "#1C3959" }, // Star fill color
          }}
        />
      </TableCell>

      {/* View Contact Icon */}
      <TableCell align="right">
        <RemoveRedEyeOutlinedIcon onClick={clickEyeIcon} />
      </TableCell>
    </TableRow>
  );
}

export default ContactRow;
