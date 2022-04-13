const days = document.getElementsByClassName("daysTXT")[0];
const hours = document.getElementsByClassName("hoursTXT")[0];
const minutes = document.getElementsByClassName("minutesTXT")[0];
const currentyear = new Date().getFullYear();
const eventTime = new Date(`April 21 2022 20:00:00`);

function updateCountdowntime() {
  const currentTime = new Date();
  const diff = eventTime - currentTime;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;

  if ( m < 0 ) {
    days.innerText =  "00" ;
    hours.innerText = "00" ;
    minutes.innerText =  "00" ;
    seconds.innerText =  "00" ;
  } else {
    days.innerText = d < 10 ? "0" + d : d;
    hours.innerText = h < 10 ? "0" + h : h;
    minutes.innerText = m < 10 ? "0" + m : m;
  }
}

setInterval(updateCountdowntime, 1000);
