import React from "react";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Home />
        {/* <Portfolio /> */}
      </Container>
    </>
  );
}

export default App;
