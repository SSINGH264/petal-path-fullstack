import { Link } from "react-router-dom";
//importing this for animation

import { useEffect, useRef } from "react";
import { animate } from "motion";


import "./navbar.css";
import logo from "../../assets/logo.png";

// created navbar and links
//animation for the logo

const Navbar = () => {
  const logoRef = useRef(null);
    useEffect(() => {
    animate(
      logoRef.current,
      { opacity: [0, 1], scale: [0.9, 1] },
      { duration: 1 }
    );
  }, []);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img ref = {logoRef} src={logo} alt="Petal Path Logo" className="logo" />

        <Link to="/" className="logo-text"> Petal Path </Link>

      </div>

{/* used an unordered list for navbar*/}

      <ul>
        <li> <Link to="/about" className ="about"> About </Link> </li>
        <li> <Link to ="/plant-interest" className="plantInterest"> Plant Intrests</Link> </li>  

      </ul>

      <Link to="/signin" className="signin"> Sign In </Link>
    </div>
  );
  
};

export default Navbar;