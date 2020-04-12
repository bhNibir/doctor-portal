import React from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import ServicesCard from '../ServicesCard/ServicesCard';
import { useStyles } from '../Home/useStyle';
import ShowLoading from '../ShowLoading/ShowLoading';

const AvailableAppointments = ({selectedDate, services}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const classes = useStyles();
 
    return (
        <> 
            {
                services
                ?
                <Container  maxWidth="md"> 
                    <Box my={3} className={classes.gradientText}>
                        <Typography variant="h4" align="center" >
                            Available Appointments on {selectedDate.toLocaleDateString(undefined, options)}
                        </Typography>
                    </Box>
                    
                
                    <Grid container spacing={4}>
                        {
                            services.map(service => <ServicesCard key={service._id} service={service} selectedDate={selectedDate}/>)
                        }
                    </Grid>
                </Container>  
                :
                <ShowLoading/>  
            }
        </>
    );
};

export default AvailableAppointments;