import React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function DarkMode({ colorMode, theme, xs }) {
  // console.log(colorMode, theme);
  return (
    <Grid item sx={{ marginLeft: "auto" }} xs={xs}>
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
  );
}

export default DarkMode;
