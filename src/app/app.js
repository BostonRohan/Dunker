import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Home from "../components/home/home";
import Nav from "../components/nav/nav";
import Players from "../components/players/players";
import Quizzes from "../components/quizzes/quizzes";
import Footer from "../components/footer/footer";
import "./global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signup from "../components/quizzes/signup/signup";

//Accepts cookies
axios.defaults.withCredentials = true;

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
    <BrowserRouter>
      <Nav width={width} />
      <Footer tweet={recentTweet.text} />
      <Routes>
        <Route
          path="/"
          element={
            <Home width={width} allPlayers={allPlayers} id={recentTweet.id} />
          }
        />
        <Route
          path="/players"
          element={<Players width={width} allPlayers={allPlayers} />}
        />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
