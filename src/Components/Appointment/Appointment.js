import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import ShowLoading from '../ShowLoading/ShowLoading';
import { apiURL } from '../../App';
import Navbar from '../Navbar/Navbar';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [services, setServices] = useState(null)
    
    useEffect(()=>{
        fetch(apiURL+"/getservices")
        .then(response => response.json())
        .then(data => setServices(data))
    },[])

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <>
        {
            services
            ?
            <>
                <Home>
                    <AppointmentCalender
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                    />
                </Home>
                <AvailableAppointments selectedDate={selectedDate} services={services}/>
            </>
            :
            <>
                <Navbar/>
                <ShowLoading/>
            </>
        }
        </>
    );
};

export default Appointment;