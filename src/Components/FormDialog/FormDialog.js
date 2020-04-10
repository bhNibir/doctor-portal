import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Input, MenuItem, Select } from '@material-ui/core';
import { useStyles } from '../Home/Home';
import { useForm, Controller } from 'react-hook-form';

const FormDialog = ({service}) => {
 
    const [open, setOpen] = useState(false);
    const classes = useStyles()
    
    const { control, handleSubmit, register } = useForm();
    const onSubmit = data => console.log(data);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button  className={classes.btn}  onClick={handleClickOpen}>
          BOOK APPOINTMENT
        </Button>
        <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title" align="center">
        <DialogTitle className={classes.gradientText} id="form-dialog-title">{service.treatment}</DialogTitle>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
                <section>
                <Controller
                  as={
                    <Select
                    size="small"
                    variant="outlined"
                    label="Select Doctor"  
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  }
              name="Select"
              control={control}
            />
              </section>
              <br/>
              <TextField 
                fullWidth
                size="small"
                variant="outlined"
                label="Your Name" 
                name="patient-name" 
                inputRef={register({required: true, maxLength: 180})}
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
              /> 

              <br/>   
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.btn}>
              Cancel
            </Button>
            <input  type="submit" onClick={handleClose} className={classes.btn} value="Send" />
              
          </DialogActions>
          </form>
        </Dialog>
      </div>
    );
};

export default FormDialog;