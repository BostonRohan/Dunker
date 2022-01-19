import { getPlayerID } from "../../../../../app/getPlayerId";
import "./styles.css";

function LeadingPlayer({ index, players, allPlayers, width }) {
  const statTypes = ["pts", "ast", "reb"];
  return (
    <div className="column">
      <img
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${getPlayerID(
          allPlayers,
          players[index].player.first_name +
            " " +
            players[index].player.last_name
        )}.png`}
        alt=""
      />
      <h3>
        {width < 600
          ? players[index].player.first_name
          : players[index].player.first_name +
            " " +
            players[index].player.last_name}
      </h3>
      {statTypes.map((type, statIndex) => {
        return (
          <section key={statIndex} className="stats">
            <h3>{type.toUpperCase()}</h3>
            <p>{players[index][type]}</p>
          </section>
        );
      })}
    </div>
  );
}
export default LeadingPlayer;
