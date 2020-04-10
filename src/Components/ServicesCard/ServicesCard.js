import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Box } from '@material-ui/core';
import { useStyles } from '../Home/Home';
import FormDialog from '../FormDialog/FormDialog';


const ServicesCard = ({ service, selectedDate }) => {    
    const classes = useStyles()
    
    return (
        <>
        <Grid item  xs={12} sm={6} md={4}>
              <Card >
                <CardContent  align="center">
                  <Typography className={classes.gradientText} gutterBottom variant="h6" component="h2">
                    <Box mt={2}>
                        {service.treatment}
                    </Box>
                  </Typography>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                        {service.time}
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <Box mt={2} fontSize={12}>
                        {service.spaces}
                    </Box>
                  </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Box mb={2}>
                        <FormDialog selectedDate={selectedDate} service={service} />
                    </Box>
                </CardActions>
              </Card>
            </Grid>
        </>
    );
};

export default ServicesCard;