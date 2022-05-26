import React from "react";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //form submit handler
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="card lg:w-96 w-80 shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary">
              {" "}
              Add A Review{" "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Review Title"
                  className="input input-bordered"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required"
                    },
                    maxLength: {
                      value: 25, 
                      message: "Max Length of title is 25."
                    }
                  })}
                />
                {errors.title && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.title.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                    maxLength: {
                      value: 250, 
                      message: "Max Length of description is 250."
                    }
                  })}
                />
                {errors.description && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  placeholder="Give a rating between 1-5"
                  className="input input-bordered"
                  {...register("rating", {
                    required: {
                      value: true,
                      message: "Rating is required",
                    },
                    min: {
                      value: 1, 
                      message: "Can not give rating below 1"
                    },
                    max: {
                      value: 5, 
                      message: "Can not give rating higher that 5"
                    }
                  })}
                />
                {errors.rating && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.rating.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="State, Country"
                  className="input input-bordered"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location is required",
                    },
                  })}
                />
                {errors.location && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.location.message}
                  </span>
                )}
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
  );
};

export default AddReview;
