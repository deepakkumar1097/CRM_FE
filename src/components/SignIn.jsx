import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SignIn() {
  let navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (e) => setUserId(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7000/crm/api/v1/auth/signin",
        {
          userId,
          password,
        }
      );

      if (response.status === 200 && response.data && response.data.user) {
        const token = response.data.user.accessToken;

        localStorage.setItem("token", token);

        navigate("/home");
      } else {
        console.error("Authentication failed:", response.data);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };
  return (
    <div className="form signin-form">
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="standard-required"
          label="Userid"
          variant="standard"
          value={userId}
          onChange={handleUserIdChange}
        />
        <TextField
          required
          id="standard-password-input-required"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={handlePasswordChange}
        />
        <Stack spacing={2} m={3} direction="column">
          <Button variant="outlined" type="submit">
            Sign in
          </Button>
          <Link to="/signup">
            <Button variant="contained">Create New Account</Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default SignIn;
