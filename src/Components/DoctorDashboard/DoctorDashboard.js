import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import StatusCard from '../StatusCard/StatusCard';
import { useState } from 'react';
import { apiURL } from '../../App';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const DoctorDashboard = () => {
    const [appointment, setappoinment] = useState(null)
    const classes = useStyles();
    const statusCardItems = [
        {total: 29, text: "Pending Appointments", color: "#F1536E"},
        {total: 20, text: "Today’s Appointments", color: "#3DA5F4"},
        {total: 12, text: "Total Appointments", color: "#00C689"},
        {total: 72, text: "Total Patients", color: "#FDA006"}
    ]
    useEffect(()=>{
        fetch(apiURL+"/getallappointments")
        .then(response => response.json())
        .then(data => setappoinment(data))
    },[])

    console.log(appointment)
    

    return (
        <>
           <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        statusCardItems.map(item => <StatusCard item={item}></StatusCard>)
                    }
                </Grid>
            </div>
        </>
    );
};

export default DoctorDashboard;