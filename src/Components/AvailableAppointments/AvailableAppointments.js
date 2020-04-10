import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import { useStyles } from '../Home/Home';
import { apiURL } from '../../App';
import ServicesCard from '../ServicesCard/ServicesCard';

const AvailableAppointments = () => {
    const [services, setServices] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        fetch(apiURL+"/getservices")
        .then(response => response.json())
        .then(data => setServices(data))
    },[])

    
    return (
        <> 
        <Container  maxWidth="md"> 
            <Box my={3} className={classes.gradientText}>
                <Typography variant="h4" align="center" >
                    Available Appointments on February 7, 2020
                </Typography>
            </Box>
            
        
            <Grid container spacing={4}>
                {
                    services.map(service => <ServicesCard service={service}/>)
                }
            </Grid>
        </Container>    
        </>
    );
};

export default AvailableAppointments;