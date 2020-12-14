import React from "react";
import { useQuery } from "react-query";
import * as config from "../constants/config";
import { EMPTY, GlobalContext } from "../context";

export default function useLocationRegions() {
  const values = React.useContext(GlobalContext);
  if (values === EMPTY) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  const { coords } = values;
  return useQuery(
    ["regions", coords],
    async () => {
      const params = [
        `include${encodeURIComponent("[]")}=regions.listings`,
        `latlng=${encodeURIComponent(
          `${coords.latitude},${coords.longitude}`
        )}`,
      ];
      const url = `https://${
        config.API_HOST
      }/discovery/v1/location?${params.join("&")}`;

      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      };
      return fetch(url, options)
        .then((res) => {
          return res.json();
        })
        .then((json: any) => {
          const data = (json.data && json.data) || {};
          const error = (json.errors && json.errors[0]) || "";
          return {
            ...data,
            error,
          };
        });
    },
    {
      enabled: coords.latitude && coords.longitude,
    }
  );
}
