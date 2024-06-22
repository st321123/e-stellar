import React from "react";
import "./home.css";
import HomeHero from "../components/homeHero/HomeHero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import Latest from "../components/Latest Product/Latest";
import EmailSubs from "../components/EmailSubscribe/EmailSubs";

function Home() {
  return (
    <>
      <HomeHero />
      <Popular />
      <Offer />
      <Latest />
      <EmailSubs />
    </>
  );
}

export default Home;
