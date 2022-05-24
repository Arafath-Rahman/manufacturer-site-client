import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, lUser, lLoading, lError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  //form submit handler
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (lLoading) {
    return <Loading />;
  }

  if (lUser) {
    navigate("/");
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="card lg:w-96 w-80 shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary">
              {" "}
              LOGIN{" "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum length is 6",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.password.message}
                  </span>
                )}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                <span className="card-actions flex justify-center text-sm text-slate-800 mt-3 mb-0">
                  Need an account?
                  <Link to="/signup" className="link link-hover text-secondary">
                    Signup here
                  </Link>
                </span>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="card-actions justify-center">
              <button onClick={()=> signInWithGoogle()} className="btn btn-outline btn-secondary rounded-lg">
                <FcGoogle className="text-xl mr-2" /> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
