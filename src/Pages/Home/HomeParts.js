import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Part from "../Shared/Part";

const HomeParts = () => {
  const [parts, setParts] = useState([]);

  useEffect( ()=> {
    fetch('parts-data.json')
    .then(res => res.json())
    .then(data => setParts(data))
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-no-repeat mb-28">
      <div className="my-12">
        <h2 className="text-3xl font-extrabold text-center uppercase">Parts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {
          parts.slice(0, 3).map((part, i) => <Part key={i} part={part}/>)
        }
      </div>
      <div>
        <button className="btn btn-primary btn-outline text-base-100 rounded-none px-10 py-4">See All Parts <BsArrowRight className="mx-2"/></button>
      </div>
    </div>
  );
};

export default HomeParts;
