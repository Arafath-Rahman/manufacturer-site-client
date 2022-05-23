import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen top lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/K0YkM0q/banner-bg.jpg"
          className="w-5/6 lg:w-3/4 max-w-md rounded-lg shadow-2xl"
          alt="banner bg"
        />
        <div className="md:pr-9">
          <h1 className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Get Your Desired Robotic Parts!</h1>
          <p className="py-6 text-slate-700">
            We are the best robotic parts manufacturer in USA. We only wholesale parts around 13 countries around the world including Russia, Germany, England, China, India, Bangladesh and many more. We deliver by Ship/Air, DHL, FedEx any medium you want. Make hurry before our parts stocked out. Call at our hotline number or email us for large contracts.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-base-100 font-bold">Browse Parts</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
