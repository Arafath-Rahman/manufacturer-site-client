import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://robotics-parts-store.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const makeAdmin = (user) => {
    fetch(`https://robotics-parts-store.herokuapp.com/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Can not make admin if you are not an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made ${user.email} an admin`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="py-3">
        <h2 className="text-2xl font-bold text-secondary text-center my-4 underline underline-offset-2">
          MAKE ADMIN
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => makeAdmin(user)}
                        className="btn btn-xs mr-3"
                      >
                        Make Admin
                      </button>
                    )}
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

export default MakeAdmin;
