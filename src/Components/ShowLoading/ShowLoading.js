import React from 'react';
import { Grid } from '@material-ui/core';
import Loader from 'react-loader-spinner'

const ShowLoading = () => {

    return (
        <>
            <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '80vh' }}
        >
      
        <Grid item xs={3}>
        <Loader
              type="Rings"
              color="#19D3AE"
              height={100}
              width={100}
          /> 
        </Grid>      
      </Grid> 
       
        </>
    );
};

export default ShowLoading;