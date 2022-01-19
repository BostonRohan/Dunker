import { useState } from "react";
import BoxScore from "./boxscore/boxscore";
function Game({
  id,
  home,
  visitor,
  homeScore,
  visitorScore,
  status,
  width,
  allPlayers,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    //If the status is a time, don't allow the user to click on it, the game has not started.
    if (status.length <= 7 || status === "Halftime") {
      setOpen(!open);
    } else {
      return;
    }
  };
  return (
    <section
      className={open ? "container active" : "container"}
      onClick={handleClick}
    >
      {open ? (
        <BoxScore
          id={id}
          home={home}
          visitor={visitor}
          width={width}
          homeScore={homeScore}
          visitorScore={visitorScore}
          allPlayers={allPlayers}
        />
      ) : (
        <section className="content">
          <section>
            <img src={`./logos/${home}.png`} alt={`${home} logo`} />
            <p>{home}</p>
            <p>{homeScore}</p>
          </section>
          <p>{status}</p>
          <section>
            <img src={`./logos/${visitor}.png`} alt={`${visitor} logo`} />
            <p>{visitor}</p>
            <p>{visitorScore}</p>
          </section>
        </section>
      )}
    </section>
  );
}
export default Game;
