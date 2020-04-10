import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertMessage = ({alertType, AlertMessage}) => {
  const [open, setOpen] = React.useState(true);


  const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    return (
        <>
        <Snackbar anchorOrigin={ {vertical: 'top', horizontal: 'center'} } open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alertType}>
                {AlertMessage}
            </Alert>
        </Snackbar>
        </>
    );
};

export default AlertMessage;