import { useState, useEffect } from "react";
import "./Menu.css";
import { ReactComponent as Home } from "../assets/menu/Home.svg";
import { ReactComponent as Profile } from "../assets/menu/Profile.svg";
import { ReactComponent as Apps } from "../assets/menu/Apps.svg";
import { ReactComponent as Contact } from "../assets/menu/Contact.svg";
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation()

  return (
    <div className="Menu" style={{/*height: window.outerHeight*/}}>
      <Link to='/' className={location.pathname === "/"? "active" : ""}><Home /></Link>
      <Link to='/about' className={location.pathname === "/about"? "active" : ""}><Profile /></Link>
      <Link to='/projects' className={location.pathname === "/projects"? "active" : ""}><Apps /></Link>
      <Link to='/contact' className={location.pathname === "/contact"? "active" : ""}><Contact /></Link>
    </div>
  );
};

export default Menu;
