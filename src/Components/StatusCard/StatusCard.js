import React from 'react';
import { Grid, Paper, makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "#fff",
    }
}))

const StatusCard = ({item}) => {
    const classes = useStyles();
    return (
        <>
          <Grid item xs={3}>
                <Paper style={{backgroundColor: item.color}} className={classes.paper }>
                <Box display="flex" >
                  <Box >
                    <Typography align="center" fontWeight="fontWeightBold" variant="h3" component="h6">
                      {item.total}
                    </Typography>
                    </Box>
                    <Box ml={1} px={2}>
                      <Typography align="justify" color="inherit">
                       {item.text}
                      </Typography>
                    </Box>
                </Box>
                </Paper>
            </Grid> 
        </>
    );
};

export default StatusCard;