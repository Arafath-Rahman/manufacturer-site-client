import React from "react";
import { ImStarFull } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, description, price, image, stock, moq, review } = part;
  const navigate = useNavigate();

  //this function generates number of stars based on the review variable in part
  const reviewStarGenerator = review => {
    let stars=[];
    for(let i=0; i<review; i++){
      stars.push(<ImStarFull key={i} className="mr-1 text-accent"/>)
    }
    return stars;
  }

  return (
    <div className="card w-96 max-w-md bg-base-100 shadow-xl">
      <figure className="bg-white">
        <img
          src={image}
          alt="Shoes"
          className="w-4/6"
        />
      </figure>
      <div className="card-body pb-0">
        <h2 className="card-title text-slate-800">
          {name}
        </h2>
        <p className="text-slate-600">{description.length > 70 ? description.slice(0, 70) + '...' : description}</p>
        <div className="card-actions justify-end mt-3">
          <div className="badge badge-primary text-slate-800 font-semibold">Available: {stock} pcs</div>
          <div className="badge badge-secondary text-slate-800 font-semibold">MOQ: {moq}</div>
        </div>
        <div className="card-actions justify-between items-center mt-5">
          <div className="text-2xl font-extrabold text-secondary">${price}</div>
          <div className="text-xl font-extrabold text-secondary flex">
            {reviewStarGenerator(review)}
          </div>
        </div>
        <div className="card-actions justify-center mt-3">
          <button onClick={()=> navigate(`/parts/${_id}`)} className="btn btn-secondary btn-outline w-96 max-w-md rounded-2xl">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
