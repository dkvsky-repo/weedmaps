// PART 1
// Section 5
// Given the URL structure of /[retailerType]/[wmid]
// parse the wmid from the url and pass it to the useRetailer hook

// PART 4
// Finish the retailers page to responsively display:
// Feel free to render information that you would find useful when researching a retailer
// Feel free to style the page as you see fit so that it looks nice on mobile
// Be sure to include name, stars, and hours at minimum

import React from "react";
import DefaultTemplate from "../templates/default";
import useRetailer from "../hooks/use-retailer";
import Stars from "../components/stars";
import styled, { StyledComponent } from "styled-components";
import HoursOfBusiness from "../components/hours";

type TestId = {
  "data-testid": string;
};
type StyleProps = {};
const BusinessNameWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>``;

function Retailer() {
  const wmid = "1";
  const { data, isLoading, isError } = useRetailer(wmid);

  const { rating = 0, name = "", business_hours = {} } = data?.listing || {};

  return (
    <DefaultTemplate>
      {isError && <div> {isError} </div>}
      {isLoading && <div>loading</div>}
      <Stars rating={rating} />
      <BusinessName name={name} />
      {business_hours && <HoursOfBusiness businessHours={business_hours} />}
    </DefaultTemplate>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function BusinessName({ name }: { name: string }) {
  return (
    <BusinessNameWrapper data-testid="business-name">
      {name}
    </BusinessNameWrapper>
  );
}

export default Retailer;
