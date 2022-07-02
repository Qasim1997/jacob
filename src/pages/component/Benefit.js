import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Benefit() {
  return (
    <div>
<br/>
<br/>
<br/>

      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
        </Grid>
        <Grid item xs={12} md={8}>
            <strong>
                <h3>Benefits to You</h3>

            </strong>
          <Typography>
            Switching your mortgage can be a long and stressful process. With
            our fully automated system, we make the switching process as smooth,
            straightforward and transparent as possible for you. We focus on our
            clients’ needs and guarantee The Best Mortgage Switching Service on
            the market. With our Online Solution and Step-by-Step guide tool,
            Switching your Mortgage is fast, easy and affordable!
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
        </Grid>
      </Grid>
<br/>

      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
        </Grid>
        <Grid item xs={12} md={6} className='ms-1'>
        <ul>
            <li>&#10004; Personalised Client Profile</li>
            <li>&#10004; 24/7 Access to Portal</li>
            <li>&#10004; Fully Remote Service</li>
            <li>&#10004; Upload & Manage Documentation Online</li>
            <li>&#10004; Digital Signatures & Video Conferencing</li>
            <li>&#10004; Accessible from Desktop & Mobile</li>
            <li>&#10004; Email & SMS Notifications</li>
            <li>&#10004; Fixed Professional Fee & Fixed Overall Cost</li>
        </ul>
        </Grid>
        <Grid item xs={12} md={3}>
<img src='./img/benefits.png' width={300} />

        </Grid>
      </Grid>
<div>


</div>

   
    </div>
  );
}

export default Benefit;




