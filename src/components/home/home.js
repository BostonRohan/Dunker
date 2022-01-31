import Landing from "./landing/landing";
import About from "./about/about";
import Games from "./games/games";
import News from "./news/news";

function Home({ allPlayers, width, id }) {
  return (
    <>
      <Landing />
      <About />
      <Games width={width} allPlayers={allPlayers} />
      <News id={id} />
    </>
  );
}
export default Home;
