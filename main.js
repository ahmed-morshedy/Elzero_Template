// Event timeout
let sec = document.querySelector("#sec");
let min = document.querySelector("#min");
let h = document.querySelector("#h");
let day = document.querySelector("#day");
function secdown() {
  sec.innerHTML -= 1;
  if (sec.innerHTML === "0") {
    sec.innerHTML = 59;
    min.innerHTML -= 1;
    if (min.innerHTML === "0") {
      min.innerHTML = 59;
      h.innerHTML -= 1;
      if (h.innerHTML === "0") {
        h.innerHTML = 23;
        day.innerHTML -= 1;
        if (day.innerHTML === "-1") {
          day.innerHTML = 13;
          h.innerHTML = 23;
          min.innerHTML = 59;
          sec.innerHTML = 59;
        }
      }
    }
  }
}
let secd = setInterval(secdown, 1000);

// Show menu
const menuLi = document.querySelector(".menu-li");
const menu = document.querySelector("li .menu");
menuLi.addEventListener("click", function () {
  if (menu.style.opacity === "1") {
    menu.style = " opacity: 0;z-index: -1;top: top: calc(100% + 50px);";
  } else {
    menu.style = " opacity: 1;z-index: 100;top: calc(100% + 1px);";
  }
});

const date = document.querySelectorAll(".date");
date.forEach((e) => {
  e.innerHTML = new Date().getFullYear();
});
