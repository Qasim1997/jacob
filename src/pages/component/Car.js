import { Grid } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Typography, Button } from "@mui/material";
function Car() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
   
        </Grid>
        <Grid item xs={12} md={8}>
        <Typography variant="h6"><strong>
        The Mortgage Switcher Package that Saves You Time and Money

        </strong>
      </Typography>
        </Grid>
        <Grid item xs={12} md={2}></Grid>

      </Grid>
    <br/>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}></Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">
                  <strong>Step1 </strong>
                </Typography>
                <Typography variant="h6">
                  Completing switch to Avant Money
                </Typography>
                <Typography>
                  Obtain your new loan from Avant Money pay off existing lender
                  Refund
                  <br /> surplus lender Refund surplusto you(if any)
                </Typography>
                <Button variant="contained">Get Started</Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  className="img-fluid"
                  src="./carousel/switching.jpg"
                  alt=""
                />
              </Grid>
            </Grid>
          </div>
          <div className="carousel-item">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}></Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">
                  <strong>Step2 </strong>
                </Typography>
                <Typography variant="h6">
                  Completing switch to Avant Money
                </Typography>
                <Typography>
                  Obtain your new loan from Avant Money pay off existing lender
                  Refund
                  <br /> surplus lender Refund surplusto you(if any)
                </Typography>
                <Button color="success">Get Started</Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  className="img-fluid"
                  src="./carousel/verification.jpg"
                  alt=""
                />
              </Grid>
            </Grid>
          </div>
          <div className="carousel-item">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}></Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">
                  <strong>Step3 </strong>
                </Typography>
                <Typography variant="h6">
                  Completing switch to Avant Money
                </Typography>
                <Typography>
                  Obtain your new loan from Avant Money pay off existing lender
                  Refund
                  <br /> surplus lender Refund surplusto you(if any)
                </Typography>
                <Button color="success">Get Started</Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  className="img-fluid"
                  src="./carousel/sign up.jpg"
                  alt=""
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Car;
