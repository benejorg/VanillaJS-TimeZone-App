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

// Update every second
newYorkTime();
londonTime();
setInterval(newYorkTime, 1000);
setInterval(londonTime, 1000);

// Dropdown box
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone).format("dddd Do MMMM YYYY");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${moment()
      .tz(cityTimeZone)
      .format("dddd Do MMMM YYYY")}</div>
  </div>
  <div class="time">${moment().tz(cityTimeZone).format("HH:mm:ss")}</div>
</div>`;
}

let citiesSelectElement = document.querySelector("#citySelector");

citiesSelectElement.addEventListener("change", updateCity);
