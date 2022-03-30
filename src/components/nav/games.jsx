import styles from "../../styles/navGames.module.css";
import { useRouter } from "next/router";
import scroll from "../../../utils/scroll";

function Games({ games, open, close }) {
  const router = useRouter();
  const location = router.pathname;

  const handleClick = () => {
    if (location === "/") scroll("Games");
    else {
      router.push("/");
      setTimeout(() => {
        scroll("Games");
      }, 500);
    }
    close();
  };
  return (
    games && (
      <div
        className={open ? styles.active : styles.games}
        onClick={handleClick}
      >
        {games
          .sort((a, b) => b.time > a.time)
          .map((game) => {
            return (
              <div className={styles.content} key={game.id}>
                <span>{game.home_team_score}</span>
                <img
                  src={`./logos/${game.home_team.name}.png`}
                  alt={`${game.home_team.name} logo`}
                />
                <span>vs</span>
                <img
                  src={`./logos/${game.visitor_team.name}.png`}
                  alt={`${game.visitor_team.name} logo`}
                />
                <span>{game.visitor_team_score}</span>
                <section>
                  <span>{game.status}</span>
                </section>
              </div>
            );
          })}
      </div>
    )
  );
}
export default Games;
