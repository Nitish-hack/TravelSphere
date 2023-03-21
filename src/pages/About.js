import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Styled from "styled-components";

const AboutContainer = Styled.div`
font-family: "Poppins", sans-serif;
  margin: 4rem 6rem;

  h1{
    padding-bottom:1rem;
    font-weight:bold;
  }

  p{
    padding-bottom:2rem;
  }

  @media screen and (max-width:850px){
    margin: 4rem 2rem;
  }
`;
export default function About() {
  return (
    <div>
      <Hero
        Heading="About Us"
        Description=""
        isHome={false}
        imgUrl="https://images.unsplash.com/photo-1566172392011-3b424810f0b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGFib3V0JTIwdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <AboutContainer>
        <h1>Our History </h1>
        <p>
          TravelSphere is owned and managed by TravelSphere .in Pvt .Ltd. A
          leading brand in web designing services and e-commerce solutions is
          counted for its expertise in web solutions and is stop ranking
          business portals .our invincible expertise and rich experience has
          raised always spirit to reach ahead from our clients expectation
          commendable success rate of other portals managed by TravelSphere is a
          live paradigm of work excellence.
        </p>
        <h1>Our Mission</h1>
        <p>
          our mission is to touch the Horizon Where are capabilities may
          successfully meet with the requirements of our clients that too with
          ultimate transparency and cost effectiveness
        </p>
        <h1>Our Vision</h1>
        <p>
          To sow the seeds of par-excellence services with customer centric
          approach and reap the trust of worldwide clients
        </p>
      </AboutContainer>

      <Footer />
    </div>
  );
}
