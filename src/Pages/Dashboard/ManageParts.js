import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import PartDeleteModal from "./PartDeleteModal";
import PartsRow from "./PartsRow";

const ManageParts = () => {
  const [deletingPart, setDeletingPart] = useState(null);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("partsData", () =>
    fetch("http://localhost:5000/parts", {
      method: "GET",
    }).then((res) => res.json())
  );

  if(isLoading){
    return <Loading />;
  }

  return (
    <div>
      parts: {parts?.length}
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Parts Name</th>
                <th>Quantity Available</th>
                <th>Price Per Unit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {parts?.map((part, i) => (
                <PartsRow
                  key={part._id}
                  part={part}
                  i={i}
                  setDeletingPart={setDeletingPart}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingPart && (
        <PartDeleteModal
          deletingPart={deletingPart}
          setDeletingPart={setDeletingPart}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageParts;
