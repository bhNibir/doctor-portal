import React, { useState } from 'react';
import Home from '../Home/Home';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <>
            <Home>
                <AppointmentCalender
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                />
            </Home>
            <AvailableAppointments selectedDate={selectedDate}/>
        
        </>
    );
};

export default Appointment;