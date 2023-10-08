import React from "react";
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Typography>Dashboard</Typography>
          </Grid>
          <Grid item xs={5}>
            <Tabs value={0} textColor="inherit" indicatorColor="secondary">
              <Tab value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
              <Tab value="three" label="Item Three" />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
