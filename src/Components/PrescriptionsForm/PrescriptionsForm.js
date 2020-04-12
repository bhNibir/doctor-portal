import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { apiURL } from '../../App';
import AlertMessage from '../AlertMessage/AlertMessage';

const PrescriptionsForm = ({open, setOpen, prescriptionInfo}) => {
    const [alert, setAlert] = useState(null)
    const { handleSubmit, register, setValue } = useForm();

    const onSubmit = data => {
        const {patientName, ...rest} = data
        const {patient_email} = prescriptionInfo
        const prescriptionData = {patient_email, ...rest}
        console.log(prescriptionData)

        //sent data to DataBase
        fetch(apiURL+"/addprescriptions", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prescriptionData)
        })
        .then(response => response.json())
        .then(data => {
            handleClose()
            setAlert({type : 'success', message : 'Prescription Added'})
        })
        .catch(err => {
            setAlert({type : 'error', message : err})
        })
    }
    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="form-dialog-title">Add Prescriptions</DialogTitle>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
            <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Doctor ID" 
                name="doctor_id" 
                inputRef={register({required: true, maxLength: 180})}
                style={{marginBottom: "5pt"}}
                defaultValue={prescriptionInfo.doctor_id}
                disabled
            />
            <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Patient Name" 
                name="patientName" 
                inputRef={register({required: true, maxLength: 180})}
                style={{marginBottom: "5pt"}}
                defaultValue={prescriptionInfo.patient_name}
            />
             <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Medicine" 
                name="medicine1" 
                inputRef={register({required: true, maxLength: 180})}
                style={{marginBottom: "5pt"}}
                defaultValue={prescriptionInfo.medicine1 || ""}
            />
            <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Medicine" 
                name="medicine2" 
                inputRef={register({maxLength: 180})}
                style={{marginBottom: "5pt"}}
                defaultValue={prescriptionInfo.medicine2 || ""}
            />
            <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Medicine" 
                name="medicine3" 
                inputRef={register({ maxLength: 180})}
                style={{marginBottom: "5pt"}}
                defaultValue={prescriptionInfo.medicine3 || ""}
            />
            
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                
                <Button
                color="primary"
                type="submit"
                variant="contained"
                >
                    ADD
                </Button>
            </DialogActions>
            </form>
        </Dialog>
        {
          alert && <AlertMessage AlertMessage={alert.message} alertType={alert.type}/>
          
        }
    </>
  );
}
export default PrescriptionsForm;