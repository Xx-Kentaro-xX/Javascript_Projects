let setTime = 10000;

let finishAlert = window.setTimeout(alert(setTime), setTime);

function alert(setTime) {
  const timeTarget = document.querySelector(".timeArea");

  timeTarget.innerHTML = `${setTime / 1000} second has been passed!`;

  timeTarget.style.color = "red";
}
