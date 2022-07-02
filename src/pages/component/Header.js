import React from "react";
import { Grid, Box, Typography } from "@mui/material";
function Header() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              width: "100%",
              height: 450,
              backgroundColor: "#000733",
            }}
          >
            <img src="./img/man.jpg" id="man_img" />

            <img src="./img/jacoblogo.png" id="img" />
            <Typography className="welcome_heading" variant="h5">
              Welcome to Jacob Law
            </Typography>
            <br />
            {/* <Typography className='welcome_head' variant="h5">Mortgage Switch Specialist Solicitors</Typography> */}
            <h5>Mortgage Switch Specialist Solicitors</h5>
            <Typography id="header_intro" variant="subtitle2">
              Dedicated to bringing innovation and technology to the business{" "}
              <br />
              of conveyancing and property transactions, Jacob Law have arranged
              <br />a specialist service, specifically tailored for Avant Money.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <div className="data">
        <Typography variant="subtitle" className="partner_text">
          IN PARTNERSHIP WITH:
          <img src="./img/avantmoney.png" id="avatmoney_img" />
        </Typography>
      </div>
    </div>
  );
}

export default Header;
