import React from "react";
import Part from "../Shared/Part";

const HomeParts = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-no-repeat mb-24">
    <div className="my-12">
      <h2 className="text-3xl font-extrabold text-center uppercase">Parts</h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        <Part />
        <Part />
        <Part />
      </div>
    </div>
  );
};

export default HomeParts;
