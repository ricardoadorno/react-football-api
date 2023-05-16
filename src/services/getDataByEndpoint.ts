import axios from "axios";
import { apiKey } from "../config/constants";

function getDataByEndpoint(endpointParam: string) {
  const config = {
    method: "get",
    url: `https://v3.football.api-sports.io/${endpointParam}`,
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  return axios(config)
    .then(function (response) {
      return response.data.response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getDataByEndpoint;
