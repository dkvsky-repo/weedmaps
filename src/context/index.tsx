import React from "react";

type LatLng = {
  latitude?: number;
  longitude?: number;
};
type Values = {
  locate: (cords: LatLng) => void;
  coords: LatLng;
};

export function useGlobal(): Values {
  const [coords, setCoords] = React.useState({});

  async function locate(latlng: LatLng) {
    setCoords(latlng);
  }

  return {
    locate,
    coords,
  };
}

export const EMPTY: unique symbol = Symbol();
export const GlobalContext = React.createContext<Values | typeof EMPTY>(EMPTY);
