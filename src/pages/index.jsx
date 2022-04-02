import Landing from "../components/view/landing";
import About from "../components/view/about";
import Games from "../components/view/games";
import News from "../components/view/news";

function Index({ tweetId, width, games, fetchGames, allPlayers }) {
  return (
    <main>
      <Landing />
      <About />
      <Games
        games={games}
        allPlayers={allPlayers}
        width={width}
        fetchGames={fetchGames}
      />
      <News id={tweetId} />
    </main>
  );
}

export default Index;
