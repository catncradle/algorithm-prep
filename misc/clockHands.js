function clockAngles(hour, minute) {
  var hourDegrees = (hour / 12) * 360;
  var minuteDegrees = (minute / 60) * 360;
  var degreeAngles = Math.abs(hourDegrees - minuteDegrees);

  //console.log(degreeAngles);

  if (degreeAngles > 180) {
    return Math.round(360 - degreeAngles);
  } else {
    return Math.round(degreeAngles);
  }
}
