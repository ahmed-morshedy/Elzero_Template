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
        if(day.innerHTML === "-1"){
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