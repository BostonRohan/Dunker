import { useState, useCallback } from "react";
import Game from "../games/game";
import sort from "../../../utils/sortByTime";
import Modal from "../games/modal/modal";
import format from "../../../utils/formatDate";
import styles from "../../styles/games.module.css";

function Games({ width, allPlayers, games, fetchGames }) {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState("");

  const setClickedDate = useCallback((date) => {
    if (format(new Date()) === date) setClicked("");
    else setClicked(date);
  });

  const close = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      {open && (
        <Modal
          fetchGames={fetchGames}
          close={close}
          setClickedDate={setClickedDate}
        />
      )}
      <section className={styles.date}>
        <i className="bi bi-calendar-event" onClick={() => setOpen(true)} />
        <h2>{clicked}</h2>
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
