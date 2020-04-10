import React from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import DoctorDashboard from '../DoctorDashboard/DoctorDashboard';

const Doctor = () => {
    return (
        <div>
            <DashboardLayout>
                <DoctorDashboard/>
            </DashboardLayout>
            
        </div>
    );
};

export default Doctor;