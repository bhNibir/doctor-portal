import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import { apiURL } from '../../App';
import ServicesCard from '../ServicesCard/ServicesCard';
import { useStyles } from '../Home/useStyle';

const AvailableAppointments = ({selectedDate}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
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
                    Available Appointments on {selectedDate.toLocaleDateString(undefined, options)}
                </Typography>
            </Box>
            
        
            <Grid container spacing={4}>
                {
                    services.map(service => <ServicesCard service={service} selectedDate={selectedDate}/>)
                }
            </Grid>
        </Container>    
        </>
    );
};

export default AvailableAppointments;