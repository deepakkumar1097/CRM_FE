import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
export default function Item2() {
  const theme = useTheme();
  return (
    <div className="item2" style={{ height: "100vh", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>Item2</h1>
      </Box>
    </div>
  );
}
