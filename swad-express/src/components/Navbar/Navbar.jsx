import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setSignup}) => {
  const [page, setPage] = useState("home");
  const {cartTotal} = useContext(StoreContext);

  return (
    <div className="navbar" id="navbar">
      <Link to='/'><img src={assets.logo} alt="SwadExpress Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setPage("home")}
          className={page === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#class-menu"
          onClick={() => setPage("menu")}
          className={page === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onClick={() => setPage("mobile-app")}
          className={page === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a href="#footer"
          onClick={() => setPage("contact-us")}
          className={page === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={cartTotal()>0?"dot":""}></div>
        </div>
        <button onClick={() => setSignup(true)}>Sign-In</button>
      </div>
    </div>
  );
};

export default Navbar;
