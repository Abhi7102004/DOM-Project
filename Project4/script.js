let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let date=document.getElementById("date");
let month=document.getElementById("month");
let year=document.getElementById("year");
let day=document.getElementById("day");
const months = [
  { key: 1, value: "Jan" },
  { key: 2, value: "Feb" },
  { key: 3, value: "Mar" },
  { key: 4, value: "Apr" },
  { key: 5, value: "May" },
  { key: 6, value: "June" },
  { key: 7, value: "July" },
  { key: 8, value: "Aug" },
  { key: 9, value: "Sept" },
  { key: 10, value: "Oct" },
  { key: 11, value: "Nov" },
  { key: 12, value: "Dec" }
];
const days = [
  { key: 0, value: "Sun" },
  { key: 1, value: "Mon" },
  { key: 2, value: "Tue" },
  { key: 3, value: "Wed" },
  { key: 4, value: "Thu" },
  { key: 5, value: "Fri" },
  { key: 6, value: "Sat" }
];

setInterval(() => {
  let currtime = new Date();
  date.innerHTML=(currtime.getDate() < 10 ? "0" : "") + currtime.getDate();
  month.innerHTML= months[currtime.getMonth()].value;
  year.innerHTML=currtime.getFullYear();
  day.innerHTML=days[(currtime.getDay())%7].value;
  hours.innerHTML = (currtime.getHours() < 10 ? "0" : "") + currtime.getHours();
  minutes.innerHTML = (currtime.getMinutes()< 10 ? "0" : "") + currtime.getMinutes();
  seconds.innerHTML = (currtime.getSeconds() < 10 ? "0" : "") + currtime.getSeconds();
}, 1000)
