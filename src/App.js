import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
