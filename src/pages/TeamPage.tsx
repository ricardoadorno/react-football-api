import { useParams } from "react-router-dom";
import getDataByEndpoint from "../services/getDataByEndpoint";
import { useState } from "react";

export default function TeamPage() {
  const [players, setPlayers] = useState([]);
  const [lineups, setLineups] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [goalsStats, setGoalsStats] = useState([]);

  const { id } = useParams();

  return (
    <div>
      TeamPage: {id}
      <div>
        {players.map((player: any) => (
          <div key={player.player.id}>
            <h2>{player.player.name}</h2>
            <h2>{player.player.age}</h2>
            <h2>{player.player.nationality}</h2>
          </div>
        ))}
      </div>
      <button
        onClick={async () => {
          setPlayers(await getDataByEndpoint(`players?team=${id}&season=2020`));
        }}
      >
        Get Team
      </button>
      <button
        onClick={async () => {
          const response = await getDataByEndpoint(
            `teams/statistics?team=${id}&season=2020&league=39`
          );
          setLineups(response.lineups);
          setFixtures(response.fixtures);
          setGoalsStats(response.goalsStats);
        }}
      >
        Get Team Stats
      </button>
    </div>
  );
}
