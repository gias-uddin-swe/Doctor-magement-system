import React from 'react';
import './TopHeader.css';
import ServiceCart from './../ServiceCart/ServiceCart';

const TopHeader = () => {


    return (
        <div className="top-header">
            <div className="main-heading">
            <h1 className="header">NOW, YOU CAN BOOK YOUR <br />
                    APPOINTMENT ONLINE!</h1>
<h5 className="mini-header">MEDICAL APPOINTMENT MANAGEMENT SYSTEM (IU)</h5>
<button className="btn btn-primary mt-4">Get a Appointment</button>
            </div>




        </div>
    );
};

export default TopHeader;