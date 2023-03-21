import React from "react";
import Navbar from "../components/Navbar";
import Styled from "styled-components";

const HeroContainer = Styled.div`

background-image: url(${(props) => props.imgUrl}); 
height:${(props) => (props.isHome ? "100vh" : "70vh")};
/* width:100vw; */
background-size:cover;
opacity:1;
background-repeat:no-repeat;
background-position:center;


`;
const HeroContent = Styled.div`
margin-top:0;

color:white;

margin-left:${(props) => (props.isHome ? "30px" : "auto")};
text-align:${(props) => (props.isHome ? "" : "center")};
padding:10px;
h1{
  margin-top:25vh;
font-size:5vw;
font-family: 'Special Elite', cursive;
@media screen and (max-width:885px){
    font-size:6vw;
  }
}
p{
  font-size:2.5vw;
  font-family: 'Special Elite', cursive;
  padding:10px 0;
  @media screen and (max-width:885px){
    font-size:3vw;
  }
}
button{
  font-size:2.5vw;
 
  padding:10px 20px;
  border-radius:20px;
  border:none;
  font-weight:bold;
  margin-top:10px;
  font-family: 'Dancing Script', cursive;

  @media screen and (max-width:885px){
    font-size:3vw;
    margin-top: 8px;
  }
}
button:hover{
  cursor:pointer;
  color:white;
  background-color: #150d12;
    transition: 200ms ease-in;

}
`;

export default function Hero({ Heading, Description, isHome, imgUrl }) {
  return (
    <div>
      <HeroContainer isHome={isHome} imgUrl={imgUrl}>
        <Navbar />
        <HeroContent isHome={isHome}>
          <h1>{Heading}</h1>
          <p>{Description}</p>
          {isHome ? <button>Travel Plan</button> : ""}
        </HeroContent>
      </HeroContainer>
    </div>
  );
}
