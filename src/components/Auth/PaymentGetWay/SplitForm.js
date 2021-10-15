import React, { useContext, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./payment.css";
import { userContext } from "./../../../App";
import { useHistory, useParams } from "react-router";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ handlePayment }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { doctorEmail } = useParams();
  console.log(doctorEmail);

  const [error, setError] = useState(null);
  const [show, setShow] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    // setError(payload.error.message);
    if (payload.paymentMethod) {
      console.log(payload.paymentMethod.id);
      const cardInfo = { ...loggedInUser };
      cardInfo.cardNumber = payload.paymentMethod.id;
      cardInfo.paymentSuccess = true;
      setLoggedInUser(cardInfo);
      setShow(true);
      setError("");
      redireact();
    }
    if (payload.error) {
      setShow(false);
      setError(payload.error.message);
    }
    // console.log("[PaymentMethod]", payload.paymentMethod.id);
  };

  const redireact = () => {
    history.push(`/applyAppointment/${doctorEmail}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />

      <button
        onClick={() => handlePayment(show)}
        className="pay-btn mt-3"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      {show ? (
        <p style={{ color: "green" }}>
          you have successfully Done your Payment
          <br />
          Thank you for
        </p>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </form>
  );
};

export default SplitForm;
