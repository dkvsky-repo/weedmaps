import React from "react";
import ListingCard from "../listing-card";

const ListingCards = ({ listings }: { listings: any }) => (
  <React.Fragment>
    {listings.map((listing: any) => (
      <ListingCard listing={listing} key={listing.id} />
    ))}
  </React.Fragment>
);

export default ListingCards;
