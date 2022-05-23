import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import HomeParts from "./HomeParts";
import HomeReviews from "./HomeReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeParts />
      <BusinessSummary />
      <HomeReviews />
      <Footer />
    </div>
  );
};

export default Home;
