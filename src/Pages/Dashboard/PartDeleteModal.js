import React from "react";
import { toast } from "react-toastify";

const PartDeleteModal = ({ deletingPart, setDeletingPart, refetch }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/part/${deletingPart._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount){
        toast.success("Deleted Successfully!");
        refetch();
      }
      else {
        toast.error("Sorry Couldn't Delete at the moment.")
      }
    })
  };

  return (
    <div>
      <input type="checkbox" id="delete-part-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Delete Confirmation
          </h3>
          <p className="py-4">
            Are you sure you want to DELETE <b>{`${deletingPart.name}`}</b> ?
          </p>
          <div className="modal-action">
            <button
              onClick={() => {
                handleDelete(deletingPart._id);
                setDeletingPart(null);
              }}
              className="btn btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-part-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartDeleteModal;
