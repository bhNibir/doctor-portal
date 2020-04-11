import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, TableFooter, TablePagination, makeStyles, Button} from '@material-ui/core';
import { useEffect } from 'react';
import { apiURL } from '../../App'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const columns = [
    { id: 'patient_name', label: 'Name', minWidth: 170 },
    { id: 'time', label: 'Schedule', minWidth: 100 },
  ];

  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    btn: {
        background: 'linear-gradient(45deg, #19D3AE 30%, #0FCFEC 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        },
  });

const DataTable = () => {
    const [rows, setRows] = useState(null)
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    
    
    useEffect(()=> {
        fetch(apiURL+'/getappointment')
        .then(response => response.json())
        .then(data => setRows(data))
        .catch(err => console.log(err))
    },[])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                <TableCell style={{ minWidth: 100 }}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    <TableCell><Button className={classes.btn}>Not Visited <ArrowDropDownIcon /></Button></TableCell>
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows && rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    </>
    );
};

export default DataTable;