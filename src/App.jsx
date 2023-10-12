import { React, useEffect, useState, useMemo } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { linksArray, ColorModeContext } from "./utils/constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Body from "./pages/Body";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";
import Item4 from "./pages/Item4";

function App() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <>
      <StyledEngineProvider>
        <Layout
          linksArray={linksArray}
          ColorModeContext={ColorModeContext}
          user={user}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Body />} />
            <Route path="/item1" element={<Item1 />} />
            <Route path="/item2" element={<Item2 />} />
            <Route path="/item3" element={<Item3 />} />
            <Route path="/item4" element={<Item4 />} />
          </Routes>
        </Layout>
      </StyledEngineProvider>
    </>
  );
}

// export default App;

export default function ToggleColorMode() {
  const initialMode = localStorage.getItem("colorMode") || "light";
  const [mode, setMode] = useState(initialMode);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        // Store the color mode in local storage
        localStorage.setItem("colorMode", newMode);
      },
    }),
    [mode]
  );

  useEffect(() => {
    // Retrieve the color mode from local storage when the component mounts
    const storedMode = localStorage.getItem("colorMode");
    if (storedMode) {
      setMode(storedMode);
    }

    // Check if the user is logged in and set the flag accordingly
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // User is logged in, set a flag to indicate that
      localStorage.setItem("isLoggedIn", "true");
    } else {
      // User is not logged in, remove the flag
      localStorage.removeItem("isLoggedIn");
    }
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        svg: {
          color: "white",
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 425,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        typography: {
          fontFamily: "Poppins",
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
