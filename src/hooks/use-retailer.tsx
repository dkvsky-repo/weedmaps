import { useQuery } from "react-query";
import * as config from "../constants/config";

export default function useRetailer(wmid: string) {
  return useQuery(["retailer", wmid], () => {
    const url = `https://${config.API_HOST}/discovery/v1/listings/${wmid}`;
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
      .then((json: { data: { listing: any }; errors: { detail: any }[] }) => {
        const error = (json.errors && json.errors[0]) || {};
        const data = (json.data && json.data) || {};
        return { ...data, error };
      });
  });
}
