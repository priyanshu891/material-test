import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Item(props) {
  const imageUrl = props?.item.image;
  return (
    <Paper className="text-center paper-example">
      <div
        className="carousel-example"
        style={{ backgroundImage: "url(" + imageUrl + ")" }}
      >
        <div className="d-flex align-items-center flex-column justify-content-center pt-5 carousel-example">
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <Button className="CheckButton">Check it out!</Button>
        </div>
      </div>
    </Paper>
  );
}

const CarouselExample = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://picsum.photos/id/377/800/300?grayscale&blur=2",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://picsum.photos/id/738/800/300?grayscale&blur=2",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselExample;
