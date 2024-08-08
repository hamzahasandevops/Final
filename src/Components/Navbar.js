import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Profile from "./Profile";
import { IconButton, Tooltip } from "@mui/material";
import { CartContext } from "./Features/ContextProvider";
import { useContext } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { cart } = useContext(CartContext);

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
        <Link to="/">Medicine</Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            Deal of The Day
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Feature Brand
          </a>
        </li>
        <li>
          <Profile />
        </li>
        <li>
          <Link to="/cart">
            <Tooltip title={cart.length < 1 ? "Cart is empty" : ""}>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Link>
          {cart.length}
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div className="mobile-navbar-close" onClick={openNav}>
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>
        <ul className="mobile-navbar-links">
          <li>
            <Link to="/" onClick={openNav}>
              Home
            </Link>
          </li>
          <li>
            <a href="#services" onClick={openNav}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={openNav}>
              Deal of The Day
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={openNav}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#doctors" onClick={openNav}>
              Feature Brand
            </a>
          </li>
          <li>
            <a href="#contact" onClick={openNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>

      {/* Live Chat Button */}
      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>
    </div>
  );
}

export default Navbar;
