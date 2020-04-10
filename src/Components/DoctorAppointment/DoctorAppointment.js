import React, { useState } from 'react';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../Home/useStyle';
import DataTable from '../DataTable/DataTable';

const DoctorAppointment = () => {
    const classes = useStyles
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };
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
                <DataTable></DataTable>
              </Paper>
            </Grid>

            </Grid>
        </>
    );
};

export default DoctorAppointment;