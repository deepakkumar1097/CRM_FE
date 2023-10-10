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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DrawerComp from "./DrawerComp";
import DarkMode from "./DarkMode";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

function Navbar({ links, ColorModeContext }) {
  const theme = useTheme();
  const [value, setValue] = useState();

  let navigate = useNavigate();

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const colorMode = React.useContext(ColorModeContext);

  const { user } = useSelector((user) => ({ ...user }));
  console.log(user.name);

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    // Perform the logout actions (e.g., clearing user session)
    localStorage.removeItem("isLoggedIn"); // Example: Clear a "isLoggedIn" flag
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("loginUser"); // Example: Clear a user token if used
    // Redirect to the sign-in page
    navigate("/signin");
    // window.location.href = "/signin";
  };

  const firstLetter = user.name[0].toUpperCase();
  console.log(firstLetter);

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
      <AppBar sx={{ backgroundColor: "#113946" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>Dashboard</Typography>{" "}
              <div className="mobile_view">
                {!isSmallDevice && (
                  <>
                    <div className="user-profile">
                      <Avatar
                        sx={{
                          bgcolor: deepPurple[500],
                          width: "30px",
                          height: "30px",
                        }}
                      >
                        {firstLetter}
                      </Avatar>
                      <Typography sx={{ marginRight: 1 }}>
                        {user.name}
                      </Typography>
                    </div>
                  </>
                )}
                <DarkMode colorMode={colorMode} theme={theme} />
                <DrawerComp
                  links={links}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
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
                <Box display="flex" alignItems={"center"}>
                  {isLoggedIn && (
                    <>
                      <div className="user-profile">
                        <Avatar
                          sx={{
                            bgcolor: deepPurple[500],
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          {firstLetter}
                        </Avatar>
                        <Typography sx={{ marginRight: 1 }}>
                          {user.name}
                        </Typography>
                      </div>
                      <Button
                        sx={{ marginLeft: 1 }}
                        variant="primary"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </>
                  )}
                  {/* <Button sx={{ marginLeft: 1 }} variant="primary">
                    Sign Up
                  </Button> */}
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
