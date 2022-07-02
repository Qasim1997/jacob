import React from "react";
import Button from "@mui/material/Button";
import Header from "./component/Header";
import Benefit from "./component/Benefit";
import Solutions from "./component/Solutions";
import Caroudel from "./component/caroudel";
import Car from "./component/Car";
import Footer from "./component/Footer";

function Homepage() {
  return (
    <div>
      <Header/>
      <Benefit/>
      <Solutions/>
      <Car/>
      <Footer/>
    </div>
  );
}

export default Homepage;
