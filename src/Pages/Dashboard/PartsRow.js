import React from "react";

const PartsRow = ({ part, i , setDeletingPart, refetch}) => {

  return (
    <tr>
      <th>{i + 1}</th>
      <td>{part.name}</td>
      <td>{part.stock}</td>
      <td>{part.price}</td>
      <td>
        <label onClick={()=> {
          setDeletingPart(part);
        }} htmlFor="delete-part-modal" className="btn modal-button btn-sm btn-error">
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default PartsRow;
