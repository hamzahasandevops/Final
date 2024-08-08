import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import "../../../Styles/MobileFooter.css";

const MobileFooter = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="mobile-footer-container"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1000,
        padding: "15px",
      }}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          component={Link}
          to="/mobilesearch"
        />
        <BottomNavigationAction
          label="Categories"
          icon={<CategoryIcon />}
          component={Link}
          to="/mobilecategory"
        />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon />}
          component={Link}
          to="/cart"
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileFooter;
