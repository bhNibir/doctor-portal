import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeSlider from '../HomeSlider/HomeSlider';
import GetAppoint from '../GetAppoint/GetAppoint';



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