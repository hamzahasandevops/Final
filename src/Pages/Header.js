import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Container sx={{ flexGrow: 1 }} maxWidth="xl" className="mt-3">
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h3 className="about-title py-3  ">
              <span>
                {/* About Us */}
                Cart by Shop
              </span>
            </h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
