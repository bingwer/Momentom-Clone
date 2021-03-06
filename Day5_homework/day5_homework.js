//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".dDay");
const dDay = clockContainer.querySelector(".clock");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const curDay = new Date();
  const difference = xmasDay - curDay;
  const getDay = Math.floor(difference / (1000 * 60 * 60 * 24));
  const gethour = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const getMin = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const getSec = Math.floor((difference % (1000 * 60)) / 1000);
  dDay.innerHTML = `${getDay}D ${gethour < 10 ? `0${gethour}` : gethour}H ${
    getMin < 10 ? `0${getMin}` : getMin
  }M ${getSec < 10 ? `0${getSec}` : getSec}S`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
