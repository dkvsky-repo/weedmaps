// PART 1 - Routing
// Section 3
// Make listing card link to correct retailer url /[retailerType=(dispensaries|deliveries|doctors)]/[wmid]
// ie /deliveries/23456789, /dispensaries/0987654321, /doctors/5678909876
// Import and use react-routers Link component

import React from "react";
import Avatar from "../avatar";
import Stars from "../stars";
import styled from "styled-components";
import get from "lodash.get";

const CardWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListingCard = ({ listing }: { listing: any }) => {
  return (
    <CardWrapper>
      <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
      <div> {listing.name} </div>
      <div> {listing.city} </div>
      <Stars rating={listing.rating} />
    </CardWrapper>
  );
};

export default ListingCard;
