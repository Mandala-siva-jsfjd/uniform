import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Stack,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import logo from "../images/TataSTRIVE.png"; // your logo

const Login = () => {
  const [credentials, setCredentials] = useState({ userName: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.userName || !credentials.password) {
      enqueueSnackbar("All fields are required", { variant: "error" });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      enqueueSnackbar("Login successful!", { variant: "success" });
    }, 1000);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #007e94, #e2e3ea)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          width: 380,
          maxWidth: "100%",
          borderRadius: 4,
          backgroundColor: "#ffffffee",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <img src={logo} alt="Logo" style={{ width: 80 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007e94" }}>
            Uniform Tracking Login page
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Username"
                name="userName"
                value={credentials.userName}
                onChange={handleChange}
                size="small"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                size="small"
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={loading}
                sx={{
                  backgroundColor: "#007e94",
                  "&:hover": { backgroundColor: "#00647a" },
                  borderRadius: 8,
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
