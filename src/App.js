import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/globalStyles";
import GlobalFont from "./assets/fonts/fonts";
import AnimatedRoutes from "./AnimatedRoutes";
import { AuthProvider } from "./features/auth/authContext";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <>
          <GlobalFont />
          <GlobalStyle />
          <AnimatedRoutes />
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
