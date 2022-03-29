//Function that takes all players and the desired player,
//iterates through all players, and returns the id for the desired player.

export const getPlayerID = (allPlayers, player) => {
  const firstName = player.split(" ")[0];
  const lastName = player.split(" ").slice(1).join(" ");

  for (let i = 0; i < allPlayers.length; i++) {
    if (
      (allPlayers[i].lastName.replace(/\W/g, "") ===
        lastName.replace(/\W/g, "") &&
        allPlayers[i].firstName.replace(/\W/g, "") ===
          firstName.replace(/\W/g, "")) ||
      (firstName.includes(allPlayers[i].firstName) &&
        allPlayers[i].lastName.replace(/\W/g, "") ===
          lastName.replace(/\W/g, ""))
    ) {
      return allPlayers[i].personId;
    }
  }
};
