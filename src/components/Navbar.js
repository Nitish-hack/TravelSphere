import "./NavbarStyles.css";
import { useState } from "react";
import logo from "../assets/images/Travel Story.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isClicked, setclick] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} height="60px" width="60px" alt="logo" />
      </div>

      <div
        className="hamburger"
        onClick={() => {
          setclick(!isClicked);
        }}
      >
        <i className={isClicked ? "fas fa-times " : "fas fa-bars"}> </i>
      </div>

      <div className={isClicked ? "menuitems active" : "menuitems"}>
        <Link to="/">
          <i className="fa-solid fa-house"></i>Home
        </Link>
        <Link to="/about">
          <i className="fa-solid fa-circle-info"></i>About
        </Link>
        <Link to="/service">
          <i className="fa-solid fa-briefcase"></i>Service
        </Link>
        <Link to="/contact">
          <i className="fa-solid fa-address-book"></i>Contact
        </Link>
        <button> SignUp</button>
      </div>
    </nav>
  );
};
export default Navbar;
