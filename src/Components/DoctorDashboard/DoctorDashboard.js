import React, { useEffect } from 'react';
import { Grid, makeStyles, Paper, Box, Typography, Button } from '@material-ui/core';
import StatusCard from '../StatusCard/StatusCard';
import { useState } from 'react';
import { apiURL } from '../../App';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import ShowDataTable from '../ShowDataTable/ShowDataTable';
import ShowLoading from '../ShowLoading/ShowLoading';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gradientText: {
        background: 'linear-gradient(45deg, #19D3AE 30%, #0FCFEC 90%)', 
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        },
    btn: {
      background: 'linear-gradient(45deg, #19D3AE 30%, #0FCFEC 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      },
  }));

  

const DoctorDashboard = () => {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [tableData, setTableData] = useState(null)

    const [tableHeader, setTableHeader] = useState(
      [
        { title: 'Date', field: 'date' },
        { title: 'Time', field: 'time' },
        { title: 'Name', field: 'patient_name' },
        { title: 'Contact', field: 'patient_number' },
        {
          field: '_id',
          title: 'Prescription',  
          render: rowData =>  <Button className={classes.btn} onClick={()=>handleClick(rowData)}>View</Button>
        }
      ]
    )
    
    const statusCardItems = [
        {total: 29, text: "Pending Appointments", color: "#F1536E"},
        {total: 20, text: "Today’s Appointments", color: "#3DA5F4"},
        {total: 12, text: "Total Appointments", color: "#00C689"},
        {total: 72, text: "Total Patients", color: "#FDA006"}
    ]
    
    useEffect(()=>{
        fetch(apiURL+"/getallappointments")
        .then(response => response.json())
        .then(data => setTableData(data))
    },[])       
    const handleClick= rowData => {
        console.log(rowData)
    }
    
    return (
      <> {
        tableData ? 
      
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
            
                {
                  tableData && <ShowDataTable tableData={tableData} tableHeader={tableHeader} />
                }
              </Paper>
            </Grid>
            
        </>:
        <ShowLoading/>
      }
      </>          

    );
};

export default DoctorDashboard;