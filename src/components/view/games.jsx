import Game from "../games/game";
import styles from "../../styles/games.module.css";

function Games({ width, allPlayers, games }) {
  return (
    <>
      <section className={`${styles.page} Games`}>
        {games
          ? games.map((game) => {
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
    </>
  );
}

export default Games;
