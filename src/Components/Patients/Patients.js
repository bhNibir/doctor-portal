import React, { useEffect, useState } from 'react';
import { Grid, Paper, Box, Typography, makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DataTable from '../DataTable/DataTable';
import { apiURL } from '../../App';
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
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'gender', label: 'Gender', minWidth: 100 },  
    { id: 'age', label: 'Age', minWidth: 50 },
    { id: 'weight', label: 'Weight', minWidth: 50 },  
    { id: 'contact', label: 'Contact', minWidth: 100 },    
    { id: 'address', label: 'Address', minWidth: 200 }    
  ];


const Patients = () => {

    const [selectedDate, handleDateChange] = useState(new Date());
    const [patients, setPatients] = useState(null)
    const [columns, setColumns] = useState(tableColumns)
    const classes = useStyles();

    useEffect(()=>{
        fetch(apiURL+"/getpatients")
        .then(response => response.json())
        .then(data => setPatients(data))
    },[])

    return (
        <>
        <Grid item>
            <Paper>
                <Box display="flex" p={1} >
                    <Box flexGrow={1} p={2}>
                    <Typography className={classes.gradientText} gutterBottom variant="h6" component="h6">
                        All Patients
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
                <DataTable rows={patients} columns={columns} />
                </Paper>
            </Grid>
        </>
    );
};

export default Patients;