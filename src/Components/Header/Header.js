import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import maskGroup from '../../images/Mask Group 1.png'
import { useStyles } from '../Home/Home';


const Header = () => {
    const classes = useStyles();

    return (
        <div >
        <Grid container 
            justify="center"
            alignItems="center"
        >
            <Grid item xs={6}>
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
                <Button className={classes.btn}>GET APPOINTMENT</Button>
            </Box>
            </Grid>
            <Grid item xs={6}>
                <Box m={12} mx="auto">
                    <img   width="75%" src={maskGroup} alt=""/>
                </Box>
            </Grid>
        </Grid>
    </div>
    );
};

export default Header;