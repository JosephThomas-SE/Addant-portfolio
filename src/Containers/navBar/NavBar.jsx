import React, { useState } from 'react';
import logo from "../../assets/addantLogo.svg";
import Button from "../Button/Button"
import NavBarIcon from "../../assets/NavBarIcon.svg";
import "./navBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="row nav_content1 ">
        <div className="col-lg-1 col-md-1 col-sm-2 nav_logo">
          <a href="../../Containers/landingPage">
            <img src={logo} alt="logo" />
          </a>
        </div>
        
        <div className="col-lg-10 col-md-10 col-sm-8 nav_button">
          {show && <Button />}
        </div>
        
        <div className="col-lg-1 col-md-1 col-sm-2 nav_menubutton">
          <button>
            <img src={NavBarIcon} alt="3line" />
          </button>
        </div>
         
        
    </div>
  );
};

export default NavBar;
