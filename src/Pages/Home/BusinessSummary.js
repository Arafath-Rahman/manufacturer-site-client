import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiFlyingFlag, GiStarsStack } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";

const BusinessSummary = () => {
  return (
    <div className="px-24 bg-gradient-to-r from-primary to-secondary py-6">
      <div className="mb-12 mt-3">
        <h2 className="text-3xl font-bold text-center uppercase">Business Summary</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:justify-between pb-6">
        <div className="flex flex-col items-center border-y-2 rounded-3xl p-10">
          <div>
            <GiFlyingFlag className="text-5xl lg:text-8xl text-base-100" />
          </div>
          <div className="text-5xl lg:text-7xl font-bold">15+</div>
          <div className="text-xl lg:text-2xl font-bold">Countries</div>
        </div>
        <div className="flex flex-col items-center border-y-2 rounded-3xl p-10">
          <div>
            <TiGroup className="text-5xl lg:text-8xl text-base-100" />
          </div>
          <div className="text-5xl lg:text-7xl font-bold">500+</div>
          <div className="text-xl lg:text-2xl font-bold">Happy Clients</div>
        </div>
        <div className="flex flex-col items-center border-y-2 rounded-3xl p-10">
          <div>
            <GiStarsStack className="text-5xl lg:text-8xl text-base-100" />
          </div>
          <div className="text-5xl lg:text-7xl font-bold">700+</div>
          <div className="text-xl lg:text-2xl font-bold">Reviews</div>
        </div>
        <div className="flex flex-col items-center border-y-2 rounded-3xl p-8">
          <div>
            <BsFillCartCheckFill className="text-5xl lg:text-8xl text-base-100" />
          </div>
          <div className="text-5xl lg:text-7xl font-bold">5000+</div>
          <div className="text-xl lg:text-2xl font-bold">Items Sold</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
