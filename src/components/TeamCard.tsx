export default function TeamCard({ team }) {
  return (
    <div>
      <img src={team.logo} alt={team.name} width="100" height="100" />
      <h3>
        {team.name} - ({team.founded})
      </h3>
    </div>
  );
}
