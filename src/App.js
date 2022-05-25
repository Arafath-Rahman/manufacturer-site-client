import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import AllParts from "./Pages/Parts/AllParts";
import PartsPurchaseDetail from "./Pages/Parts/PartsPurchaseDetail";
import AllReviews from "./Pages/Reviews/AllReviews";
import Navbar from "./Pages/Shared/Navbar";

export const NameContext = createContext();

function App() {
  const [userName, setUserName] = useState("");

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
        </Routes>
      </NameContext.Provider>
    </div>
  );
}

export default App;
