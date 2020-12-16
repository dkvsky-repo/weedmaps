import React, { FC } from "react";
import { AppWrapper, AppContent } from "./styles";
import Header from "../../components/header";
import Hero from "../../components/hero";

// PART 1 - Routing
// Section 4
// Implement the following logic: When a user is not on the homepage, hide the Hero component

// ✅
interface Props {
  showHero?: boolean,
  children: any
}
 
const DefaultTemplate: FC<Props> = ({children, showHero}) => {
console.log(children, showHero)
  return (
    <AppWrapper>
      <Header />
      {(showHero) ? <Hero /> : ''}
      <AppContent>{ children }</AppContent>
    </AppWrapper>
  );
};

export default DefaultTemplate;
