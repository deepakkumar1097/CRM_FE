import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const linksArray = ["Item One", "Item Two", "Item Three", "Item Four"];
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function Home() {
  return (
    <div className="home">
      <Navbar links={linksArray} ColorModeContext={ColorModeContext} />
      <Body />
    </div>
  );
}

export default function ToggleColorMode() {
  const initialMode = localStorage.getItem("colorMode") || "light";
  const [mode, setMode] = React.useState(initialMode);
  const colorMode = React.useMemo(
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
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
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
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
