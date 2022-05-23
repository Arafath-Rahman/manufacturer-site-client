import React from "react";
import useReviews from "../../hooks/useReviews";
import Loading from "../Shared/Loading";
import Review from "../Shared/Review";

const AllReviews = () => {
  const [reviews] = useReviews();

  if (reviews.length === 0) {
    return <Loading />;
  }

  return (
    <div className="p-12">
      <div>
        <h2 className="text-center font-extrabold text-transparent bg-clip-text text-5xl bg-gradient-to-t from-primary to-secondary">
          ALL REVIEWS
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="pt-24 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((singleReview) => (
            <Review key={singleReview._id} singleReview={singleReview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
