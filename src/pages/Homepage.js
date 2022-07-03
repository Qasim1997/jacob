import React from "react";
import Button from "@mui/material/Button";
import Header from "./component/Header";
import Benefit from "./component/Benefit";
import Car from "./component/Car";
import Footer from "./component/Footer";



function Homepage() {
  return (
    <div>
      <Header/>
      <Benefit/>
      <Car/>
      <Footer/>
    </div>
  );
}

export default Homepage;
