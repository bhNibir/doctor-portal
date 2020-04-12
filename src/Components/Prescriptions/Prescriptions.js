import React, { useEffect, useState } from 'react';
import { Grid, Paper, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ShowDataTable from '../ShowDataTable/ShowDataTable';
import ShowLoading from '../ShowLoading/ShowLoading';
import DateFnsUtils from '@date-io/date-fns';
import { apiURL } from '../../App';
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

  
const Prescriptions = () => {
    const classes = useStyles();
    const [handleDateChange] = useState(new Date());
    const [tableData, setTableData] = useState(null)
    const [open, setOpen] = useState(false);
    const [prescriptions, setPrescriptions] = useState(null);
    const [tableHeader] = useState(
      [
        { title: "Sr. No", field: "tableData.id" , render : rowData => rowData.tableData.id+1},
        { title: 'Date', field: 'date' },
        { title: 'Name', field: 'patient_name' },
        { title: 'Contact', field: 'patient_number' },
        {
          field: '_id',
          title: 'Prescription',  
          render: rowData =>  <Button className={classes.btn} onClick={()=>handleClick(rowData)}>View</Button>
        }
      ]
    )
   
    
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
        })
        .catch(err => console.log(err))
    }
    
    return (
      <> {
        tableData ? 
      
        <>
        <Grid item>
            <Paper>
              <Box display="flex" p={1} >
                <Box flexGrow={1} p={2}>
                  <Typography className={classes.gradientText} gutterBottom variant="h6" component="h6">
                      All Prescriptions
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
        {
          prescriptions && <ShowPrescriptions open={open} setOpen={setOpen} prescriptions={prescriptions}/>
        }
      </>          
        
    );
};

export default Prescriptions;