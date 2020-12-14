import React, { FC } from "react";
import logo from "../../assets/logo.png";
import { AppHeader, AppWrapper, AppContent } from "./styles";
import Hero from "../../components/hero";

// PART 1 - Routing
// Section 4
// Implement the following logic: When a user is not on the homepage, hide the Hero component

const DefaultTemplate: FC = ({ children }) => {
  return (
    <AppWrapper>
      <AppHeader>
        <img src={logo} alt="weedmaps logo" />
      </AppHeader>
      <Hero />
      <AppContent>{children}</AppContent>
    </AppWrapper>
  );
};

export default DefaultTemplate;
