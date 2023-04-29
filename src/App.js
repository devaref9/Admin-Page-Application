import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import GlobalFont from "./fonts/fonts";
import { Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import AnimatedRoutes from "./containers/AnimatedRoutes/AnimatedRoutes";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalFont />
        <GlobalStyle />
        <ScrollToTop />
        <AnimatedRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;
