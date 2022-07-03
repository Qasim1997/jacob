import React from "react";
import { Grid, TextField, Typography, Pass } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Footer from './component/Footer'
function Contactus() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  let w = window.innerWidth;
console.log(w , 'wwwwwwwwwwwww');
  return (
    <div className="box_div">
<div >

			      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          
        </Grid>
        <Grid item xs={12} md={5}>

		<Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
			style={{backgroundColor: "#efebe9"}}
			className='form_box text-center'
          >
            <div>
              <Typography className="text-center ms-2" variant="h4">
                Contact us
              </Typography>
              <TextField
                id="outlined-required"
                label="First Name *"
                className="ms-5"
                placeholder="Enter First Name"
              />
              <TextField
                id="outlined-required"
                label="First Name *"
                className="ms-5"
                placeholder="Enter First Name"
              />{" "}
              <br/>
              <TextField
                id="outlined-required"
                label="Sur Name *"
                className="ms-5"
                placeholder="Enter SurName"
              />{" "}
              <TextField
                id="outlined-required"
                label="email *"
                className="ms-5"
                placeholder="Enter First Name"
              />
              <br/>
              <TextField
                id="outlined-required"
                label="Contact*"
                className="ms-5"
                placeholder="Enter First Name"
              />{" "}
              <TextField
                id="outlined-required"
                label="Property"
                className="ms-5"
                placeholder="Enter First Name"
                fullWidth="true"
              />
              <br />
              <TextField
                id="filled-select-currency-native"
                select
                label="Native select"
				className='ms-5'
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="filled"
                fullWidth="true"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
          </Box>

     
        </Grid>
        <Grid item xs={12} md={2}>
          
        </Grid>
      </Grid>

	
	
	</div>





	    <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>


	  <Footer/>
    </div>
  );
}

export default Contactus;
