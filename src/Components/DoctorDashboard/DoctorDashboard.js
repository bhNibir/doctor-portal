import React, { useEffect } from 'react';
import { Grid, makeStyles, Paper, Box, Typography, Button } from '@material-ui/core';
import StatusCard from '../StatusCard/StatusCard';
import { useState } from 'react';
import { apiURL } from '../../App';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import ShowDataTable from '../ShowDataTable/ShowDataTable';
import ShowLoading from '../ShowLoading/ShowLoading';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PrescriptionsForm from '../PrescriptionsForm/PrescriptionsForm';
import ShowPrescriptions from '../ShowPrescriptions/ShowPrescriptions';

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

  const tableActions = [
    {
      icon : () => <Button 
      component="span"
      variant="contained"
      style={{textTransform: 'none', backgroundColor: "#76C5FF", color:'#fff'}}
      size="small">Pending</Button>,
      tooltip: 'Save User',
      onClick: (event, rowData) => alert("You saved " + rowData.name)
    },
    rowData => ({
      icon: () => <Button 
      component="span"
      variant="contained"
      style={{textTransform: 'none', backgroundColor: "#FFD076", color:'#fff'}}
      size="small"><EditOutlinedIcon/></Button>,
      tooltip: 'Edit',
      onClick: (event, rowData) => alert("You want to delete " + rowData.name),
      disabled: rowData.birthYear < 2000
    })
  ]

const DoctorDashboard = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [prescriptions, setPrescriptions] = useState(null);
    const [selectedDate, handleDateChange] = useState(new Date());
    const [tableData, setTableData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [tableHeader, setTableHeader] = useState(
      [
        { title: "Sr. No", field: "tableData.id" , render : rowData => rowData.tableData.id+1},
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
        setOpen(true);
        const {patient_email}=rowData
        fetch(apiURL+'/getprescriptions',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({patient_email})
      })
        .then(response => response.json())
        .then(data => {
          data.name = rowData.patient_name
          setPrescriptions(data)
          setLoading(false)
        })
        .catch(err => console.log(err))
    }
    
    return (
      <> {
        tableData ? 
      
        <>
           <Box mb={3}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            statusCardItems.map(item => <StatusCard key={item.color} item={item}></StatusCard>)
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
                  tableData && <ShowDataTable tableData={tableData} tableHeader={tableHeader} tableActions={tableActions}/>
                }
              </Paper>
            </Grid>
            
        </>:
        <ShowLoading/>
      }
        {
          prescriptions && <ShowPrescriptions open={open} setOpen={setOpen} prescriptions={prescriptions}/>
        }
      </>          

    );
};

export default DoctorDashboard;