import { Container } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container style={{height:'100px'}}>
      <img
        src={require("../assets/CARTUS_LOGO.jpeg")}
        height="55px"
        width="137px"
        alt="Cartus Logo"
        style={{ padding: ".5rem" }}
      />
    </Container>
  );
};

export default Header;
