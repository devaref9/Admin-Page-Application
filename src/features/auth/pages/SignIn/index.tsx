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
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../utils/firebase";
import { useForm } from "react-hook-form";
import { schema } from "../../hooks/useValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../authContext";
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

  const [loading, setLoading] = useState<boolean>(false);

  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, data.adminEmail, data.adminPassword)
        .then((userCredential) => {
          setLoading(false);
          const user = userCredential.user;
          login(user);
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
          console.log(message);
          toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
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
            <Box sx={{ mt: 1 }}>
              <Box sx={{ position: "relative", mb: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  {...register("adminEmail")}
                  placeholder="Enter admin@test.com"
                />
                {errors.adminEmail ? (
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: "-15px",
                      fontSize: "12px",
                    }}
                    variant="subtitle2"
                    color="error"
                  >
                    <>{errors.adminEmail?.message}</>
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("adminPassword")}
                placeholder="Enter 123456"
              />
              <FormControlLabel
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
      <ToastContainer />
    </ThemeProvider>
  );
};

export default SignIn;
