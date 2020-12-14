import React from "react";
import DefaultTemplate from "../templates/default";
import get from "lodash.get";
import styled from "styled-components";
import ListingCards from "../components/listing-cards";
import useLocationRegions from "../hooks/use-location-regions";

type RetailerType = "delivery" | "dispensary" | "doctor";
const regionTypes: RetailerType[] = ["delivery", "dispensary", "doctor"];
const regionLabels: {
  delivery: string;
  dispensary: string;
  doctor: string;
} = {
  delivery: "deliveries",
  dispensary: "dispensaries",
  doctor: "doctors",
};

export const ListingGroups = styled.div`
  margin-top: 30px;
  h2 {
    text-align: left;
  }
`;

function getLabel(listings: any, label: string) {
  if (get(listings, "listings").length) {
    return (
      <div key={label}>
        <strong> {label} </strong>
      </div>
    );
  }
  return <div />;
}

function Home() {
  const {
    // isLoading,
    isError,
    isIdle,
    data,
  } = useLocationRegions();
  const { regions, error } = data || {};

  return (
    <DefaultTemplate>
      <>
        {isError && error.length && <div> {error} </div>}
        {!isIdle && regions && !!Object.entries(regions).length && (
          <React.Fragment>
            {regionTypes.map((retailerType: RetailerType) => (
              <ListingGroups key={retailerType}>
                <h2>
                  {getLabel(regions[retailerType], regionLabels[retailerType])}
                </h2>
                <ListingCards
                  listings={get(regions[retailerType], "listings")}
                />
              </ListingGroups>
            ))}
          </React.Fragment>
        )}
      </>
    </DefaultTemplate>
  );
}

export default Home;
