import React from "react";

const NotFound = () => {
  return (
    <div className="card max-w-3xl glass mx-auto mt-6 mb-24">
      <figure>
        <img src="https://i.ibb.co/1KJsYC6/404.jpg" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-red-500 text-center">404 - Page Not Found</h2>
        <p className="text-center">The URL you have requested may not be right. Please check again an try later.</p>
      </div>
    </div>
  );
};

export default NotFound;
