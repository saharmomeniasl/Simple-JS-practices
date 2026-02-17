const timezoneSelect = document.getElementById("timezone");
const dateElement = document.getElementById("date");

let selectedTimeZone = "Asia/Tehran";

timezoneSelect.addEventListener("change", () => {
  selectedTimeZone = timezoneSelect.value;
});

function updateClock() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: selectedTimeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false
  });

  const parts = formatter.formatToParts(now);

  const get = type => parts.find(p => p.type === type).value;

  const seconds = parseInt(get("second"));
  const minutes = parseInt(get("minute")) + seconds / 60;
  const hours = parseInt(get("hour")) % 12 + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;

  document.querySelector('.second').style.transform =
    `translateX(-50%) rotate(${secondDeg}deg)`;

  document.querySelector('.minute').style.transform =
    `translateX(-50%) rotate(${minuteDeg}deg)`;

  document.querySelector('.hour').style.transform =
    `translateX(-50%) rotate(${hourDeg}deg)`;

  dateElement.innerText =
    `${get("weekday")} - ${get("day")} ${get("month")} ${get("year")}`;
}

setInterval(updateClock, 1000);
updateClock();

const themeSelect = document.getElementById("theme");

themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value;
});
