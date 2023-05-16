import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage/index.jsx";
import AddPage from "./pages/AddPage/index.jsx";
import EditPage from "./pages/EditPage/index.jsx";
import { AnimatePresence } from "framer-motion";
import SignIn from "./features/auth/pages/SignIn/index.jsx";
import { useContext } from "react";
import { AuthContext } from "./features/auth/authContext.js";

const AnimatedRoutes = () => {
  const location = useLocation();

  const { state } = useContext(AuthContext);
  const currentUser = state.currentUser;


  const RequireAuth = ({ children }) => {
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
