import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
// import SplitForm from "./SplitForm";
import SplitForm from "./SplitForm";
import ApplyAppointment from "../../Dashboard/Custumar/ApplyAppointment/ApplyAppointment";
import Footer from "../../Home/Footer/Footer";
// import { SplitForm } from '.SplitForm';

const stripePromise = loadStripe(
  "pk_test_51Ie0nNJoyOci9H9DM8ewASa1jJfVzOGgfhziHVeYpCLGoNAL7yzwWHhjfIJxofWnt4VbnGmhi9du0GZxkPgGCIzU00xfTV5Y1Z"
);
const ProcessPayment = () => {
  const [isTrue, setIsTure] = useState(true);
  const handlePayment = (show) => {
    setIsTure(show);
  };
  return (
    <div className=" mt-5">
      <div className="row container">
        <div className="col-md-6">
          <div className="card-img">
            <img
              className="w-100"
              src="https://i.ibb.co/jgpT4Vk/undraw-Credit-card-re-blml.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <Elements stripe={stripePromise}>
            {/* {isTrue ? (
              <SplitForm handlePayment={handlePayment}></SplitForm>
            ) : (
              // <ApplyAppointment></ApplyAppointment>
              <SplitForm handlePayment={handlePayment}></SplitForm>
            )} */}
            <SplitForm handlePayment={handlePayment}></SplitForm>
          </Elements>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProcessPayment;

//https://i.ibb.co/jgpT4Vk/undraw-Credit-card-re-blml.png
