import React, { useState } from "react";
import logo from "./assets/logo.svg";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = ["About Us", "Our Work", "Services", "Resources", "Blog"];

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <img
              src={logo}
              alt="Great Range Innovations Logo"
              style={{
                height: 32,
                marginRight: 8,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333",
                fontFamily: '"Special Gothic Condensed One", sans-serif',
              }}
            >
              Great Range Innovations
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ color: "#333", mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box sx={{ width: 250, mt: 4 }}>
                  <List>
                    {navLinks.map((text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Button
                          variant="outlined"
                          fullWidth
                          sx={{
                            borderRadius: 0,
                            mt: 2,
                            color: "#333",
                            border: "1px solid #333",
                          }}
                        >
                          Hire Us
                        </Button>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  color="inherit"
                  sx={{ marginRight: 2, color: "#333", textTransform: "none" }}
                >
                  {link}
                </Button>
              ))}
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
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
