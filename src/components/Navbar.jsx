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
import DrawerComp from "./DrawerComp";
import DarkMode from "../utils/DarkMode";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

function Navbar({ links, ColorModeContext, user }) {
  const theme = useTheme();
  const [value, setValue] = useState();

  let navigate = useNavigate();

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const colorMode = React.useContext(ColorModeContext);

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    // Perform the logout actions (e.g., clearing user session)
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("loginUser"); // Example: Clear a user token if used
    // Redirect to the sign-in page
    navigate("/signin");
    // window.location.href = "/signin";
  };

  let firstLetter = "";

  if (user && user.userType) {
    firstLetter = user.userType[0].toUpperCase();
  } else {
    firstLetter = "";
  }

  const tabClickHandler = (e, val) => {
    setValue(val);
    navigate(`/item${val + 1}`);
  };

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
              <Typography
                onClick={() => navigate("/home")}
                sx={{ cursor: "pointer" }}
              >
                Dashboard
              </Typography>{" "}
              <div className="mobile_view">
                {!isSmallDevice && (
                  <>
                    <div className="user-profile">
                      <Avatar
                        sx={{
                          bgcolor: deepPurple[500],
                          width: "30px",
                          height: "30px",
                          color: "white",
                        }}
                      >
                        {firstLetter}
                      </Avatar>
                      <Typography sx={{ marginRight: 1 }}>
                        {user?.name}
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
                <Typography
                  onClick={() => navigate("/home")}
                  sx={{ cursor: "pointer" }}
                >
                  Dashboard
                </Typography>
              </Grid>
              {isLoggedIn ? (
                <Grid item xs={7}>
                  <Tabs
                    value={value}
                    textColor="inherit"
                    indicatorColor="secondary"
                    onChange={(e, val) => tabClickHandler(e, val)}
                  >
                    {links.map((item, index) => (
                      <Tab label={item} key={index} />
                    ))}
                  </Tabs>
                </Grid>
              ) : (
                ""
              )}

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
                            color: "white",
                          }}
                        >
                          {firstLetter}
                        </Avatar>
                        <Typography sx={{ marginRight: 1 }}>
                          {user?.name}
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
