import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const services = [
  {
    title: "Web Design & Development",
    image: "https://placehold.co/600x400?text=Web+Design+%26+Development",
    description:
      "From concept to deployment, we craft modern, fast, and responsive websites.",
  },
  {
    title: "App Design & Development",
    image: "https://placehold.co/600x400?text=App+Design+%26+Development",
    description:
      "We build cross-platform apps tailored for both performance and polish.",
  },
  {
    title: "User Experience (UX) Design",
    image: "https://placehold.co/600x400?text=UX+Design",
    description:
      "Intuitive interfaces built with your users in mind, ensuring seamless interaction.",
  },
  {
    title: "Custom Solutions",
    image: "https://placehold.co/600x400?text=Custom+Solutions",
    description:
      "From APIs to automation, we design systems that fit your unique needs.",
  },
];

export default function Services() {
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
        Services
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: "800px", margin: { xs: "0 auto", md: "0" } }}
      >
        Whether you're a startup or scaling enterprise, we offer digital
        solutions designed to evolve with your needs.
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={service.title}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{ borderRadius: 1 }}
              />
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mt: 2, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
