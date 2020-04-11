import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const NoMatch = () => {
    return (
        <>
            <Navbar/>
            <Typography variant="h1">
                OOPS Page Not Found :(
            </Typography>
            <Link to="/">Go back Home</Link>
        </>
    );
};

export default NoMatch;