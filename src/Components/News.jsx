import { Grid } from "@mui/material";
import React from "react";
import "./News.css";

const News = () => {
  return (
    <div
      style={{ height: "300px", backgroundColor: "#f4f4f4" }}
      className="news-wrapper"
    >
      <Grid container>
        <Grid item md={5}>
          <div style={{ marginLeft: "77px", paddingTop: "24px" }}>
            <h6 className="news-heading">News</h6>
            <div className="news-subheading">
              <p>IRS Increases Business Mileage</p>
              <p>Rate Effective July 2022</p>
            </div>
            <p className="news-date">June 14</p>
            <p className="news-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quibusdam omnis quos itaque at nobis doloremque incidunt similique
              magnam amet! Odit ratione reiciendis officia quisquam optio error
              deleniti. Dicta hic temporibus debitis reprehenderit nemo, sit
              dolore nam in asperiores laudantium.
            </p>
            <p className="news-footer">3 min read</p>
          </div>
        </Grid>
        <Grid item md={7}>
          <div className="news-image"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
