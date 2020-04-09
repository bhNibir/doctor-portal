import React from 'react';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const AppointmentCalender = ({selectedDate, handleDateChange}) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <DatePicker
            autoOk
            disableToolbar
            variant="static"
            openTo="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
};

export default AppointmentCalender;