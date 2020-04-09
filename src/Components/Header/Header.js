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
                <Typography variant="h3" component="h3">
                    Your New Smile
                    Starts Here
                </Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                </Typography>
                <Button className={classes.btn}>GET APPOINTMENT</Button>
            </Grid>
            <Grid item xs={6}>
                <Box mx="auto">
                    <img   width="75%" src={maskGroup} alt=""/>
                </Box>
            </Grid>
        </Grid>
    </div>
    );
};

export default Header;