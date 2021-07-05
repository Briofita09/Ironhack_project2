import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
     <Link to="/"> <span className="icon">Icone para HomePage</span></Link>
      <div className="Login">
        <Link to="/login"><span>LogIn</span></Link>
        {/* <span>SignUp</span> */}
      </div>
    </nav>
  );
};

export default Navbar;
