import React from 'react';
import Dashboard from '../Dashboard/DashBoard';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const Doctor = () => {
    return (
        <div>
            <DashboardLayout>
                <Dashboard/>
            </DashboardLayout>
            
        </div>
    );
};

export default Doctor;