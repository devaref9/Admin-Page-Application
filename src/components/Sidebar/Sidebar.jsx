import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { SidebarStyle } from "./Sidebar.style";

const Sidebar = () => {
  return (
    <SidebarStyle bg="#212A3E">
      <SearchForm />
    </SidebarStyle>
  );
};
export default Sidebar;
