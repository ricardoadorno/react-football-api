import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY as string;

function getStatus() {
  var config = {
    method: "get",
    url: "https://v3.football.api-sports.io/status",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function App() {
  return (
    <div>
      App
      <button onClick={getStatus}>Get Status</button>
    </div>
  );
}
