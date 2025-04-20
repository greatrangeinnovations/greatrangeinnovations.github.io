import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const projects = [
  {
    title: "Summit Real Estate",
    image: "https://placehold.co/600x400?text=Summit+Real+Estate",
    description: "A sleek real estate platform built for speed and simplicity.",
  },
  {
    title: "Peak Fitness App",
    image: "https://placehold.co/600x400?text=Peak+Fitness+App",
    description: "A mobile-first fitness experience with real-time tracking.",
  },
  {
    title: "Trailhead E-Commerce",
    image: "https://placehold.co/600x400?text=Trailhead+E-Commerce",
    description: "A rugged and elegant storefront for outdoor gear.",
  },
  {
    title: "Aurora Analytics",
    image: "https://placehold.co/600x400?text=Aurora+Analytics",
    description: "A data dashboard UI optimized for performance and clarity.",
  },
];

export default function OurWork() {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        px: 2,
        py: { xs: 8, md: 10 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Our Work
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: "800px", margin: { xs: "0 auto", md: "0" } }}
      >
        We partner with forward-thinking teams to bring ambitious ideas to life.
        Here's a selection of projects we're proud of.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={project.title}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                height="240"
                image={project.image}
                alt={project.title}
                sx={{ borderRadius: 1 }}
              />
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mt: 2, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
