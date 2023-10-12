import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Body() {
  const theme = useTheme();
  console.log(theme.palette.background);
  return (
    <div className="body-container">
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // Add other styles for your Body component here
        }}
      >
        <h1>This is body</h1>
      </Box>
    </div>
  );
}
