import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import GlobalFont from "./fonts/fonts";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalFont />
        <GlobalStyle />
        <AnimatedRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;
