import React from 'react';
import ListingCard from '../listing-card';
import { Link } from 'react-router-dom';

const ListingCards = ({ listings }: { listings: any }) => (
  <React.Fragment>
    {listings.map((listing: any) => (
      <Link to={`/${listing.type}/${listing.wmid}`} key={listing.id}>
        <ListingCard listing={listing} />
      </Link>
    ))}
  </React.Fragment>
);

export default ListingCards;
