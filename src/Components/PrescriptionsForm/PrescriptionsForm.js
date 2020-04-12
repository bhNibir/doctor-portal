import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const PrescriptionsForm = ({open, setOpen, patientInfo}) => {
    const { handleSubmit, register, setValue } = useForm();

    const onSubmit = data => {
        console.log(data)
        console.log(patientInfo)
        handleClose()
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
                name="doctorID" 
                inputRef={register({required: true, maxLength: 180})}
                style={{marginBottom: "5pt"}}
                defaultValue={patientInfo.doctor_id}
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
                defaultValue={patientInfo.patient_name}
            />
             <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Medicine" 
                name="medicine1" 
                inputRef={register({required: true, maxLength: 180})}
                style={{marginBottom: "5pt"}}
            />
            <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Medicine" 
                name="medicine2" 
                inputRef={register({maxLength: 180})}
                style={{marginBottom: "5pt"}}
            />
            <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Medicine" 
                name="medicine3" 
                inputRef={register({ maxLength: 180})}
                style={{marginBottom: "5pt"}}
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
    </>
  );
}
export default PrescriptionsForm;