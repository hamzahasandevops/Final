import React, { useState } from "react";
import "../../Styles/MinNavbar.css";
import MedNav from "./MedNav";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Profile from "../Profile";
const input = {
  fontSize: "24px",
  lineHeight: "21px",
  display: ["block", "inline"],
  padding: "6px 30px 7px 0",
  border: "none",
  outline: "0",

  bottom: "19px",
  marginLeft: "5px",
  boxShadow: "none",
  color: "#3e3e3e",
  textIndent: "12px",
  height: "54px",
  borderRadius: "0 3px 3px 0",
  backgroundColor: "#f1f4f6",
  width: "calc(100% - 25px)",
};

const select = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#000",
  height: "54px",
  background: "#f1f4f6",
  outline: "none",
  border: "0",
  width: "20%",
  padding: "15px",
  textTransform: "capitalize",
};

export default function MinNav({ query, setQuery }) {
  const { cart } = useContext(CartContext);

  return (
    <div class=" container-fluid d-sm-block d-lg-block d-block d-flex flex-column align-items-center">
      <div class="row d-flex flex-row border border-1 p-2">
        <div className="col-xs-6 col-lg-6 col-sm-6  col-8 d-flex">
          <select className="btn btn-light" style={select}>
            <option>India</option>
            <option>Bangalore</option>
            <option>China</option>
            <option>Pakistan</option>
          </select>

          <input
            style={input}
            type="text"
            value={query}
            placeholder="Search for Medicines and Health Products"
            className="form-control "
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>

        <div className="col-xs-3 col-lg-3 col-sm-3 col-1 d-block d-sm-none d-lg-none d-md-none">
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
        <div className="col-xs-3 col-lg-3 col-sm-3 col-3 d-block d-sm-none d-lg-none d-md-none">
          <Profile />
        </div>
      </div>

      <div class="row  col-lg-12 col-sm-12 col-12  d-flex flex-row b p-2">
        <MedNav />

        {/* <div className="col-xs-3 col-lg-3 col-sm-3">hamza</div> */}
      </div>
    </div>
  );
}
