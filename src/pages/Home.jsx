import React from "react";
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
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

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
