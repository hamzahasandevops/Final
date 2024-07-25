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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          MedicineCare <span className="navbar-sign">+</span>
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
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            {/* About */}
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
            <Tooltip
              title={
                cart.length < 1 ? (
                  <h3 className="cart px-3">Cart is empty</h3>
                ) : (
                  ""
                )
              }
            >
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Link>
          {cart.length}
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>

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
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              Deal of The Day
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Feature Brand
            </a>
          </li>
          <li>
            <Profile />
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
          <li>
            <Link to="/cart">
              <Tooltip
                title={
                  cart.length < 1 ? (
                    <h3 className="cart px-3">Cart is empty</h3>
                  ) : (
                    ""
                  )
                }
              >
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Link>
            {cart.length}
          </li>
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
