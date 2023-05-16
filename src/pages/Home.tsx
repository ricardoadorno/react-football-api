import { useState } from "react";
import getDataByEndpoint from "../services/getDataByEndpoint";
import TeamCard from "../components/TeamCard";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("Argentina");
  const [selectedSeason, setSelectedSeason] = useState("2018");
  const [selectedLeague, setSelectedLeague] = useState("");

  return (
    <div>
      <h1>Football API</h1>
      <nav className="navbar">
        <select
          className="select-input"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option defaultValue="country">Country</option>
          {countries.map((country: any) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <select
          className="select-input"
          onChange={(e) => setSelectedSeason(e.target.value)}
        >
          <option value="session">Session</option>
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
        <select
          className="select-input"
          disabled={!selectedCountry && !selectedSeason}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="league">League</option>
          {leagues.map((league: any) => (
            <option key={league.league.id} value={league.league.id}>
              {league.league.name}
            </option>
          ))}
        </select>
      </nav>

      <div className="cards-container">
        {teams.map((team: any) => (
          <TeamCard key={team.team.id} team={team.team} />
        ))}
      </div>
      {/* 
      <button
        onClick={async () => setCountries(await getDataByEndpoint("countries"))}
      >
        Get countries
      </button> */}
      {/* <button
        onClick={async () =>
          setSeasons(await getDataByEndpoint("leagues/seasons"))
        }
      >
        Get session
      </button>
      <button
        onClick={async () => {
          setLeagues(
            await getDataByEndpoint(
              `leagues?country=${selectedCountry}&season=${selectedSeason}`
            )
          );
        }}
      >
        Get leagues
      </button>
      <button
        onClick={async () => {
          setTeams(
            await getDataByEndpoint(
              `teams?league=${selectedLeague}&season=${selectedSeason}`
            )
          );
        }}
      >
        Get Teams
      </button> */}
    </div>
  );
}
