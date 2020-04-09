import React, { useState } from 'react';
import Home from '../Home/Home';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date);
    };
    return (
        <>
            <Home>
                <AppointmentCalender
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                />
            </Home>
        
        </>
    );
};

export default Appointment;