import React from 'react';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon-chat.png';
import icon3 from '../../images/icon-results.png';
import './Question.css'



const Question = () => {
const fakeData=[
    {
        image:icon1,
        title:"Modify, Cancell, Add Calendar or Print",
        description:"Now, You can create your appointment online also modify, Cancell, Add Calendar, Print it. Where you want!"
    },
    {
        image:icon2,
        title:"Find Doctors",
        description:"MAS has a system where you can know more about doctors, biography, specializations and a pic where you feel confortable to choose who you want."
    },
    {
        image:icon3,
        title:"¿Doubts?",
        description:"MAS has a system where you can chat with a person that is going to help you about how to use the platform and get an appointment."
    },
    {
        image:icon2,
        title:"Check status of Examination Medical",
        description:"You could see the result of examinations and authorizations pending. Everything Online!"
    },


];

    return (
        <div className="FQA">
            <div className="row question-cart">
                {
                    fakeData.map(pd=><div className="col-md-6 col-lg-3 col-sm-12">
                    <div className="cart">
                        <img src={pd.image} alt="" />
                        <h2 className="cart-title">{pd.title}</h2>
                        <p>{pd.description}</p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Question;