import React from "react";
import Footer from "../Shared/Footer";
import AroundWorld from "./AroundWorld";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import HomeParts from "./HomeParts";
import HomeReviews from "./HomeReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeParts />
      <BusinessSummary />
      <HomeReviews />
      <AroundWorld />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
