import React, { useState } from "react";

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ServicesIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../../Styles/MobileFooter.css";
import { Link } from "react-router-dom";
export default function MobileFooter() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      className="d-lg-none d-sm-none d-md-none "
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
          label="Services"
          icon={<CategoryIcon />}
          component={Link}
          to="/mobilesearch"
        />
        <BottomNavigationAction
          label="Categories"
          icon={<ServicesIcon />}
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
}
