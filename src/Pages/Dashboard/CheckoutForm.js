import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [txnId, setTxnId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const {_id, partName, totalPrice, userName, userEmail} = order;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setSuccess("");
    setCardError(error?.message || "");

    //confirm payment
    const {paymentIntent, intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      },
    );

    if(intentError){
      setSuccess("");
      setCardError(intentError.message);
    }
    else{
      setTxnId(paymentIntent.id);
      setSuccess(`Congrats! Your payment for ${partName} of <b>$${totalPrice} is completed.`);
      toast.success("Payment Successful");  
      
      const payment = {
        paid: true,
        status: "pending", 
        transactionId: paymentIntent.id,
      }

      fetch(`https://robotics-parts-store.herokuapp.com/order/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(payment),
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          // console.log(data);
        }
      })
    }
  };


  useEffect( ()=> {
    fetch('https://robotics-parts-store.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({totalPrice})
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret))
  }, [totalPrice])




  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn rounded btn-success btn-sm mt-3" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {
        cardError && <p className="text-red-500 text-sm">{cardError}</p>
      }

      {
        success && <div>
          <p className="text-green-500 text-sm font-bold">{success}</p>
          <p>Your transaction id: <span className="text-orange-500 font-bold">{txnId}</span></p>
        </div>
      }
    </form>
  );
};

export default CheckoutForm;
