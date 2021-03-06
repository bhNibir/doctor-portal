import React, { useState } from 'react';
import { DialogActions, Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import ShowDataTable from '../ShowDataTable/ShowDataTable';
import ShowLoading from '../ShowLoading/ShowLoading';

const ShowPrescriptions = ({open, setOpen, prescriptions}) => {

    const [tableHeader] = useState(
        [
          { title: "Sr. No", field: "tableData.id" , render : rowData => rowData.tableData.id+1},
          { title: 'Doctor ID', field: 'doctor_id' },
          { title: 'Medicine', field: 'allmedicine',
            render: rowData => <><p>{rowData.medicine}</p><p>{rowData.medicine1}</p><p>{rowData.medicine2}</p></>
        },
         
        ]
      )
    const handleClose = (value) => {
        setOpen(false);
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="form-dialog-title">Prescriptions of {prescriptions.name}</DialogTitle>
            <DialogContent>
           
                {
                    prescriptions ?
                    <ShowDataTable tableHeader={tableHeader} tableData={prescriptions} />
                    :
                    <ShowLoading/>
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained" fullWidth>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ShowPrescriptions;