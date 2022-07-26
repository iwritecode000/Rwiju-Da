import React from "react";
import Caraosel from "./Caraosel";
import AboutComponent from "./AboutComponent";
import Cards from "./Cards";
import Gallery from "./Gallery";
import CheckVideos from "./CheckVideos";
import ContactForm from "./ContactForm";

const Home = () => {
  return <>
    <Caraosel />
    <AboutComponent />
    <Cards />
    <Gallery />
    <CheckVideos/>
    <ContactForm/>
  </>;
};

export default Home;
