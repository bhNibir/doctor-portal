import React from 'react';
import Navbar from '../Navbar/Navbar';
import { makeStyles } from '@material-ui/core';
import HomeSlider from '../HomeSlider/HomeSlider';
import GetAppoint from '../GetAppoint/GetAppoint';
export const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    toolbar: {
      flexWrap: 'wrap',
    },
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
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
}
))


const BackgroundHead = {
  background: `url(${"https://i.imgur.com/b3PEor0.png"})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  }

const Home = (props) => {
    return (
        <div style={BackgroundHead}>
            <Navbar/>
            <HomeSlider>
              {
                props.children? props.children : <GetAppoint/>
              }
            </HomeSlider>
        </div>
    );
};

export default Home;