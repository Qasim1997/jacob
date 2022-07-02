/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Grid } from "@mui/material";

function Solutions() {
  return (
    <div>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              width: "100%",
              height: 500,
              backgroundColor: "#000733",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                
              </Grid>
              <Grid item xs={12} md={8}>
                <div className="row"></div>
                <div class="d-flex justify-content-around">
                  <h3 id="switching">Switching Issues</h3>
                  <h3 id="switching" className="jacobLaw">
                    Jacob Law Solutions
                  </h3>
                </div>
             
                  <img
                  src="./img/timeframe16.png"
                  width={300}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/time frame-01.png"
                  width={150}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/JL timeframe-01.png"
                  width={300}
                  classNameName="badge_1black"
                />{" "}
                <br />
                <img
                  src="./img/others-process-01.png"
                  width={300}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/PROCESS-01.png"
                  width={150}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/jl process-01.png"
                  width={300}
                  classNameName="badge_1black"
                />
                <br />
                <img
                  src="./img/others-communication-01.png"
                  width={300}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/communication-01.png"
                  width={150}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/JL timeframe-01.png"
                  width={300}
                  classNameName="badge_1black"
                />
                <br />{" "}
                <img
                  src="./img/inconvenient.png"
                  width={300}
                  classNameName="badge_1black"
                />
                <img
                  src="./img/satisfaction-01.png"
                  width={150}
                  classNameName="ms-5"
                />
                <img
                  src="./img/JL timeframe-01.png"
                  width={300}
                  classNameName="ms-5"
                />
                <br />
                <img
                  src="./img/others-budget-01.png"
                  width={300}
                  classNameName="ms-5"
                />
                <img
                  src="./img/BUDGET-01.png"
                  width={150}
                  classNameName="ms-5"
                />
                <img
                  src="./img/JL timeframe-01.png"
                  width={300}
                  classNameName="ms-5"
                />
                <br />
                  </Grid>
              
              <Grid item xs={12} md={1}>
                
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <br />
      <br />
  
    </div>
  );
}

export default Solutions;
