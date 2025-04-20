import { useState } from "react";
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
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Work", path: "/our-work" },
  { label: "Services", path: "/services" },
];

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          boxShadow: "none",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              maxWidth: "1200px",
              justifyContent: "space-between",
              mx: 2,
            }}
            disableGutters
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logo}
                  alt="Great Range Innovations Logo"
                  style={{
                    height: 32,
                    marginRight: 8,
                  }}
                />
              </Link>

              {!isMobile && (
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
              )}
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  onClick={toggleDrawer(true)}
                  sx={{ color: "#333" }}
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
                      {navLinks.map(({ label, path }) => (
                        <ListItem key={label} disablePadding>
                          <ListItemButton
                            component={Link}
                            to={path}
                            onClick={toggleDrawer(false)}
                          >
                            <ListItemText primary={label} />
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {navLinks.map(({ label, path }) => (
                  <Button
                    key={label}
                    component={Link}
                    to={path}
                    color="inherit"
                    sx={{
                      marginRight: 2,
                      color: "#333",
                      textTransform: "none",
                    }}
                  >
                    {label}
                  </Button>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
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
        </Box>
      </AppBar>
    </>
  );
}

export default Header;
