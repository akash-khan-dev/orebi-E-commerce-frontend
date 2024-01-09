import React from "react";
import Banner from "../../components/pageComponent/Home/Banner";
import AdditionalInfo from "../../components/pageComponent/Home/AdditionalInfo";
import Advertiser from "../../components/pageComponent/Home/Advertiser";
import NewArrival from "../../components/pageComponent/Home/NewArrival";
import BestSeller from "../../components/pageComponent/Home/BestSeller";
import MiddleAdvertisement from "../../components/pageComponent/Home/MiddleAdvertisement";
import SpacialOffer from "../../components/pageComponent/Home/SpacialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertiser />
      <NewArrival />
      <BestSeller />
      <MiddleAdvertisement />
      <SpacialOffer />
    </>
  );
};

export default Home;
