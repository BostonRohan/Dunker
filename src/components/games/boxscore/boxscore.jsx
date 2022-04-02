import axios from "axios";
import { useState, useEffect } from "react";
import Table from "./table";
import LeadingPlayer from "./leadingplayer/leadingPlayer";
import styles from "../../../styles/boxscore.module.css";
function BoxScore({
  id,
  width,
  home,
  visitor,
  homeScore,
  visitorScore,
  allPlayers,
}) {
  //First position, home, second position visitor.
  const [index, setIndex] = useState([]);
  const [players, setPlayers] = useState({ home: [], visitor: [] });
  const [error, setError] = useState(null);

  const fetchData = async () => {
    await axios
      .get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${id}`)
      .then((res) => {
        //Establishing temporary data variables
        let tempHome = { playersArr: [], pointsArr: [] };
        let tempVisitor = { playersArr: [], pointsArr: [] };
        let tempData = [...res.data.data];
        for (let i = 0; i < tempData.length; i++) {
          //Seperating the data by team
          if (tempData[i].team.name === home) {
            tempHome.playersArr.push(tempData[i]);
            tempHome.pointsArr.push(tempData[i].pts);
          } else {
            tempVisitor.playersArr.push(tempData[i]);
            tempVisitor.pointsArr.push(tempData[i].pts);
          }
        }
        //Setting the index of the leading players
        setIndex([
          tempHome.pointsArr.indexOf(Math.max(...tempHome.pointsArr)),
          tempVisitor.pointsArr.indexOf(Math.max(...tempVisitor.pointsArr)),
        ]);
        //Setting the players
        setPlayers({
          home: tempHome.playersArr,
          visitor: tempVisitor.playersArr,
        });
      })
      .catch((err) => {
        setError(
          "There was an error finding the leading scorers, please try again."
        );
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.boxscore}>
      <h1>Leading Scorers:</h1>
      {error && <p>{error}</p>}
      {players.home.length > 1 &&
        players.visitor.length > 1 &&
        index !== undefined && (
          <div className={styles.row}>
            <LeadingPlayer
              index={index[0]}
              players={players.home}
              allPlayers={allPlayers}
              width={width}
            />
            <LeadingPlayer
              index={index[1]}
              players={players.visitor}
              allPlayers={allPlayers}
              width={width}
            />
          </div>
        )}
      <Table
        data={players.home}
        allPlayers={allPlayers}
        width={width}
        team={home}
        score={homeScore}
      />
      <Table
        data={players.visitor}
        allPlayers={allPlayers}
        width={width}
        team={visitor}
        score={visitorScore}
      />
    </div>
  );
}
export default BoxScore;
