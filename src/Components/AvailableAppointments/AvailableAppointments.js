import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { useStyles } from '../Home/Home';

const AvailableAppointments = () => {
    const classes = useStyles();
    return (
        <>            
        <Box my={3} className={classes.gradientText}>
            <Typography variant="h4" align="center">
                Available Appointments on February 7, 2020
            </Typography>
        </Box>
        </>
    );
};

export default AvailableAppointments;