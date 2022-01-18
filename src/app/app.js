import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/nav/nav";
import Landing from "../components/landing/landing";
import About from "../components/about/about";
import Games from "../components/games/games";
import Players from "../components/players/players";
import News from "../components/news/news";
import Quizzes from "../components/quizzes/quizzes";
import Footer from "../components/news/footer/footer";
import "./global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [allPlayers, setAllPlayers] = useState([]);
  const [recentTweet, setRecentTweet] = useState({ id: "", text: "" });

  const fetchAllPlayers = async () => {
    await axios
      .get(`http://data.nba.net/data/10s/prod/v1/2021/players.json`)
      .then((res) => {
        setAllPlayers(res.data.league.standard);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTweet = async () => {
    await axios
      .get("http://localhost:5000/")
      .then((res) => {
        setRecentTweet({
          id: res.data.meta.newest_id,
          text: res.data.data[0].text,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  useEffect(() => {
    fetchTweet();
  }, [recentTweet.id]);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <main>
      <Nav width={width} />
      <Landing />
      <About width={width} />
      <Games width={width} allPlayers={allPlayers} />
      <Players width={width} allPlayers={allPlayers} />
      <News id={recentTweet.id} />
      <Quizzes />
      <Footer tweet={recentTweet.text} />
    </main>
  );
}

export default App;
