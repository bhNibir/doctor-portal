import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{color: "#fff"}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color: "#fff"}}>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Appointment" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color: "#fff"}}>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color: "#fff"}}>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Prescriptions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color: "#fff"}}>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem  button>
      <ListItemIcon style={{color: "#fff"}}>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);

