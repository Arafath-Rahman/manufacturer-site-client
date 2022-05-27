import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L1uMDFxeGOLmT8G3tnfw2Wuo5d10cvWrbxrL5E97xX4ijO80hVrwsLYavha1tyG67UqNWAJ7lekHRRIwk1FLgW600BmnTmpeC');

const Payment = () => {
  const { orderId } = useParams();

  const url = `https://robotics-parts-store.herokuapp.com/order/${orderId}`;

  const { data: order, isLoading } = useQuery(
    ["order", orderId],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  //payment with stripe

  return (
    <div className="flex flex-col md:flex-row max-w-2xl gap-5 bg-base-100 rounded-xl shadow-xl p-5">
      <div>
        <div className="w-auto">
          <h2 className="text-xl font-bold">
            Please pay{" "}
            <span className="text-orange-500">${order.totalPrice}</span> for
            your order of{" "}
            <span className="text-orange-500">{order.partName}</span>
          </h2>
          <p>
            You have an unpaid order of <b>{order.partName}</b> <br />
            Quantity: <b>{order.orderQuantity}</b> <br />
            Total Payable Amount is: <b>${order.totalPrice}</b>
          </p>
        </div>
      </div>
      <div className="w-full my-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
