import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddParts from "./Pages/Dashboard/AddParts";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageParts from "./Pages/Dashboard/ManageParts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import AllParts from "./Pages/Parts/AllParts";
import PartsPurchaseDetail from "./Pages/Parts/PartsPurchaseDetail";
import AllReviews from "./Pages/Reviews/AllReviews";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

export const NameContext = createContext();

function App() {
  const [userName, setUserName] = useState("user");

  return (
    <div>
      <NameContext.Provider value={[userName, setUserName]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/parts" element={<AllParts />} />
          <Route
            path="/parts/:partId"
            element={
              <RequireAuth>
                <PartsPurchaseDetail />
              </RequireAuth>
            }
          />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="order/:orderId" element={<Payment />} />
            <Route
              path="makeAdmin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            />
            <Route
              path="addParts"
              element={
                <RequireAdmin>
                  <AddParts />
                </RequireAdmin>
              }
            />
            <Route
              path="manageParts"
              element={
                <RequireAdmin>
                  <ManageParts />
                </RequireAdmin>
              }
            />
            <Route
              path="manageOrders"
              element={
                <RequireAdmin>
                  <ManageOrders />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NameContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
