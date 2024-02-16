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

// Hide menu
document.addEventListener("click", function (event) {
  // Check if the click target is not inside the menu or menuLi
  if (!menu.contains(event.target) && !menuLi.contains(event.target)) {
    menu.style = "opacity: 0; z-index: -1; top: calc(100% + 50px);";
  }
});

// Date
const date = document.querySelectorAll(".date");
date.forEach((e) => {
  e.innerHTML = new Date().getFullYear();
});

const stats = document.querySelector(".stats");
const statsNum = document.querySelectorAll(".stats .number");

let startCount = false;
// animation on scroll
window.onscroll = function () {
  //skills section
  const skills = document.querySelector(".skills");
  const progressSpan = document.querySelectorAll(".progress span");
  if (window.scrollY >= skills.offsetTop - 150) {
    progressSpan.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }

  // stats section
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!startCount) {
      statsNum.forEach((e) => {
        statsCount(e);
      });
    }
    startCount = true;
  }
};

function statsCount(e) {
  let num = e.dataset.stats;
  let interval = setInterval(() => {
    e.textContent++;
    if (e.textContent == num) {
      clearInterval(interval);
    }
  }, 1);
}
