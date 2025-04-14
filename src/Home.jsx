import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const services = [
  {
    title: "WEB DESIGN & DEVELOPMENT",
    image: "https://placehold.co/300x200?text=Web+Design+%26+Development",
  },
  {
    title: "APP DESIGN & DEVELOPMENT",
    image: "https://placehold.co/300x200?text=App+Design+%26+Development",
  },
  {
    title: "USER EXPERIENCE (UX) DESIGN",
    image: "https://placehold.co/300x200?text=UX+Design",
  },
  {
    title: "CUSTOM SOLUTIONS",
    image: "https://placehold.co/300x200?text=Custom+Solutions",
  },
];

export default function Home() {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", pt: 10 }}>
      <Grid container spacing={4}>
        {/* LEFT TEXT */}
        {/* LEFT TEXT */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ pt: 8, pr: 8 }}>
          <Typography variant="h4" gutterBottom>
            WE HAVE A GREAT RANGE OF EXPERTISE.
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, pb: 2 }}>
            Our name says it all. We thrive at the intersection of creativity
            and capability, crafting websites and web applications that are
            fast, modern, and built to scale with your business.
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, pb: 2 }}>
            From sleek portfolios to powerful custom platforms, we help you show
            up online with clarity and confidence.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2, borderRadius: 0 }}>
            LET'S CHAT
          </Button>
        </Grid>

        {/* RIGHT IMAGE GRID */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            {services.map((item) => (
              <Grid size={6} key={item.title} sx={{ px: 2 }}>
                <Card elevation={0}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      height: 220,
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />
                  <CardContent sx={{ padding: "0.5rem 0 0 0" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      textAlign="center"
                      textTransform="uppercase"
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
