import React, { useState, useEffect } from 'react';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../Home/useStyle';
import DataTable from '../DataTable/DataTable';
import { apiURL } from '../../App';

const DoctorAppointment = () => {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [rows, setRows] = useState(null)

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const convertDate = date => {
      const newDate = JSON.stringify(date)
      return  newDate.slice(1, 11)
   }

   useEffect(()=> {
    fetch(apiURL+'/getappointments',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({date:convertDate(selectedDate)})
    })
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(err => console.log(err))
    },[selectedDate])
    return (
        <>
        <Grid container spacing={3}>
            {/* Doctor Appointment Calender */}
            <Grid item xs={12} md={5} lg={4}>
              <Paper>
                <AppointmentCalender
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                    />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={7} lg={8}>
              <Paper>
                <Box display="flex" p={1} >
                  <Box flexGrow={1} p={2}>
                    <Typography className={classes.gradientText} gutterBottom variant="h6" component="h6">
                      Appointment
                    </Typography>
                    </Box>
                    <Box p={2}>
                      <Typography variant="h6" color="textSecondary">
                        {selectedDate.toDateString()}
                      </Typography>
                    </Box>
                </Box>
                <DataTable rows={rows} />
              </Paper>
            </Grid>

            </Grid>
        </>
    );
};

export default DoctorAppointment;