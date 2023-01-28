// New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");

function newYorkTime() {
  newYorkDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss");
}

// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");

function londonTime() {
  londonDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
  londonTimeElement.innerHTML = moment().tz("Europe/London").format("HH:mm:ss");
}

newYorkTime();
londonTime();
setInterval(newYorkTime, 1000);
setInterval(londonTime, 1000);
