import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    root: {
        display: 'flex',
        backgroundColor: "#F4FDFB",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
            },
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        flexWrap: 'wrap',
      },
      toolbarIcon: {
        color: "#fff",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none !important',
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        background: 'linear-gradient(160deg, #19D3AE 30%, #0FCFEC 90%)',
        color: "#fff",
        position: "relative !important",
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
      icon: {
        color: '#fff',
      }
    ,
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 3.5),
    },
    btn: {
      background: 'linear-gradient(45deg, #19D3AE 30%, #0FCFEC 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#fff !important',
      height: 48,
      padding: '0 30px',
      },
    gradientText: {
      background: 'linear-gradient(45deg, #19D3AE 30%, #0FCFEC 90%)', 
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      },
    table: {
      minWidth: 650,
      },

}))