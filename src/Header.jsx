import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Great Range Innovations
          </Typography>
        </Box>

        {/* Navigation Links on the Right */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            color="inherit"
            sx={{ marginRight: 2, color: "#333", textTransform: "none" }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            sx={{ marginRight: 2, color: "#333", textTransform: "none" }}
          >
            Our Work
          </Button>
          <Button
            color="inherit"
            sx={{ marginRight: 2, color: "#333", textTransform: "none" }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            sx={{ marginRight: 2, color: "#333", textTransform: "none" }}
          >
            Resources
          </Button>
          <Button
            color="inherit"
            sx={{ marginRight: 2, color: "#333", textTransform: "none" }}
          >
            Blog
          </Button>

          {/* Hire Us Button */}
          <Button
            variant="contained"
            color="white"
            sx={{
              borderRadius: 0,
              padding: "8px 48px",
              color: "#333",
              border: "1px solid #333",
              boxShadow: "none",
            }}
          >
            Hire Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
