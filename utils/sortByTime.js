const sort = (games) => {
  //sorting by arbitrary date
  return games.sort(function (a, b) {
    return (
      new Date("1970/01/01 " + a.status.split(" ")[0]) -
      new Date("1970/01/01 " + b.status.split(" ")[0])
    );
  });
};
export default sort;
