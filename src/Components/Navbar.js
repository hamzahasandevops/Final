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
import { IconButton, Tooltip, TextField, Autocomplete } from "@mui/material";
import { CartContext } from "./Features/ContextProvider";
import { useContext } from "react";

function Navbar({ query, setQuery, handleSearch, techData }) {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // const [inputValue, setInputValue] = useState(query);
  // const [filteredSuggestions, setFilteredSuggestions] = useState([]);
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

  // const suggestions = techData.map((d) => d.title);

  // // Filter suggestions based on input value
  // const handleInputChange = (event, newInputValue) => {
  //   setInputValue(newInputValue || "");
  //   setQuery((newInputValue || "").toLowerCase());

  //   // Filter the suggestions based on the input value
  //   const newFilteredSuggestions = suggestions.filter((suggestion) =>
  //     suggestion.toLowerCase().includes((newInputValue || "").toLowerCase())
  //   );

  //   setFilteredSuggestions(newFilteredSuggestions);
  // };

  // const handleSelect = (event, newValue) => {
  //   setInputValue(newValue || "");
  //   setQuery((newValue || "").toLowerCase());
  //   handleSearch(); // Trigger search
  // };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">Medicine</Link>
      </h1>

      {/* Search Input with Autocomplete */}
      {/* <div
          style={{ width: "136px" }}
          className="d-none d-sm-none d-md-none d-lg-block"
        >
          <form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <Autocomplete
              freeSolo
              options={filteredSuggestions}
              value={inputValue}
              onChange={handleSelect}
              onInputChange={handleInputChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Search Garcinia"
                  InputProps={{
                    ...params.InputProps,
                    style: {
                      borderRadius: "50px",
                      border: "1px solid #007bff",
                      padding: "12px 20px",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      width: "330px",
                      outline: "none",
                      fontStyle: "italic",
                      borderColor: "#007bff",
                      background: "linear-gradient(145deg, #ffffff, #f1f3f5)",
                      marginRight: "10px",
                      boxSizing: "border-box",
                    },
                  }}
                />
              )}
            />
            <button className="btn-advanced" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div> */}
      {/* //navbar */}

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
      <div className="d-flex" style={{ position: "relative", left: "100px" }}>
        <div className=" d-block d-sm-none  d-lg-none d-md-block">
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
        </div>
        <div className=" d-block d-sm-none d-lg-none d-md-block">
          <Profile />
        </div>
      </div>
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
            <a onClick={openNav} href="#contact">
              Contact
            </a>
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
