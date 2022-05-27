import React from "react";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddParts = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //form submit handler
  const onSubmit = async (data) => {
    console.log(data);
    const {name, description, price, image, stock, moq, review} = data;
    const reviewNumber = parseInt(review);
    const part = {
      name: name,
      description: description,
      price: price,
      image: image,
      stock: stock,
      moq: moq,
      review: reviewNumber,
    }

    fetch("https://robotics-parts-store.herokuapp.com/part", {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(part)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        toast.success("Part Added successfully");
        navigate("/parts");
      }
    })
    reset();
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="card lg:w-96 w-80 shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary">
              {" "}
              Add A Part{" "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Part Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Part Name"
                  className="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Part Name is required"
                    }
                  })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.name.message}
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
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "price is required",
                    }
                  })}
                />
                {errors.price && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.price.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image Link"
                  className="input input-bordered"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image Link is required",
                    },
                  })}
                />
                {errors.image && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.image.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Stock"
                  className="input input-bordered"
                  {...register("stock", {
                    required: {
                      value: true,
                      message: "Stock Quantity is required",
                    }
                  })}
                />
                {errors.stock && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.stock.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="MOQ"
                  className="input input-bordered"
                  {...register("moq", {
                    required: {
                      value: true,
                      message: "MOQ is required",
                    }
                  })}
                />
                {errors.moq && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.moq.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <input
                  type="number"
                  placeholder="Give a rating between 1-5"
                  className="input input-bordered"
                  {...register("review", {
                    required: {
                      value: true,
                      message: "Review is required",
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
                {errors.review && (
                  <span className="text-sm text-red-500 font-bold flex gap-1">
                    <BiErrorCircle />
                    {errors.review.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add Part"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddParts;
