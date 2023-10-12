import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

function SignIn() {
  const theme = useTheme();
  let navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (e) => setUserId(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const dispatch = useDispatch();

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
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        dispatch({ type: "LOGIN", payload: response.data.user });
        localStorage.setItem("loginUser", response.data);

        navigate("/home");
      } else {
        console.error("Authentication failed:", response.data);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };
  return (
    <div
      className="form signin-form"
      style={{ height: "100vh", width: "100%" }}
    >
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: "100vh",
          width: "100%",
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
