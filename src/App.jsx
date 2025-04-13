import React from "react";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Header from "./Header";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Portfolio />
      </Container>
    </>
  );
}

export default App;
