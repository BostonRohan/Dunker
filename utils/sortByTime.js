const sort = (games) => {
  let qtrs = [];
  let regStatus = [];

  for (let i = 0; i < games.length; i++) {
    if (games[i]["status"].includes("Qtr")) qtrs.push(games[i]);
    else regStatus.push(games[i]);
  }
  regStatus = regStatus.sort(function (a, b) {
    return (
      new Date("1970/01/01 " + a.status.split(" ")[0]) -
      new Date("1970/01/01 " + b.status.split(" ")[0])
    );
  });
  //if there are games that have started
  if (qtrs) {
    qtrs = qtrs.sort((a, b) => +a.status[0] - +b.status[0]);
    return [...qtrs, ...regStatus];
  } else return regStatus;
};
export default sort;
