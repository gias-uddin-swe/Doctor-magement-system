import React from 'react';
import './HowToUse.css';

const HowToUse = () => {
    return (
        <div className="container howToUse-container">
            
<div className="row ">
    <div className="col-md-6">
    <h1>¿How to use our Platform?</h1>
    <p>Are not sure how to use our Platform? Here, we're going to do more details about how to do it. Just click it!</p>
    <div className="reaction row">
<div className="col-md-4">
    <div className="react mt-2">
        <h1>100%</h1>
        <h6>USABLE</h6>
    </div>
    
</div>
<div className="col-md-4">
    <div className="react mt-2">
        <h1>100%</h1>
        <h6>USABLE</h6>
    </div>
  
</div>
<div className="col-md-4">
    <div className="react mt-2">
        <h1>100%</h1>
        <h6>USABLE</h6>
    </div>
</div>
<button className="btn btn-success mt-5">GET MY  APPOINTMENT</button>
    </div>
    </div>
    <div className="col-md-6">
        <div className="youtube-video">

        <video width="320" height="240" controls>
  <source src="https://youtu.be/r06kDev9D1s"/>
</video>
       
        </div>
    </div>
</div>

        </div>
    );
};

export default HowToUse;