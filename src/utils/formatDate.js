export const formatDate = (date, timestamp = "00:00:00") =>
  new Date(date.split("/").reverse().join(",") + " " + timestamp);
