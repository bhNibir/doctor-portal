import React from 'react';
import { Grid, Box } from '@material-ui/core';
import maskGroup from '../../images/Mask Group 1.png'


const Slider = (props) => {
    

    return (
        <div >
        <Grid container 
            justify="center"
            alignItems="center"
        >
            <Grid item xs={6}>
            {props.children}
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

export default Slider;