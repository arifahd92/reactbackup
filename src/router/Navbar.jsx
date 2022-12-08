import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
 <nav className="container">

      <Link to="/">home</Link>{" "}
     <Link to ="/contact">contact</Link>
      <Link to="/about">about</Link>
 </nav>


  );
}
