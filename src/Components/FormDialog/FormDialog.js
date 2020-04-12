import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { useStyles } from '../Home/useStyle';
import { useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { apiURL } from '../../App';
import AlertMessage from '../AlertMessage/AlertMessage'

const options = [
  { value: '1222', label: 'Dr. Nibir' },
  { value: '1223', label: 'Dr. Strawberry' },
  { value: '1224', label: 'Dr. Vanilla' },
  { value: '1224', label: 'Dr. Abul' },
];

// this style for react-select
const selectStyles = {
  menu: base => ({
    ...base,
    zIndex: 100
  })
};

const FormDialog = ({ service, selectedDate }) => {
    const [alert, setAlert] = useState(null)
    const [open, setOpen] = useState(false);
    const classes = useStyles()
    const [appointment,setAppointment] = useState({
      doctor_id : "",
      date: "",
      time: "",
      patient_name : "",
      patient_email : "",
      patient_number : "",
    })
    const { handleSubmit, register, setValue } = useForm();
    const onSubmit = data => {
      const appointmentData = {
        doctor_id : data.doctorName.value,
        date: data.date,
        time: data.time,
        patient_name : data.patientName,
        patient_email : data.email,
        patient_number : data.phone,
      }
      setAppointment(appointmentData)
      //sent data to DataBase
      fetch(apiURL+"/addappointment", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(appointmentData)
      })
      .then(response => response.json())
      .then(data => {
        handleClose()
        setAlert({type : 'success', message : 'Thank You For Appointment'})
      })
      .catch(err => {
        setAlert({type : 'error', message : err})
      })

    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setAppointment({})
      setOpen(false);
    };

    const convertDate = date => {
       const newDate = JSON.stringify(date)
       return  newDate.slice(1, 11)
    }
    
    return (
      <div>
        <Button  className={classes.btn}  onClick={handleClickOpen}>
          BOOK APPOINTMENT
        </Button>
        <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.gradientText} id="form-dialog-title" align="center">{service.treatment}</DialogTitle>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
            <RHFInput
              as={<Select 
                placeholder="Select Doctor" 
                options={options} 
                styles={selectStyles}
             />}
              rules={{ required: true }}
              name="doctorName"
              register={register}
              setValue={setValue}
              label="Doctor Name"
            />
              <br/>
              <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Your Name" 
                name="patientName" 
                inputRef={register({required: true, maxLength: 180})}
                style={{marginBottom: "5pt"}}
                />

              <br/>
              <TextField 
              fullWidth
              size="small"
              variant="outlined" 
              type="text" 
              label="Email" 
              name="email" 
              inputRef={register({required: true, pattern: /^\S+@\S+$/i})} 
              style={{marginBottom: "5pt"}}
              />

              <br/>
              <TextField 
              fullWidth
              size="small"
              variant="outlined" 
              type="tel" 
              label="Phone number" 
              name="phone" 
              inputRef={register({required: true, minLength: 6, maxLength: 12})} 
              style={{marginBottom: "5pt"}}
              /> 

              <br/>
              <TextField 
              fullWidth
              size="small"
              variant="outlined" 
              type="date"
              defaultValue = {convertDate(selectedDate)} 
              name="date" 
              inputRef={register} 
              style={{marginBottom: "5pt"}}
              disabled
              /> 

              <br/>   
              <TextField 
              fullWidth
              size="small"
              variant="outlined" 
              type="text"
              defaultValue = {service.time} 
              name="time" 
              inputRef={register} 
              style={{marginBottom: "5pt"}}
              disabled
              /> 
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.btn}>
              Close
            </Button>
            <Button onClick={handleClose} className={classes.btn} type="submit">
              Submit
            </Button>
          </DialogActions>
          </form>
        </Dialog>

        {
          alert && <AlertMessage AlertMessage={alert.message} alertType={alert.type}/>
          
        }
      </div>
    );
};

export default FormDialog;