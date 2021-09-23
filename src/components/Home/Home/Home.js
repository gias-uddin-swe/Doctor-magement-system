import React from 'react';
import Question from '../../Question/Question.js';
import Blogs from '../Blogs/Blogs.js';
import Doctors from '../Doctors/Doctors.js';
import Footer from '../Footer/Footer.js';
import HowToUse from '../HowToUse/HowToUse.js';

import ServiceCart from '../ServiceCart/ServiceCart';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <ServiceCart></ServiceCart>
            <Question></Question>
            <Doctors></Doctors>
            <Blogs></Blogs>
            <HowToUse></HowToUse>
            <Footer></Footer>
        </div>
    );
};

export default Home;