// Current location
let currentElement = document.querySelector("#current");
let currentDateElement = currentElement.querySelector(".date");
let currentTimeElement = currentElement.querySelector(".time");

function currentTime() {
  let currentTimeZone = moment.tz.guess();
  currentDateElement.innerHTML = `${moment()
    .tz(currentTimeZone)
    .format("dddd Do MMMM YYYY")}`;
  currentTimeElement.innerHTML = `${moment()
    .tz(currentTimeZone)
    .format("HH:mm:ss")}`;
}

// New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");

function newYorkTime() {
  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd Do MMMM YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss");
}

// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");

function londonTime() {
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd Do MMMM YYYY");
  londonTimeElement.innerHTML = moment().tz("Europe/London").format("HH:mm:ss");
}

// Perth
let perthElement = document.querySelector("#perth");
let perthDateElement = perthElement.querySelector(".date");
let perthTimeElement = perthElement.querySelector(".time");

function perthTime() {
  perthDateElement.innerHTML = moment()
    .tz("Australia/Perth")
    .format("dddd Do MMMM YYYY");
  perthTimeElement.innerHTML = moment()
    .tz("Australia/Perth")
    .format("HH:mm:ss");
}

// Update every second
currentTime();
newYorkTime();
londonTime();
perthTime();
setInterval(currentTime, 1000);
setInterval(newYorkTime, 1000);
setInterval(londonTime, 1000);
setInterval(perthTime, 1000);

// Dropdown box
let cityIntervalId;

function updateCity(event) {
  clearInterval(cityIntervalId);
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
</div>
<div class="return"><a href="https://cool-moonbeam-165f03.netlify.app/">Return to overview</a></div>`;
  cityIntervalId = setInterval(() => {
    citiesElement.innerHTML = `<div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${moment()
          .tz(cityTimeZone)
          .format("dddd Do MMMM YYYY")}</div>
      </div>
      <div class="time">${moment().tz(cityTimeZone).format("HH:mm:ss")}</div>
    </div>
    <div class="return"><a href="https://cool-moonbeam-165f03.netlify.app/">Return to overview</a></div>`;
  }, 1000);
}

let citiesSelectElement = document.querySelector("#citySelector");

citiesSelectElement.addEventListener("change", updateCity);

// Return to homepage when "Select a city" is selected
const citySelectorReturn = document.getElementById("citySelector");

citySelectorReturn.addEventListener("change", function () {
  if (this.value === "return") {
    window.location.href = "https://cool-moonbeam-165f03.netlify.app/";
  }
});
