import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { ImStarFull } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useUserInfo from "../../hooks/useUserInfo";

const PartsPurchaseDetail = () => {
  const { partId } = useParams();
  const navigate = useNavigate();
  const [part, setPart] = useState(null);
  const [user] = useAuthState(auth);
  const [userInfo] = useUserInfo(user?.email);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const totalPrice = part.price * data.orderQuantity;
    const order = {
      userName: userInfo.name,
      userEmail: userInfo.email,
      userAddress: data.address,
      userPhone: data.phone,
      partId: part._id,
      partName: part.name,
      orderQuantity: data.orderQuantity,
      totalPrice: totalPrice,
      paid: false,
      transactionId: "none",
      status: "unpaid",
    };

    //adding data to orderCollection
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(
            'Order Place successful.'
          );
          navigate("/parts")
        }
        // refetch();
      });
  };

  //getting part data
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partId]);

  //function to generate number of review star
  const reviewStarGenerator = (review) => {
    let stars = [];
    for (let i = 0; i < review; i++) {
      stars.push(<ImStarFull key={i} className="mr-1 text-accent" />);
    }
    return stars;
  };

  //watching orders quantity to disable "Order Now" btn
  const watchOrderQuantity = watch("orderQuantity");

  return (
    <div className="card w-10/12 lg:w-7/12 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-primary text-center mb-3">
          {part?.name}
        </h2>
        <figure className="bg-white">
          <img src={part?.image} alt="Shoes" className="w-3/6" />
        </figure>
        <p className="text-slate-600 mt-3">
          <strong>Description:</strong> {part?.description}
        </p>
        <div className="card-actions flex flex-col lg:flex-row justify-between items-center mt-5">
          <div className="text-xl font-extrabold text-secondary">
            <span className="text-primary mr-2">Price: </span>${part?.price}
          </div>
          <div className="text-xl font-extrabold text-secondary flex items-center">
            <span className="text-primary mr-2">Review: </span>
            {reviewStarGenerator(part?.review)}
          </div>
        </div>
        <div className="card-actions flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="text-xl font-extrabold text-secondary">
            <span className="text-primary mr-2">MOQ: </span>
            {part?.moq} pcs
          </div>
          <div className="text-xl font-extrabold text-secondary flex items-center">
            <span className="text-primary mr-2">Available Stock: </span>
            {part?.stock} pcs
          </div>
        </div>
        <div className="card-actions flex flex-col justify-center items-center mb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start"
          >
            <div className="w-full max-w-xs flex items-center mb-3">
              <label className="label">
                <span className="text-center mx-auto font-bold text-slate-800 mr-2">
                  Name
                </span>
              </label>
              <input
                type="text"
                value={userInfo?.name}
                defaultValue={userInfo?.name}
                disabled={true}
                className="input input-bordered w-full"
                {...register("displayName")}
              />
            </div>
            <div className="w-full max-w-xs flex items-center">
              <label className="label">
                <span className="text-center mx-auto font-bold text-slate-800 mr-2">
                  Email
                </span>
              </label>
              <input
                type="text"
                value={userInfo?.email}
                defaultValue={userInfo?.email}
                disabled={true}
                className="input input-bordered w-full"
                {...register("email")}
              />
            </div>
            <div className="w-full max-w-xs flex items-center">
              <label className="label">
                <span className="text-center mx-auto font-bold text-slate-800 mr-2">
                  Order Quantity:
                </span>
              </label>
              <div>
                <input
                  type="number"
                  defaultValue={part?.moq}
                  className="input input-bordered input-primary input-sm w-full max-w-xs mt-5"
                  {...register("orderQuantity", {
                    required: {
                      value: true,
                      message: "Order Quantity is required",
                    },
                    max: {
                      value: `${part?.stock}`,
                      message: `You can order maximum ${part?.stock} pieces`,
                    },
                    min: {
                      value: `${part?.moq}`,
                      message: `You have to order minimum ${part?.moq} pieces`,
                    },
                  })}
                />
                <label className="label block">
                  {errors.orderQuantity && (
                    <span className="text-sm text-red-500 font-bold flex gap-1">
                      <BiErrorCircle />
                      {errors.orderQuantity.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="w-full max-w-xs flex items-center">
              <label className="label">
                <span className="text-center mx-auto font-bold text-slate-800 mr-2">
                  Address:
                </span>
              </label>
              <div>
                <input
                  type="text"
                  className="input input-bordered input-primary input-sm w-full mt-5"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                />
                <label className="label block">
                  {errors.address && (
                    <span className="text-sm text-red-500 font-bold flex items-center gap-1">
                      <BiErrorCircle />
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="w-full max-w-xs flex items-center">
              <label className="label">
                <span className="text-center mx-auto font-bold text-slate-800 mr-2">
                  Phone:
                </span>
              </label>
              <div>
                <input
                  type="text"
                  className="input input-bordered input-primary input-sm w-full mt-5"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone Number is required",
                    },
                  })}
                />
                <label className="label block">
                  {errors.phone && (
                    <span className="text-sm text-red-500 font-bold flex items-center gap-1">
                      <BiErrorCircle />
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="mt-3">
              <input
                type="submit"
                disabled={
                  watchOrderQuantity < part?.moq ||
                  watchOrderQuantity > part?.stock
                }
                value="Order Now"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartsPurchaseDetail;
