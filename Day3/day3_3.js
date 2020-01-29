const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized");
}

function event(event) {
  console.log(event);
}

function handleClick() {
  title.style.color = "blue";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
/* handleResize() -> 즉시호출 
   handleResize -> 필요할 때 호출
   
   --> 두 가지 사용법의 차이를 명확히 구분 할 것 */
