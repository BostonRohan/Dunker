function Player({ player }) {
  const type = [
    "games played",
    "minutes",
    "fgm",
    "fga",
    "3pm",
    "3pa",
    "ftm",
    "fta",
    "oreb",
    "dreb",
    "reb",
    "ast",
    "stl",
    "blk ",
    "to",
    "pf",
    "pts",
    "fg%",
    "3p%",
    "ft%",
  ];
  return (
    player.id !== 0 && (
      <>
        <h1>{player.name}</h1>
        <img
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.imageID}.png`}
          alt=""
        />
        <table>
          <tbody>
            {type.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.toUpperCase()}</td>
                  {player.stats[0] === undefined ? (
                    <td>N/A</td>
                  ) : (
                    <td>{player.stats[0][index]}</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
  );
}
export default Player;
