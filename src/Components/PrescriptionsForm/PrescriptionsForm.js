import React from 'react';
import { Typography, Button, Dialog } from '@material-ui/core';

const PrescriptionsForm = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
            <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            
            <Dialog fullWidth open={open} onClose={handleClose}></Dialog>
        </>
    );
}

export default PrescriptionsForm;