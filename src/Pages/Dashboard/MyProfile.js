import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //form submit handler
  const onSubmit = async (data) => {
    const { title, description, rating, location } = data;
  };

  return (
    <div>
      <div className="py-5">
        <h2 className="text-2xl font-bold text-prirmary text-center my-4">
          My Profile
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="card max-w-4xl bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-48 rounded-full">
                <img src={user?.photoURL} alt="avatar" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <div className="card-actions justify-center">
              <div>
                <p>Education: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero">
          <div className="hero-content">
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <h2 className="text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary">
                  Add/Edit your Information
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Education</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Current Education Level"
                      className="input input-bordered"
                      {...register("education")}
                    />
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      placeholder="City/District"
                      className="input input-bordered"
                      {...register("city")}
                    />
                    <label className="label">
                      <span className="label-text">LinkedIn</span>
                    </label>
                    <input
                      type="text"
                      placeholder="LinkedIn Profile Link"
                      className="input input-bordered"
                      {...register("linkedin")}
                    />
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="input input-bordered"
                      {...register("phone")}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Add a Review"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
