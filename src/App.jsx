import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Great Range Innovations
          </Typography>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Great Range Innovations
        </Typography>
        <Typography variant="h6">
          Design that elevates. Innovation that leads.
        </Typography>
      </Container>
    </>
  );
}

export default App;
