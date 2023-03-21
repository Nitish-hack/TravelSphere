import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Styled from "styled-components";

const ContactComponent = Styled.div`
margin:4rem 6rem;
color:#2a2a2a;
h1{
  text-align:center;
}
form{
  padding-top:3rem;
  display:flex;
  flex-direction:column;
  width:50%;
  margin:auto;

  input{
    height:3rem;
    padding:0 1rem;
    margin-bottom:2rem;
    border-radius:2rem;
    border:  1px solid #2a2a2a

  }
  textarea{
 
    padding:1rem;
    margin-bottom:2rem;
    border-radius:2rem;
    border:  1px solid #2a2a2a

  }
  button{
    background-color:#bab1b1;
    display:inline;
    border: none;
  font-weight: bold;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 20px;
  }
  button:hover{
    background-color: #06c0c7;
    transition: 200ms ease-in;

  }
}
    @media screen and (max-width:850px){
      margin:4rem 2rem;
  
      form{
        padding-top:2rem;
        width:90%;
      }
    }
}
`;
export default function Contact() {
  return (
    <div>
      <Hero
        Heading="Contact"
        Description=""
        isHome={false}
        imgUrl="https://images.unsplash.com/photo-1544006658-89bde88e87c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbiUyMHdvcmtpbmclMjBvbiUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <ContactComponent>
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </ContactComponent>
      <Footer />
    </div>
  );
}
