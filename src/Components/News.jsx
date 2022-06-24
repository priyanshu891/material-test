import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./News.css";

const News = () => {
  return (
    <Grid container>
      <Grid item md={5}>
        <div className="content-wrapper">
          <Box className="content-1">
            <Typography variant="button" display="block" gutterBottom>
              News
            </Typography>
            <Typography variant="body1" display="inline-block" marginY="16px">
              <Box backgroundColor="#e4d100">
                IRS Increases Business Mileage
              </Box>
              <Box backgroundColor="#e4d100">Rate Effective July 2022</Box>
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              June 14
            </Typography>
            <Typography variant="body2" color="#2098d5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              culpa maxime fugit dolorem expedita, nam eaque, magnam assumenda
              sed suscipit explicabo reprehenderit atque, molestiae quae aperiam
              repudiandae iusto praesentium illo. Dolor ducimus dolorum, cum
              quos voluptatem voluptates ipsa nam soluta esse perspiciatis,
              necessitatibus eos minima fuga, facere labore impedit natus.
            </Typography>
            <Typography
              variant="caption"
              display="block"
              fontWeight="500"
              marginY="16px"
            >
              3 mins read
            </Typography>
          </Box>
          <Box className="content-2">
            <div className="center-image"></div>
          </Box>
        </div>
      </Grid>
      <Grid item md={7}>
        <Box className="news-image">
          <div className="info-card">
            <Card
              sx={{
                minWidth: 275,
                maxWidth: 290,
                borderRadius: "4px 0 0 4px",
                backgroundColor: "#2098d5",
                color: "#ffffff",
              }}
            >
              <CardContent>
                <Typography variant="overline" display="block" gutterBottom>
                  Event
                </Typography>
                <Typography variant="body2" mb="16px" color="#000000">
                  APAC Focused Webinar Series
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                  Optimising Employee Relocation Journey
                </Typography>
                <Typography variant="caption" display="inline-block" lineHeight="1.1">
                  30 June 2022, Wednesday
                  <br />
                  03:00 pm onwards (Singapore Time)
                  <br />1 hour Microsoft Event
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" disableElevation>Register Now</Button>
              </CardActions>
            </Card>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default News;
