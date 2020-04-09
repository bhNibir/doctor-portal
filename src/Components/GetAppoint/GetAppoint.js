import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useStyles } from '../Home/Home';

const GetAppoint = () => {
    const classes = useStyles();
    return (
        <Box p={12} mx="auto">
            <Typography variant="h3">
                Your New Smile
                Starts Here
            </Typography>
            <Box my={5}>
                <Typography color="textSecondary" variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                </Typography>
            </Box>
            <Button href="/appointment" className={classes.btn}>GET APPOINTMENT</Button>
        </Box>
    );
};

export default GetAppoint;