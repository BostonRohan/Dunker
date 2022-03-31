import { useState, useCallback, useEffect, useMemo } from "react";
import format from "../../../utils/formatDate";
import Game from "../games/game";
import sort from "../../../utils/sortByTime";
import Modal from "../games/modal/modal";
import week from "../../../utils/week";
import styles from "../../styles/games.module.css";

function Games({ width, allPlayers, games, fetchGames }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState("");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleClick = useCallback(
    async (clickedDate) => {
      setClicked(clickedDate);
      clickedDate = clickedDate.split(" ");
      clickedDate.shift();
      clickedDate = clickedDate.join(" ");
      await fetchGames(clickedDate);
    },
    [games]
  );

  return (
    <div className={styles.wrapper}>
      <section className={styles.date}>
        <i className="bi bi-calendar-event" onClick={() => setOpen(true)} />
        <select
          id="day"
          className={styles.select}
          onChange={(e) => handleClick(e.target.value)}
          value={"" || clicked}
        >
          {week(new Date()).map((day) => {
            return (
              <option key={day.valueOf()}>
                {new Date().getDay() === day.getDay()
                  ? "Today"
                  : weekday[day.getDay()] + " " + format(day)}
              </option>
            );
          })}
        </select>
      </section>
      <section className={`${styles.page} Games`}>
        {!games && (
          <p>
            There was an error fetching the games for this date. Please try
            again.
          </p>
        )}
        {games.length
          ? sort(games).map((game) => {
              return (
                <Game
                  key={game.id}
                  id={game.id}
                  home={game.home_team.name}
                  visitor={game.visitor_team.name}
                  homeScore={game.home_team_score}
                  visitorScore={game.visitor_team_score}
                  status={game.status}
                  width={width}
                  allPlayers={allPlayers}
                />
              );
            })
          : "No Games Scheduled Today"}
      </section>
    </div>
  );
}

export default Games;
