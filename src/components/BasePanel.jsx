import { Box, Drawer, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closePanel } from "../features/panelSlice";
import DisplayContact from "./DisplayContact";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ContactForm from "./ContactForm";

/**
 * @fileoverview BasePanel - A side panel that displays either a contact's details or a form for adding/editing.
 * The panel opens from the right and can be closed using the "X" button at the top-right.
 */
const BasePanel = () => {
    let dispatch = useDispatch();

    // Get panel state and mode from Redux store
    let open = useSelector(state => state.panel.open);
    let mode = useSelector(state => state.panel.mode);

    /**
     * Handles closing the panel when the close button is clicked.
     */
    const handleClosePanel = () => {
        dispatch(closePanel());
    };

    return (
        <Drawer
            open={open && mode != "FILTER"}
            onClose={handleClosePanel}
            anchor="right"
            ModalProps={{
                BackdropProps: {
                    style: { backgroundColor: "transparent" },
                },
            }}
        >
            <Box
                sx={{
                    width: 390,
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    position: "relative",
                }}
            >
                {/* Close button positioned at the top-right */}
                <CloseOutlinedIcon onClick={handleClosePanel}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                    }} />

                {/* Display contact details if in view mode, otherwise show the form component */}
                {mode === "DISPLAY" ? <DisplayContact /> : <ContactForm />}
            </Box>
        </Drawer>
    );
};

export default BasePanel;
