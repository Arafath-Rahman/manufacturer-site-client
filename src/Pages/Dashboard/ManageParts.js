import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import DeleteModal from "./DeleteModal";

const ManageParts = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const navigate = useNavigate();

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("allParts", () =>
    fetch(`http://localhost:5000/parts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  const handleDelete = (partId) => {
    fetch(`http://localhost:5000/part/${partId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast.success(`Part Deleted successfully`);
          refetch();
        }
      });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {parts?.map((part, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{part.name}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-xl">
                        <img src={part.image} alt="product" />
                      </div>
                    </div>
                  </td>
                  <td>{part.stock}</td>
                  <td>{part.price}</td>
                  <td>
                    <div>
                      <label
                        htmlFor="delete-order-modal"
                        onClick={() => setDeleteModal(true)}
                        className="btn btn-xs btn-error ml-1"
                      >
                        Cancel
                      </label>
                      {deleteModal && (
                        <DeleteModal
                          handleDelete={handleDelete}
                          part={part}
                          setDeleteModal={setDeleteModal}
                          refetch={refetch}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageParts;
