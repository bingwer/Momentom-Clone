// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const bodyColor = document.querySelector("body");

function resize() {
  if (window.innerWidth < 300) {
    bodyColor.style.backgroundColor = "#FFBCA9";
  } else if (window.innerWidth >= 300 && window.innerWidth < 600) {
    bodyColor.style.backgroundColor = "#14E4EA";
  } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
    bodyColor.style.backgroundColor = "#A9FFB8";
  } else if (window.innerWidth >= 900 && window.innerWidth < 1200) {
    bodyColor.style.backgroundColor = "#B9AA99";
  } else {
    bodyColor.style.backgroundColor = "#FDA9FF";
  }
}

window.onresize = resize;
