import React from "react";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div>
      <Hero
        Heading="Your Journey Your Story..."
        Description="Choose Your Favourite Destination"
        isHome={true}
        imgUrl="https://images.pexels.com/photos/2689631/pexels-photo-2689631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Destination />
      <Trips />
      <Footer />
    </div>
  );
}
