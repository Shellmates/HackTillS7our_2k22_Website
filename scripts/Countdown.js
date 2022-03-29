const days = document.getElementsByClassName("daysTXT")[0];
const hours = document.getElementsByClassName("hoursTXT")[0];
const minutes = document.getElementsByClassName("minutesTXT")[0];
const currentyear = new Date().getFullYear();
const eventTime = new Date(`April 21 2022 00:00:00`);

function updateCountdowntime() {
  const currentTime = new Date();
  const diff = eventTime - currentTime;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
}

setInterval(updateCountdowntime, 1000);
