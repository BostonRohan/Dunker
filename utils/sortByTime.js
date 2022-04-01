const sort = (games) => {
  //sorting by status
  if (games.some((game) => game.status))
    return games.sort((a, b) => +(a > b) || +(a === b) - 1);
  //sorting by arbitrary date
  else
    return games.sort(function (a, b) {
      return (
        new Date("1970/01/01 " + a.status.split(" ")[0]) -
        new Date("1970/01/01 " + b.status.split(" ")[0])
      );
    });
};
export default sort;
