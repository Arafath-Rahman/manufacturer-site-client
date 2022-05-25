import React from "react";
import useParts from "../../hooks/useParts";
import Loading from "../Shared/Loading";
import Part from "../Shared/Part";

const AllParts = () => {
  const [parts] = useParts();

  if (parts.length === 0) {
    return <Loading />;
  }

  return (
    <div className="p-12">
      <div>
        <h2 className="text-center font-extrabold text-transparent bg-clip-text text-5xl bg-gradient-to-t from-primary to-secondary">ALL PARTS</h2>
      </div>
      <div className="pt-24 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          parts?.map(part => <Part key={part._id} part={part} />)
        }
      </div>
    </div>
  );
};

export default AllParts;
