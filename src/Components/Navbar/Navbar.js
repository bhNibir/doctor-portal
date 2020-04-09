import React from 'react';
import { AppBar, Toolbar, Typography, Link, makeStyles } from '@material-ui/core';
import { useStyles } from '../Home/Home';


const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Home
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        About
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Dental Services
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Reviews
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Blog
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Contact Us
                    </Link>
                </nav>
                </Toolbar>
            </AppBar>
        
        </>
    );
};

export default Navbar;