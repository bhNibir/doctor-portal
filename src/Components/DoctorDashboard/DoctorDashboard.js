import React, { useEffect } from 'react';
import { Grid, makeStyles, Paper, Box, Typography } from '@material-ui/core';
import StatusCard from '../StatusCard/StatusCard';
import { useState } from 'react';
import { apiURL } from '../../App';
import DataTable from '../DataTable/DataTable';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gradientText: {
        background: 'linear-gradient(45deg, #19D3AE 30%, #0FCFEC 90%)', 
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        },
  }));

  //for testing
  const tableColumns = [
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'time', label: 'Time', minWidth: 100 },
    { id: 'patient_name', label: 'Name', minWidth: 170 },    
    { id: 'patient_number', label: 'Contact', minWidth: 170 },    
  ];

const DoctorDashboard = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [appointment, setappoinment] = useState(null)
    const [columns, setColumns] = useState(tableColumns)
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

    return (
        <>
           <Box mb={3}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            statusCardItems.map(item => <StatusCard item={item}></StatusCard>)
                        }
                    </Grid>
                </div>
           </Box>

            <Grid item>
              <Paper>
                <Box display="flex" p={1} >
                  <Box flexGrow={1} p={2}>
                    <Typography className={classes.gradientText} gutterBottom variant="h6" component="h6">
                        Recent Appointments
                    </Typography>
                    </Box>
                    <Box p={2}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                            label="week"
                            inputVariant="outlined"
                            onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                      
                    </Box>
                </Box>
                <DataTable rows={appointment} columns={columns} />
              </Paper>
            </Grid>
        </>
    );
};

export default DoctorDashboard;