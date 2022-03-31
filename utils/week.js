function week(current) {
  var week = new Array();
  // Starting Monday not Sunday
  for (var i = 0; i < 7; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return week;
}
export default week;
