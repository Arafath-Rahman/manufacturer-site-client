import React from "react";

const DeleteModal = ({ handleDelete, order, setDeleteModal }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="delete-order-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="card">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-red-500 font-bold">
                Cancel/Delete Confirmation
              </h2>
              <p>Are you sure you want to Cancel/Delete?</p>
            </div>
          </div>
          <div className="modal-action">
            <label
              onClick={() => {
                handleDelete(order._id);
                setDeleteModal(false);
              }}
              htmlFor="delete-order-modal"
              className="btn btn-primary"
            >
              Confirm
            </label>
            <label
              htmlFor="delete-order-modal"
              className="btn btn-ghost"
              onClick={() => {
                setDeleteModal(false);
              }}
            >
              Deny
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
