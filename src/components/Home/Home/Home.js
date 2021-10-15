import React from "react";
import Question from "../../Question/Question.js";
import Blogs from "../Blogs/Blogs.js";
import DoctorCarousel from "../DoctorCarousel/DoctorCarousel.js";
import Doctors from "../Doctors/Doctors.js";
import Footer from "../Footer/Footer.js";
import HowToUse from "../HowToUse/HowToUse.js";
import ServiceCart from "../ServiceCart/ServiceCart";
import TopHeader from "../TopHeader/TopHeader";
import Category from "./../Category/Category";
import Services from "./../Services/Services";
import Contact from "./../Contact/Contact";
import About from "./../About/About";

const Home = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <ServiceCart></ServiceCart>
      <Services></Services>
      <Doctors></Doctors>
      <DoctorCarousel></DoctorCarousel>
      <Category></Category>
      <Question></Question>
      <Blogs></Blogs>
      <About></About>
      <HowToUse></HowToUse>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
