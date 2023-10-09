import React, { useState } from "react";
import {
  Box,
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar({ links }) {
  const [value, setValue] = useState();

  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Grid container spacing={1} alignItems="baseline">
          <Grid item xs={2}>
            <Typography>Dashboard</Typography>
          </Grid>
          <Grid item xs={7}>
            <Tabs
              value={value}
              textColor="inherit"
              indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
            >
              {links.map((item, index) => (
                <Tab label={item} key={index} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Box>
              <Button sx={{ marginLeft: "auto" }} variant="primary">
                Login
              </Button>
              <Button sx={{ marginLeft: 1 }} variant="primary">
                Sign Up
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
