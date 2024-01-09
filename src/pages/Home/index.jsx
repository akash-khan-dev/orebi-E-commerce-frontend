import React from "react";
import Banner from "../../components/pageComponent/Home/Banner";
import AdditionalInfo from "../../components/pageComponent/Home/AdditionalInfo";
import Advertiser from "../../components/pageComponent/Home/Advertiser";
import NewArrival from "../../components/pageComponent/Home/NewArrival";
import BestSeller from "../../components/pageComponent/Home/BestSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertiser />
      <NewArrival />
      <BestSeller />
    </>
  );
};

export default Home;
