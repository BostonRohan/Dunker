import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Landing from "../components/view/landing";
import About from "../components/view/about";
import Games from "../components/view/games";
import News from "../components/view/news";

function Index({ tweetId, width, games }) {
  const [allPlayers, setAllPlayers] = useState([]);

  const fetchAllPlayers = useCallback(async () => {
    await axios
      .get(`http://data.nba.net/data/10s/prod/v1/2021/players.json`)
      .then((res) => {
        setAllPlayers(res.data.league.standard);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  return (
    <main>
      <Landing />
      <About />
      <Games games={games} allPlayers={allPlayers} width={width} />
      <News id={tweetId} />
    </main>
  );
}

export default Index;
