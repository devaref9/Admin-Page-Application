import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "./containers/Layout/Layout";
import GlobalStyle from "./globalStyles";
import GlobalFont from "./fonts/fonts";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddPage from "./pages/AddPage/AddPage";
import CheckPage from "./pages/CheckPage/CheckPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalFont />
        <GlobalStyle />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="add" element={<AddPage />} />
              <Route path="/check/:userId" element={<CheckPage />} />
              <Route path="/edit/:userId" element={<AddPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
}

export default App;
