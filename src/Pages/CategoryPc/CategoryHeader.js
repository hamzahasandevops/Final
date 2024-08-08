import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";

export default function CategoryHeader() {
  return (
    <Container sx={{ flexGrow: 1 }} maxWidth="xxl" className="mt-3">
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h3 className="about-title py-3  ">
              <span>Categories</span>
            </h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
