import React from 'react';
import { ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link as RouterLink } from 'react-router-dom';






export const mainListItems = (
  <div>
    
    <MenuItem component={RouterLink} to="/doctor/dashboard" button>
      <ListItemIcon style={{color: "#fff"}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </MenuItem>
    <MenuItem component={RouterLink} to="/doctor/appointment" button>
      <ListItemIcon style={{color: "#fff"}}>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Appointment" />
    </MenuItem>
    <MenuItem component={RouterLink} to="/doctor/patients" button>
      <ListItemIcon style={{color: "#fff"}}>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </MenuItem>
    <MenuItem component={RouterLink} to="/doctor/prescriptions" button>
      <ListItemIcon style={{color: "#fff"}}>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Prescriptions" />
    </MenuItem>
    <MenuItem component={RouterLink} to="/doctor/settings" button>
      <ListItemIcon style={{color: "#fff"}}>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </MenuItem>
    <MenuItem component={RouterLink} to="/" button>
      <ListItemIcon style={{color: "#fff"}}>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </MenuItem>
  </div>
);

