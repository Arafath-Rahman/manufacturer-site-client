import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-extrabold my-3">My Portfolio</h2>
          <p className="text-lg font-bold">3 of my best sites:</p>
          <div className="card-actions">
            <h2 className="text-primary"><Link to="https://pran-dealer-inventory.web.app/">Dealer Inventory Management Web App</Link></h2>
            <h2 className="text-primary"><Link to="https://bappis-chamber.web.app/">Doctors Chamber Demo App</Link></h2>
            <h2 className="text-primary"><Link to="https://macbook-pro-analysis.netlify.app/">MacBook Pro Analysis</Link></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
