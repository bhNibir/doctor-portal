import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { useStyles } from '../Home/Home';
import { useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { apiURL } from '../../App';

const options = [
  { value: '1222', label: 'Dr. Nibir' },
  { value: '1223', label: 'Dr. Strawberry' },
  { value: '1224', label: 'Dr. Vanilla' },
  { value: '1224', label: 'Dr. Abul' },
];


const FormDialog = ({ service, selectedDate }) => {
 
    const [open, setOpen] = useState(false);
    const classes = useStyles()
    const [appointment, setAppointment] = useState({
      doctor_id : "",
      date: "",
      patient_name : "",
      patient_email : "",
      patient_number : "",
    })
    const { handleSubmit, register, setValue } = useForm();
    const onSubmit = data => {
      const appointmentData = {
        doctor_id : data.doctorName.value,
        date: data.date,
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
        console.log(data)
        handleClose()
      })
      .catch(err => console.log(err))

      

    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    console.log(appointment)

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
              as={<Select placeholder="Select Doctor" options={options} />}
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
              inputRef={register({required: true, minLength: 6, maxLength: 12})} 
              style={{marginBottom: "5pt"}}
              /> 

              <br/>   
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.btn}>
              Close
            </Button>
            <input  type="submit" className={classes.btn} value="Send" />
              
          </DialogActions>
          </form>
        </Dialog>
      </div>
    );
};

export default FormDialog;