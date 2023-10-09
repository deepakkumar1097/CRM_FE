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
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DrawerComp from "./DrawerComp";

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
      <AppBar sx={{ backgroundColor: "black" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>Dashboard</Typography>
              <Grid item xs={1} sx={{ marginLeft: "auto" }}>
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Grid>
              <DrawerComp links={links} />
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
              <Grid item xs={1}>
                {/* {theme.palette.mode} mode */}
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Grid>
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
