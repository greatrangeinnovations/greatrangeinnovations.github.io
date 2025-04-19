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
    title: "Web Design & Development",
    image: "https://placehold.co/300x200?text=Web+Design+%26+Development",
  },
  {
    title: "App Design & Development",
    image: "https://placehold.co/300x200?text=App+Design+%26+Development",
  },
  {
    title: "User Experience (UX) Design",
    image: "https://placehold.co/300x200?text=UX+Design",
  },
  {
    title: "Custom Solutions",
    image: "https://placehold.co/300x200?text=Custom+Solutions",
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        pt: { md: 10 },
        px: 2,
      }}
    >
      <Grid container spacing={4}>
        {/* LEFT TEXT */}
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            pt: { xs: 6, md: 8 },
            pr: { md: 8 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4" gutterBottom>
            Expertly Built.
          </Typography>
          <Typography variant="h4" gutterBottom fontWeight={600}>
            Boldly Delivered.
          </Typography>

          <Typography variant="body2" sx={{ lineHeight: 1.8, pb: 2 }}>
            At <b>Great Range Innovations</b>, our name speaks for itself. We
            fuse design and engineering to create modern websites and
            applications that move fast, scale effortlessly, and look sharp
            doing it.
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, pb: 2 }}>
            Whether you're launching a lean portfolio or a full-scale platform,
            we bring clarity, capability, and creativity to every click.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2, borderRadius: 0 }}>
            LET'S CHAT
          </Button>
        </Grid>

        {/* RIGHT IMAGE GRID */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            {services.map((item) => (
              <Grid item size={{ xs: 12, sm: 6 }} key={item.title}>
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
