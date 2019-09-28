var number, interval, iterations = 0;
var startButton, skipButton;

document.addEventListener("DOMContentLoaded", function() {
  number = document.getElementById("number");
  skipButton = document.getElementById("skipButton");
  startButton = document.getElementById("startButton");
  document.getElementById("overlay").style.opacity = 1;
  document.getElementById("cookiepolicy").style.display = "block";
});

function start() {
  startButton.style.opacity = 0;
  setTimeout(() => {
    startButton.style.display = "none";
  }, 1000);
  interval = setInterval(function() {
    iterateNumeral();
  }, 1000);
}

function iterateNumeral() {
  if (Number(number.innerText) == 5) {
    skipButton.style.opacity = 1;
  }
  if (Number(number.innerText) == 24) {
    clearInterval(interval);
    skipButton.style.opacity = 0;
    number.innerText = number.innerText + ".1";
    interval = setInterval(function() {
      addDecimal();
    }, 1000);
  }
  else 
    number.innerText = Number(number.innerText) + 1;
}

function addDecimal() {
  var endNumber = Number(number.innerText.slice(-1));
  if (endNumber == 9) {
    iterations += 1;
    number.innerText = number.innerText + 1;
    number.style.transform = "translateX(-" + (iterations * 72) + "px)";
  }
  else {
    number.innerText = "24." + "9".repeat(iterations) + (endNumber + 1);
  }
}

function skip() {
  number.innerText = 24;
  skipButton.style.opacity = 0;
}

var popups = ["cookiepolicy", "newsletter", "donate"];
var index = 0;
function iteratePopup() {
  document.getElementById("overlay").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
  }, 1000);

  document.getElementById(popups[index]).style.display = "none";

  if (index < popups.length)
    index++;
    setTimeout(() => {
      document.getElementById(popups[index]).style.display = "block";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").style.opacity = 1;
    }, 10000);
}