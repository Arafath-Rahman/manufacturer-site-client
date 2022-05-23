import React from "react";
import { ImQuotesLeft, ImStarFull } from "react-icons/im";

const Review = ({singleReview}) => {
  const {name, title, description, review, location } = singleReview;
  return (
    <div className="card w-72 lg:w-80 bg-secondary text-base-10 text-base-100 shadow-xl shadow-slate-400 bg-gradient-to-b from-primary to-secondary    transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <ImQuotesLeft className="text-base-100 text-5xl" />
          <div className="flex items-center gap-1">
            <span className="font-extrabold text-3xl">{review}</span>
            <ImStarFull className="text-yellow-300 text-2xl" />
          </div>
        </div>
        <h2 className="text-2xl font-extrabold text-start text-slate-800">
          {title}
        </h2>
        <p className="">
          {description}
        </p>
        <div className="card-actions justify-start mt-5">
          <div className="flex gap-4">
            <div class="avatar">
              <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" alt="review avatar"/>
              </div>
            </div>
            <div>
              <h4 className="text-xl font font-bold text-slate-800">{name}</h4>
              <p className="text-sm font-bold text-base-100">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
