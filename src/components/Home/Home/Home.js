import React, { useEffect, useState } from "react";
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
import Preloader from "./../../Preloader/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allDoctors")
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setLoading(false);
        } else {
          setLoading(true);
        }
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="preloader d-flex align-items-center justify-content-center">
          <Preloader></Preloader>
        </div>
      ) : (
        <div className="main-container">
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
      )}
    </div>
  );
};

export default Home;
