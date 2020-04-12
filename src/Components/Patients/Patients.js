import React, { useEffect, useState } from 'react';
import { Grid, Paper, Box, Typography, makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { apiURL } from '../../App';
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
  }));



const Patients = () => {
    const classes = useStyles();
    const [ handleDateChange] = useState(new Date());
    const [tableData, setTableData] = useState(null)
    const [tableHeader] = useState(
        [   { title: "Sr. No", field: "tableData.id" , render : rowData => rowData.tableData.id+1},
            { field: 'name', title: 'Name' },
            { field: 'gender', title: 'Gender' },  
            { field: 'age', title: 'Age' },
            { field: 'weight', title: 'Weight' },  
            { field: 'contact', title: 'Contact' },    
            { field: 'address', title: 'Address' }    
          ]
    )

    useEffect(()=>{
        fetch(apiURL+"/getpatients")
        .then(response => response.json())
        .then(data => setTableData(data))
    },[])

    return (
        <>
        {
            tableData
            ?
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
                {
                  tableData && <ShowDataTable tableData={tableData} tableHeader={tableHeader} />
                }
                </Paper>
            </Grid>
            :
            <ShowLoading/>
            }
        </>
    );
};

export default Patients;