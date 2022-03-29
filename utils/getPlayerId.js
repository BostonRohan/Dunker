//Function that takes all players and the desired player,
//iterates through all players, and returns the id for the desired player.

export const getPlayerID = (allPlayers, player) => {
  const firstName = player.split(" ")[0];
  const lastName =
    player.split(" ").length > 2
      ? player.split(" ")[1] + " " + player.split(" ")[2]
      : player.split(" ")[1];
  for (let i = 0; i < allPlayers.length; i++) {
    if (
      (allPlayers[i].firstName === firstName &&
        allPlayers[i].lastName === lastName) ||
      //Checks for potential abbreviated names, or players with the same last name
      //Potential for edge cases...
      (firstName.includes(allPlayers[i].firstName) &&
        allPlayers[i].lastName === lastName)
    ) {
      return allPlayers[i].personId;
    }
  }
};
