import axios from "axios";
import { useState, useEffect } from "react";
import Game from "./game";
import "./styles.css";
function Games({ width, allPlayers }) {
  const [games, setGames] = useState([]);

  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const fetchData = async () => {
    await axios
      .get(
        `https://www.balldontlie.io/api/v1/games?start_date=${date}&end_date=${date}`
      )
      .then((res) => {
        setGames(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="Games">
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
