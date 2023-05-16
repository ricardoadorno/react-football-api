import "./style.scss";

export default function TeamCard({ team }) {
  return (
    <div className="card">
      <img
        className="card__img"
        src={team.logo}
        alt={team.name}
        width="100"
        height="100"
      />
      <h3 className="card__title">{team.name}</h3>
    </div>
  );
}
