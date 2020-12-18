// PART 1
// Section 5
// Given the URL structure of /[retailerType]/[wmid]
// parse the wmid from the url and pass it to the useRetailer hook
// ✅

// PART 4
// Finish the retailers page to responsively display:
// Feel free to render information that you would find useful when researching a retailer
// Feel free to style the page as you see fit so that it looks nice on mobile
// Be sure to include name, stars, and hours at minimum

/* 👉 I could have designed the styles better. I applied the minimal necessary
 to make it look good enough without exceeding the alloted time.
 In a real case scenario, I would review Styled Components
 documentation again to see available options to make it easier to scale and 
 maintain. I hope this meets your expectations.
 ✅
*/

import React from 'react';
import DefaultTemplate from '../templates/default';
import useRetailer from '../hooks/use-retailer';
import Stars from '../components/stars';
import styled, { StyledComponent } from 'styled-components';
import HoursOfBusiness from '../components/hours';
import Avatar from '../components/avatar';
import get from 'lodash.get';

type TestId = {
  'data-testid': string;
};
type StyleProps = {};
const BusinessNameWrapper: StyledComponent<
  'div',
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  font-size: 1.6rem;
  font-weight: bold;
`;
const AvatarWrapper = styled.div`
  img {
    border-radius: 8px;
    box-shadow: 4px 4px 8px #c9c9c9;
  }
`;
const Location = styled.div`
  font-size: 1.2rem;
  font-weight: normal;
`;
const ShopStatus = styled.div`
  text-transform: uppercase;
  .open {
    color: #00a8a3;
  }
  .closed {
    color: #e3452a;
  }
`;
const HoursWrapper = styled.div`
  font-size: 1.2rem;
  color: #4a4a4a;
  padding: 16px;
  border-radius: 8px;
  background-color: #f3f3f3;
  margin-bottom: 16px;
`;
const Contact = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #4a4a4a;
  padding: 8px 16px;
  border: 0.0625rem solid rgb(165, 169, 177);
  border-radius: 4px;
  margin-bottom: 16px;
`;

const RetailerWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const RetailerIdentity = styled.div`
  flex-direction: column;
  align-self: center;
`;
const RetailerDetails = styled.div``;

function Retailer({ match }: { match: any }) {
  const { wmid } = match.params;
  const { data, isLoading, isError } = useRetailer(wmid);
  const { ...listing } = data?.listing;

  const { rating = 0, name = '', business_hours = {} } = data?.listing || {};

  return (
    <DefaultTemplate>
      {isError && <div> {isError} </div>}
      {isLoading && <div>loading</div>}

      <RetailerWrapper>
        <RetailerIdentity>
          <AvatarWrapper>
            <Avatar
              img={`${get(listing, 'avatar_image.small_url')}`}
              width='120px'
              height='120px'
            />
          </AvatarWrapper>
          <BusinessName name={name} />
          <Stars rating={rating} />

          <Location>
            <p>
              {listing.city},&nbsp;{listing.state}
            </p>
          </Location>
        </RetailerIdentity>

        <RetailerDetails>
          <ShopStatus>
            {listing.open_now ? (
              <h3 className='open'>Open</h3>
            ) : (
              <h3 className='closed'>Closed</h3>
            )}
          </ShopStatus>

          <HoursWrapper>
            {business_hours && (
              <HoursOfBusiness businessHours={business_hours} />
            )}
          </HoursWrapper>

          <Contact>{listing.phone_number}</Contact>
          <Contact>{listing.email}</Contact>
        </RetailerDetails>
      </RetailerWrapper>
    </DefaultTemplate>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function BusinessName({ name }: { name: string }) {
  return (
    <BusinessNameWrapper data-testid='business-name'>
      {name}
    </BusinessNameWrapper>
  );
}

export default Retailer;
