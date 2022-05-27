import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
  } = useForm();

  // get profile data
  const {
    data: profileInfo,
    isLoading,
    refetch,
  } = useQuery(["profile", user?.email], (req, res) =>
    fetch(`http://localhost:5000/profile/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //form submit handler
  const onSubmit = async (data) => {
    const { education, location, linkedin, phone } = data;
    const email = user?.email;

    const profile = {
      name: user.name,
      email: user.email,
      education: education,
      location: location,
      linkedin: linkedin,
      phone: phone,
    };

    fetch(`http://localhost:5000/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Profile Updated successfully.");
          refetch();
        }
      });
  };

  if(isLoading){
    return <Loading />;
  }

  return (
    <div>
      <div className="py-5">
        <h2 className="text-2xl font-bold text-secondary text-center my-4 underline underline-offset-2">
          MY PROFILE
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="card w-80 max-w-4xl bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-48 rounded-full">
                <img src={user?.photoURL || "https://i.ibb.co/YcyKMGW/user.png"} alt="avatar" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <div className="my-2">
              <h2 className="text-xl font-bold text-slate-800">
                {user?.displayName}
              </h2>
              <p className="text-md font-bold text-slate-800">
                Email: {user?.email}
              </p>
            </div>
            {profileInfo?.education && <div className="card-actions justify-start">
              <div>
                <h3 className="text-primary underline underline-offset-2 font-semibold text-sm">Other Information</h3>
                <p className="text-slate-600 font-semibold text-md mt-1">
                  <b>Education: </b>
                  {profileInfo?.education}{" "}
                </p>
                <p className="text-slate-600 font-semibold text-md">
                  <b>Location: </b>
                  {profileInfo?.location}{" "}
                </p>
                <p className="text-slate-600 font-semibold text-md">
                  <b>LinkedIn: </b>
                  {profileInfo?.linkedin}{" "}
                </p>
                <p className="text-slate-600 font-semibold text-md">
                  <b>Phone: </b>
                  {profileInfo?.phone}{" "}
                </p>
              </div>
            </div>}
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
                      defaultValue={profileInfo?.education}
                      className="input input-bordered"
                      {...register("education")}
                    />
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      placeholder="City/District"
                      defaultValue={profileInfo?.location}
                      className="input input-bordered"
                      {...register("location")}
                    />
                    <label className="label">
                      <span className="label-text">LinkedIn</span>
                    </label>
                    <input
                      type="text"
                      placeholder="LinkedIn Profile Link"
                      defaultValue={profileInfo?.linkedin}
                      className="input input-bordered"
                      {...register("linkedin")}
                    />
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone"
                      defaultValue={profileInfo?.phone}
                      className="input input-bordered"
                      {...register("phone")}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Update Profile"
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
