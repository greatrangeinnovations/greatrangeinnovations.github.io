import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        px: 2,
        py: { xs: 8, md: 10 },
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={600}>
        About Great Range Innovations
      </Typography>

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, mb: 2, maxWidth: "800px" }}
      >
        Great Range Innovations is a design-forward development studio focused
        on building fast, scalable, and visually compelling websites and
        applications.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.8, maxWidth: "800px" }}>
        Whether you're a startup, an agency, or an established brand, we deliver
        modern digital solutions that balance performance, usability, and
        aesthetics.
      </Typography>
    </Box>
  );
}
