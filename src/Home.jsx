import React from "react";
import Caraosel from "./Caraosel";
import AboutComponent from "./AboutComponent";
import Cards from "./Cards";
import Gallery from "./Gallery";
import CheckVideos from "./CheckVideos";

const Home = () => {
  return <>
    <Caraosel />
    <AboutComponent />
    <Cards />
    <Gallery />
    <CheckVideos/>
  </>;
};

export default Home;
