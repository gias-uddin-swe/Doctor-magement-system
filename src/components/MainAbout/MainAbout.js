import React from "react";
import Question from "./../Question/Question";
import HowToUse from "./../Home/HowToUse/HowToUse";
import Footer from "../Home/Footer/Footer";
import About from "./../Home/About/About";

const MainAbout = () => {
  return (
    <div>
      <About></About>
      <Question></Question>
      <HowToUse></HowToUse>
      <Footer></Footer>
    </div>
  );
};

export default MainAbout;
