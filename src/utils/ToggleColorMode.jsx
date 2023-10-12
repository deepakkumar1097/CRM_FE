import Home from "../pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

  const theme = React.useMemo(
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
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
