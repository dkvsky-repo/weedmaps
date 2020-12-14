// PART 1 - Routing
// Section 2
// Make logo link back to homepage using react-router-dom

import React from "react";
import { AppHeader } from "./styles";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <AppHeader>
      <img src={logo} alt="weedmaps logo" />
    </AppHeader>
  );
};

export default Header;
