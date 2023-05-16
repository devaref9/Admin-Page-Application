import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../utils/firebase";
import { useForm } from "react-hook-form";
import { schema } from "../../hooks/useValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../authContext";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";

const theme = createTheme();

const ERROR_TYPE = {
  NETWORK_FAILED: "auth/network-request-failed",
};
const ERROR_MESSAGE = {
  NETWORK_FAILED: "Network Failed!",
};

const SignIn = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, data.adminEmail, data.adminPassword)
        .then((userCredential) => {
          setLoading(false);
          const user = userCredential.user;
          dispatch({ type: "LOGIN", payload: user });
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          let message = "";
          if (error.code === ERROR_TYPE.NETWORK_FAILED) {
            message = ERROR_MESSAGE.NETWORK_FAILED;
          } else {
            message = "Email and Password are Wrong!";
          }
          toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } catch (err) {
      console.error("Failed to save!", err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box noValidate sx={{ mt: 1 }}>
              <Box sx={{ position: "relative", mb: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  {...register("adminEmail")}
                  placeholder="Enter admin@test.com"
                />
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "-15px",
                    fontSize: "12px",
                  }}
                  variant="subtitle2"
                  color="error"
                >
                  {errors.adminEmail?.message}
                </Typography>
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("adminPassword")}
                placeholder="Enter 123456"
              />
              <FormControlLabel
                sx={{ mt: 0.5 }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, height: 36.5 }}
              >
                {loading ? (
                  <CircularProgress
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    sx={{
                      color: "whitesmoke",
                    }}
                  />
                ) : (
                  "Sign In"
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default SignIn;
