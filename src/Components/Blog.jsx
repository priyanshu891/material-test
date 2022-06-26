import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <Box marginTop="-270px" marginRight="1.5rem">
        <Typography variant="h6" gutterBottom component="div">
          Blogs
        </Typography>
      </Box>
      <Box>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={require("../assets/wall-1.jpg")}
          />
          <CardContent>
            <Typography variant="body2" color="#2098d5">
              Out Now!
            </Typography>
          </CardContent>
          <CardContent sx={{ pt: "0px" }}>
            <Typography variant="subtitle2">
              Flexible Mobility White paper:
            </Typography>
            <Typography variant="subtitle2">Building Budgets</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardMedia
            component="img"
            height="300"
            width="200"
            image={"https://picsum.photos/200/350"}
            alt="Paella dish"
          />
        </Card>
        <Box padding="1rem .5rem">
          <Grid container spacing={2}>
            <Grid item>
              <img
                alt="complex"
                src={"https://picsum.photos/56"}
                style={{ borderRadius: "4px" }}
              />
            </Grid>
            <Grid item xs={12} sm container direction="column">
              <Typography gutterBottom variant="subtitle2">
                Hear us every Friday's
              </Typography>
              <Typography variant="body2" color="#2098d5">
                Expert Series:
              </Typography>
              <Typography variant="body2" color="#2098d5">
                Moving in
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={require("../assets/wall-3.jpg")}
          />
          <CardContent>
            <Typography variant="body2" color="#2098d5">
              Mobility Supply Chain: What's happening in the wider Industry?
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="subtitle2">Don Briggs</Typography>
            <Typography variant="body2" color="text.secondary">
              Our latest Mobility Supply Chain Guide looks at the specific
              supply chain challenges within the wider industry. what cartus is
              doing to meet these challenges and key recommendations to help
              organisations
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <div className="card-4">
          <Card sx={{ borderRadius: "4px 0 0 4px" }}>
            <CardMedia
              component="img"
              height="250"
              image={"https://picsum.photos/250"}
              alt="Paella dish"
            />
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default Blog;
