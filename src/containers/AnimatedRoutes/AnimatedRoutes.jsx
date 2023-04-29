import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import AddPage from "../../pages/AddPage/AddPage";
import CheckPage from "../../pages/CheckPage/CheckPage";
import { AnimatePresence } from "framer-motion";
import Editpage from "../../pages/EditPage/Editpage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="/check/:userId" element={<CheckPage />} />
          <Route path="/edit/:userId" element={<Editpage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
