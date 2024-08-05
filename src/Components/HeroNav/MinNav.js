import React, { useState } from "react";
import "../../Styles/MinNavbar.css";
import MedNav from "./MedNav";
import { Link } from "react-router-dom";
import { Autocomplete, IconButton, TextField, Tooltip } from "@mui/material";
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

const formbutton = {
  background: "#f1f4f6",
  width: "60px",
  height: "60px",
  fontSize: "22px",
  borderRadius: "50%",
};

export default function MinNav({ query, setQuery, handleSearch, techData }) {
  const { cart } = useContext(CartContext);
  const [inputValue, setInputValue] = useState(query);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const suggestions = techData.map((d) => d.title);

  // Filter suggestions based on input value
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue || "");
    setQuery((newInputValue || "").toLowerCase());

    // Filter the suggestions based on the input value
    const newFilteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes((newInputValue || "").toLowerCase())
    );

    setFilteredSuggestions(newFilteredSuggestions);
  };

  const handleSelect = (event, newValue) => {
    setInputValue(newValue || "");
    setQuery((newValue || "").toLowerCase());
    handleSearch(); // Trigger search
  };

  return (
    <div className=" container-fluid d-sm-block d-lg-block d-none d-flex flex-column align-items-center ">
      <div className="row d-flex flex-row border border-1 p-2">
        <div className="col-xs-6 col-lg-6 col-sm-6  col-8 d-flex align-items-center">
          <select className="btn btn-light" style={select}>
            <option className="">Country</option>
            <option className="">India</option>
            <option>Bangalore</option>
            <option>China</option>
            <option>Pakistan</option>
          </select>

          <form
            className="d-flex mx-2 "
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
                  placeholder="Search Garcinia ..."
                  InputProps={{
                    ...params.InputProps,
                    style: {
                      border: "1px solid #007bff",

                      fontSize: "16px",
                      transition: "all 0.3s ease",

                      width: "430px",
                      outline: "none",
                      paddingLeft: "30px",
                      fontStyle: "italic",
                      border: "none",
                      outline: "none",
                      marginRight: "10px",
                      boxSizing: "border-box",
                    },
                  }}
                />
              )}
            />
            <button className="btn  " type="submit" style={formbutton}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="row  col-lg-12 col-sm-12 col-12  d-flex flex-row b p-2">
        <MedNav />

        {/* <div className="col-xs-3 col-lg-3 col-sm-3">hamza</div> */}
      </div>
    </div>
  );
}
