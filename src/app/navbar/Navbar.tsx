import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import mediPlus from "../../assets/digimedic.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };


  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <span className="navbar-sign"><img src={mediPlus} alt="medi plus logo" width="170px" height="58px" /></span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-links">
            Features
          </Link>
        </li>
        <li>
          <Link to="/department" className="navbar-links">
            Departments
          </Link>
        </li>
        <li>
          <Link to="/doctor" className="navbar-links">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/login" className="navbar-links">
            Reports
          </Link>
        </li>
      </ul>

      <div
        className="navbar-btn"
        // type="button"
        // disabled={isButtonDisabled}
        // onClick={handleChatBtnClick}
      >
        {/* <FontAwesomeIcon icon={faCommentDots} /> Live Chat */}
      </div>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
            Features
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/department">
            Departments
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/doctor">
            Doctors
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/login">
            Reports
            </Link>
          </li>
          {/* <li>
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
