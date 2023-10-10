import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DrawerComp from "./DrawerComp";
import DarkMode from "./DarkMode";

function Navbar({ links, ColorModeContext }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const colorMode = React.useContext(ColorModeContext);
  const [value, setValue] = useState();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <AppBar sx={{ backgroundColor: "#132043" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>Dashboard</Typography>
              <div className="mobile_view">
                <DarkMode colorMode={colorMode} theme={theme} />
                <DrawerComp links={links} />
              </div>
            </>
          ) : (
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
              <DarkMode colorMode={colorMode} theme={theme} xs={1} />
              <Grid item xs={2} alignItems="center">
                <Box display="flex">
                  <Button sx={{ marginLeft: "auto" }} variant="primary">
                    Login
                  </Button>
                  <Button sx={{ marginLeft: 1 }} variant="primary">
                    Sign Up
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
