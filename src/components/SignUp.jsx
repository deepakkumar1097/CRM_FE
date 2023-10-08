import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

function SignUp() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userId: "",
    userType: "",
  });
  const [warning, setWarning] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //   const handleSelectChange = (event) => {
  //     setFormData({ ...formData, userType: event.target.value });
  //   };

  const handleSubmit = async (e) => {
    console.log(1);
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/crm/api/v1/auth/signup",
        formData
      );

      if (response.status === 201) {
        console.log("User registered successfully");
      } else {
        console.error("Error while signing up:", response.data.error);

        setWarning("An error occurred while signing up. Please try again.");
      }
      navigate("/signin");
    } catch (error) {
      console.error("Error while signing up:", error);
    }
  };
  return (
    <div className="form signup-form">
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
          label="Name"
          variant="standard"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="standard-required"
          label="User Id"
          variant="standard"
          name="userId"
          value={formData.userId}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="standard-required"
          label="Password"
          variant="standard"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormControl variant="standard" sx={{ m: 1, width: "25ch" }}>
          <InputLabel id="demo-simple-select-label" required>
            User Type{" "}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="User Type"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"Engineer"}>Engineer</MenuItem>
            <MenuItem value={"Customer"}>Customer</MenuItem>
          </Select>
        </FormControl>
        <Stack spacing={2} m={3} direction="column">
          <Button variant="outlined" type="submit">
            Sign up
          </Button>
          {warning && <p>{warning}</p>}
        </Stack>
      </Box>
    </div>
  );
}

export default SignUp;
