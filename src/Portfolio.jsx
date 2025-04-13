import React, { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const portfolioItems = [
  {
    id: 1,
    title: "Project One",
    description: "Description of Project One",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of Project Two",
    tags: ["Vue", "JavaScript"],
  },
  // Add more projects as needed
];

function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = portfolioItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>
      <TextField
        label="Search Projects"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={2}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <div>
                  {item.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{ margin: "2px" }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
