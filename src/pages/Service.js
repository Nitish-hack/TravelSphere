import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import image from "../assets/images/services.jpg";
export default function Service() {
  return (
    <div>
      <Hero Heading="Services" Description="" isHome={false} imgUrl={image} />
      <Trips />
      <Footer />
    </div>
  );
}
