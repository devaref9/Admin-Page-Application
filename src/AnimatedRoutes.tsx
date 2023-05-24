import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage/index";
import EditPage from "./pages/EditPage/index";
import { AnimatePresence } from "framer-motion";
import SignIn from "./features/auth/pages/SignIn/index";
import { useContext } from "react";
import { AuthContext } from "./features/auth/authContext";

const AnimatedRoutes = () => {
  const location = useLocation();

  const { state } = useContext(AuthContext);
  let currentUser = state.currentUser;

  type RequiredAuthType = {
    children: JSX.Element;
  };
  const RequireAuth = ({ children }: RequiredAuthType): JSX.Element => {
    return currentUser ? children : <Navigate to="/signin" />;
  };
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="add"
            element={
              <RequireAuth>
                <AddPage />
              </RequireAuth>
            }
          />
          <Route
            path="/edit/:userId"
            element={
              <RequireAuth>
                <EditPage />
              </RequireAuth>
            }
          />

          {/* catch all - replace with 404 component */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
