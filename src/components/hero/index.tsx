import React from "react";
import Locate from "../../icons/locate";
import MapPin from "../..//icons/map-pin";
import {
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton,
} from "./styles";
import { GlobalContext, EMPTY } from "../../context";
import useLocationRegions from "../../hooks/use-location-regions";

function Hero() {
  const values = React.useContext(GlobalContext);
  if (values === EMPTY) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  const { locate } = values;

  function locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        locate(position.coords);
      });
    }
  }

  const { isLoading, data } = useLocationRegions();
  const { location } = data || {};

  return (
    <HeroSection data-testid={heroDataTestId}>
      <ContentContainer>
        <LocationSection>
          <h2>
            <MapPin fill={"#7e7979"} width={"60px"} height={"40px"} />
            <span> {location ? location.name : ""} </span>
            <span> {isLoading && !isLoading ? "...locating" : ""} </span>
          </h2>
          <LocateButton onClick={locateMe}>
            <Locate fill={"#7e7979"} />
            <span> Locate Me </span>
          </LocateButton>
        </LocationSection>
        <TextContent>
          OG grandaddy purps with notes of diesel. Hydroponic nacho pop-tarts
          tetrahydrocannabinol hybrid schwag stems and seeds little orange
          hairs. Toke up on the Pineapple Express with that sticky icky shotgun
          sensamillia. Oh my gawd, they like totally know I'm high. Guatemalan
          purple haze grown outdoors by ganja shaman.
        </TextContent>
      </ContentContainer>
    </HeroSection>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const heroDataTestId = "hero";

export default Hero;
