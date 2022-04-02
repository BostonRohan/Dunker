import axios from "axios";
import { useState, useCallback } from "react";
import { getPlayerID } from "../../utils/getPlayerId";
import Player from "../components/player/player";
import styles from "../styles/players.module.css";

function Players({ allPlayers, width }) {
  const defaultState = { id: 0, name: "", imageID: 0, stats: [] };
  const [firstPlayer, setFirstPlayer] = useState(defaultState);
  const [secondPlayer, setSecondPlayer] = useState(defaultState);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(async () => {
    //If there is not a first and/or second player fetch the api, when the user clicks submit
    if (firstPlayer.id === 0 || secondPlayer.id === 0) {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players?search=${input}`)
        .then((res) => {
          setResult(res.data.data);
          setInput("");
        })
        .catch((err) => {
          setError(
            "An error occurred while finding this player, please try again."
          );
        });
    } else {
      return;
    }
  });

  const handleClick = useCallback((player) => {
    if (player === "first") {
      setFirstPlayer(defaultState);
    } else {
      setSecondPlayer(defaultState);
    }
  });

  const handleSelect = useCallback(async (id, name, imageID) => {
    await axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`
      )
      .then((res) => {
        let tempData = res.data.data.map((stat) => {
          //Fixing incorrect percentage data coming from api
          stat.fg_pct = (stat.fg_pct * 100).toFixed(1);
          stat.ft_pct = (stat.ft_pct * 100).toFixed(1);
          stat.fg3_pct = (stat.fg3_pct * 100).toFixed(1);
          delete stat.player_id;
          delete stat.season;
          return Object.values(stat);
        });
        const newState = {
          id: id,
          name: name,
          imageID: imageID,
          stats: [...tempData],
        };
        firstPlayer.id === 0
          ? setFirstPlayer(newState)
          : setSecondPlayer(newState);
      })
      .catch((err) =>
        setError(
          "An error occurred while finding this player, please try again."
        )
      );
    //Reset search results
    setResult([]);
  });

  return (
    <section className={styles.page}>
      <div className={`${styles.container} container`}>
        <section>
          <div className={styles.input}>
            <p>*Historic players or seasons currently not supported</p>
            {error && <p>{error}</p>}
            <input
              type="text"
              placeholder="Name"
              value={input || ""}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
          <table className={styles.select}>
            <thead>
              <tr>
                <td>Player</td>
              </tr>
            </thead>
            <tbody>
              {result.map((player) => {
                const name = player.first_name + " " + player.last_name;
                const imageID = getPlayerID(allPlayers, name);

                return (
                  <tr
                    key={player.id}
                    onClick={() => handleSelect(player.id, name, imageID)}
                  >
                    <td>
                      {width > 600 &&
                        (imageID ? (
                          <img
                            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${imageID}.png`}
                            alt={name}
                          />
                        ) : (
                          <i className={`${styles.avatar} bi bi-person`} />
                        ))}
                      {width < 600
                        ? `${player.first_name[0]}. ${player.last_name}`
                        : name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <div className={styles.compare}>
          <div
            className={styles.player}
            onClick={() => {
              handleClick("first");
            }}
          >
            <Player player={firstPlayer} />
          </div>
          <div className={styles.player} onClick={handleClick}>
            <Player player={secondPlayer} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Players;
