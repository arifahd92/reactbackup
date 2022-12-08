import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import "./App.css"
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
// import Navbar from "./Navbar";
export default function Parent() {
  function Navbar(){
    return(
     <>
    <Link to ="/">home</Link>
    <Link to ="about">about</Link>
    <Link to ="contact">contact</Link>
    </>
      )

  }
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About/>}/>
        <Route
          path="/*"
          element={<h1 style={{ color: "red", margin: "30vh" }}>error</h1>}
        />
      </Routes>
    </>
  );
}
