import { Route, Routes, Navigate } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <StyledEngineProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
