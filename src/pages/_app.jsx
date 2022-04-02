import Head from "next/head";
import Nav from "../components/nav/nav";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Footer from "../components/view/footer";
import format from "../../utils/formatDate";
import "../styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App({ Component, pageProps }) {
  const [recentTweet, setRecentTweet] = useState({ id: "", text: "" });
  const [width, setWidth] = useState(0);
  const [allPlayers, setAllPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [gamesToday, setGamesToday] = useState([]);

  const fetchTweet = useCallback(async () => {
    await axios
      .get("https://dunkerio.herokuapp.com/")
      .then((res) => {
        setRecentTweet({
          id: res.data.meta.newest_id,
          text: res.data.data[0].text,
        });
      })
      .catch((err) => {
        setRecentTweet(null);
      });
  });
  const fetchAllPlayers = useCallback(async () => {
    await axios
      .get(`http://data.nba.net/data/10s/prod/v1/2021/players.json`)
      .then((res) => {
        setAllPlayers(res.data.league.standard);
      })
      .catch((err) => {
        setAllPlayers(null);
      });
  });
  const fetchGames = async (inputDate) => {
    const today = format(new Date());
    await axios
      .get(
        `https://www.balldontlie.io/api/v1/games?start_date=${
          inputDate ? inputDate : today
        }&end_date=${inputDate ? inputDate : today}`
      )
      .then((res) => {
        if (!inputDate) setGamesToday(res.data.data);

        setGames(res.data.data);
      })
      .catch((err) => {
        setGames(null);
        setGamesToday(null);
      });
  };

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, [width]);

  useEffect(() => {
    fetchTweet();
    fetchAllPlayers();
    fetchGames();
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Dunker.io</title>
        <meta name="description" content="Dunker basketball application" />
        <meta
          name="keywords"
          content="Web Development, JavaScript, React, Next, Express, Node, Boston, Rohan, Basketball, Live Stats, Sports, NBA"
        />
        <meta name="author" content="Boston Rohan" />
        <meta name="theme-color" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav width={width} games={gamesToday} />
      <Component
        {...pageProps}
        tweetId={recentTweet.id}
        width={width}
        allPlayers={allPlayers}
        games={games}
        fetchGames={fetchGames}
      />
      <Footer tweet={recentTweet.text} width={width} />
    </>
  );
}

export default App;
