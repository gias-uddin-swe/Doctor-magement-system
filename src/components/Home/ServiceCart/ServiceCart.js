import React from 'react';
import './ServiceCart.css';

const ServiceCart = () => {
    const fakeData=[
        {
            title:"Book an Appointment",
            descriptor:"Now, you can book your appointment online! Just register or Login",
            buttonTitle:"Get Appointment"
        },
        {
            title:"Book an Appointment",
            descriptor:"Now, you can book your appointment online! Just register or Login",
            buttonTitle:"Get Appointment"
        },
        {
            title:"Book an Appointment",
            descriptor:"Now, you can book your appointment online! Just register or Login",
            buttonTitle:"Get Appointment"
        },
    ]
    return (
        <div className="row services">
{
    fakeData.map(pd=><div className="col-md-6 col-lg-4 col-sm-12 service-cart">
            <h1>{pd.title}</h1>
            <p>{pd.descriptor}</p>
            <button className="btn btn-primary">{pd.buttonTitle}</button>
    </div>)
}

        </div>
    );
};

export default ServiceCart;