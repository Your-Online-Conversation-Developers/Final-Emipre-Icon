import React from "react";
import About from "../About";
import CtaSection from "../CtaSection";
import Call from "../elements/Call";
import Floors from "../Floors";
import Gallery from "../Gallery";
// import HeaderSlider from "../HeaderSlider";
import MobileSlider from "../MobileSlider";
import PlacesSection from "../PlacesSection";
import Projects from "../Projects";
import Rooms from "../Rooms";
import TestSlider from "../TestSlider";
import VideoSection from "../VideoSection";

const Home = () => {
  

  return (
    <div className="home">
      {/* <HeaderSlider /> */}
      <TestSlider />
      <MobileSlider />
      <About />
      <Floors />
      <VideoSection />
      <Rooms />
      <Gallery />
      <PlacesSection />
      <Projects />
      <CtaSection />
      <Call />
    </div>
  );
};

export default Home;
