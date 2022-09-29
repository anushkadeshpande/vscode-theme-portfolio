import "./Main.css";
import { Routes, Route, useLocation, useState } from "react-router-dom";
import { useEffect } from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

// import TabBar from "./TabBar";

const Main = () => {
  let currentTab = useLocation().pathname;


  return (
    <div className="Main">
      {/* <TabBar /> */}
      <div className="Main__content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
