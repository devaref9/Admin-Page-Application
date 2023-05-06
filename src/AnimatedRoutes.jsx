import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage/index.jsx";
import AddPage from "./pages/AddPage/index.jsx";
import Editpage from "./pages/EditPage/index.jsx";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="/edit/:userId" element={<Editpage />} />

          {/* catch all - replace with 404 component */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
