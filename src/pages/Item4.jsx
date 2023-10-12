import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
export default function Item1() {
  const theme = useTheme();
  return (
    <div className="item4" style={{ height: "100vh", width: "100%" }}>
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
        <h1>Item4</h1>
      </Box>
    </div>
  );
}
