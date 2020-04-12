import React, { useState, useEffect } from 'react';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';
import { Grid, Paper, Typography, Box, Button, makeStyles } from '@material-ui/core';
import { apiURL } from '../../App';
import ShowDataTable from '../ShowDataTable/ShowDataTable';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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


const DoctorAppointment = () => {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(false);

    const [tableData, setTableData] = useState(null)
    const tableHeader = [
      { field: 'patient_name', title: 'Name' },
      { field: 'time', title: 'Schedule' },
      {
        field: '_id',
        title: 'Prescription',  
        render: rowData =>  <Button className={classes.btn} onClick={()=>handleClick(rowData)}>Add</Button>
      },
      {
        field: '', 
        title: 'Action',
        render: rowData => <Button size="small" className={classes.btn}>Not Visited <ArrowDropDownIcon /></Button>
      }
    ];

    const handleDateChange = date => {
        setLoading(true)
        setSelectedDate(date);
    };

    const handleClick= rowData => {
      console.log(rowData)
    }

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
      .then(data => {
        setTableData(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
    },[selectedDate])
    return (
        <>
        {
          tableData ?
          <Grid container spacing={3}>
            {/* Doctor Appointment Calender */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper>
                <AppointmentCalender
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                    />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={8} lg={9}>
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
                {
                  loading 
                  ?
                  <ShowLoading/>
                  :
                  <ShowDataTable tableHeader={tableHeader} tableData={tableData}/>
                }
                
              </Paper>
            </Grid>

            </Grid>
          :
          <ShowLoading/>
        }
        </>
    );
};

export default DoctorAppointment;