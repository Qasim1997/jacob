import React from 'react'
import { Box, Grid , Typography } from "@mui/material";

function Footer() {
  return (
    <div className='footer_main'>
<br/>
<Box
            sx={{
              width: "100%",
              height: 250,
              backgroundColor: "#001060",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                
              </Grid>
              <Grid item xs={12} md={8}>
                <br/>
                <br/>
                <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography variant='h6'  className='footer-link'>Quick Links</Typography>
                <br/>
              <ul className='footer-link'>
                <li>Home</li>
                <li>About</li>
                <li>Property Law</li>
                <li>Probate& Succession Law</li>
                <li>Contact</li>
               </ul>
             
              </Grid>
              <Grid item xs={12} md={4} className='pt-5 ms-5'>
             

              <img src="./img/jacoblogo.png" width={100}/>

                  </Grid>
              <Grid item xs={12} md={4}>
              <Typography variant='h6'  className='footer-link'>Contact</Typography>
                <br/>
              <ul className='footer-link'>
                <li>address:Unit5,Complex 5 Riverstown</li>
                <li>Industrial AreavTramore Waterford</li>
                <li>phone:</li>
                <li>Email:</li>
                <li>Fax:</li>
               </ul>
              </Grid>
            </Grid>
            

                  </Grid>
              
              <Grid item xs={12} md={1}>
                
              </Grid>
            </Grid>
          </Box>
    </div>
  )
}

export default Footer