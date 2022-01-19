import { getPlayerID } from "../../../../app/getPlayerId";
function Table({ data, width, team, score, allPlayers }) {
  const type = [
    "PLAYER",
    "PTS",
    "AST",
    "REB",
    "FG%",
    "FGA",
    "FGM",
    "3PA",
    "3P%",
    "3PM",
    "FTM",
    "FTA",
    "FT%",
    "OREB",
    "DREB",
    "BLK",
    "STL",
    "TO",
    "PF",
    "MIN",
  ];
  return (
    data && (
      <table>
        <thead>
          <tr>
            <th>
              <h1>
                {team} {score}
              </h1>
            </th>
          </tr>
          <tr>
            {type.map((item, index) => {
              return <td key={index}>{item}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((player) => {
            const name =
              player.player.first_name + " " + player.player.last_name;
            return (
              <tr key={player.id}>
                <td>
                  {width > 600 ? (
                    <img
                      src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${getPlayerID(
                        allPlayers,
                        name
                      )}.png`}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <section>
                    {width < 600
                      ? `${player.player.first_name[0]}. ${player.player.last_name}`
                      : player.player.first_name +
                        " " +
                        player.player.last_name}
                    <span>{player.player.position}</span>
                  </section>
                </td>
                <td>{player.pts}</td>
                <td>{player.ast}</td>
                <td>{player.reb}</td>
                <td>{player.fg_pct}</td>
                <td>{player.fga}</td>
                <td>{player.fgm}</td>
                <td>{player.fg3a}</td>
                <td>{player.fg3_pct}</td>
                <td>{player.fg3m}</td>
                <td>{player.ftm}</td>
                <td>{player.fta}</td>
                <td>{player.ft_pct}</td>
                <td>{player.oreb}</td>
                <td>{player.dreb}</td>
                <td>{player.blk}</td>
                <td>{player.stl}</td>
                <td>{player.turnover}</td>
                <td>{player.pf}</td>
                <td>{player.min}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}
export default Table;
