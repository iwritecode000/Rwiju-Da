import React from "react";
import Caraosel from "./Caraosel";
import AboutComponent from "./AboutComponent";
import Cards from "./Cards";
import Gallery from "./Gallery";
import checkOutvideos from "./checkOutvideos";

const Home = () => {
  return <>
  <Caraosel/>
  <AboutComponent/>
  <Cards/>
  <Gallery/>
<checkOutvideos/>
  </>;
};

export default Home;
