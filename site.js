var number, percent, interval, iterations = 0;
var gofasterspeed = 1000;

document.addEventListener("DOMContentLoaded", function() {
  number = document.getElementById("number");
  percent = document.getElementById("percent");
  interval = setInterval(function() {
    iterateNumeral();
  }, 1000);
});

function iterateNumeral() {
  if (Number(number.innerText) == 24) {
    clearInterval(interval);
    document.getElementById("skipButton").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("skipButton").style.display = "none";
    }, 1000);
    number.innerText = number.innerText + ".1";
    recursive();
  }
  else 
    number.innerText = Number(number.innerText) + 1;

  percent.innerText = (parseFloat(number.innerText) / 25).toString().substring(0, 4) + "% of the way there!";
}

function recursive() {
  setTimeout(function() {
    percent.innerText = Math.min((parseFloat(number.innerText) / 25), 0.99).toString().substring(0, 4) + "% of the way there!"; 
    addDecimal();
    recursive();
  }, Math.min(Math.max((1000 - (200 * iterations)), 200), gofasterspeed));
}

function goFaster() {
  number.style.transitionDuration = gofasterspeed + "ms";
  gofasterspeed /= 2;
  if (Number(number.innerText) <= 24) {
    clearInterval(interval);
    interval = setInterval(function() { iterateNumeral() }, gofasterspeed);
  }
}

function addDecimal() {
  var endNumber = Number(number.innerText.slice(-1));
  if (endNumber == 9) {
    iterations += 1;
    number.innerText = number.innerText + 1;
    number.style.transform = "translateX(-" + (iterations * 72) + "px)";
  }
  else
    number.innerText = "24." + "9".repeat(iterations) + (endNumber + 1);
}

function skip() {
  number.innerText = 24;
  document.getElementById("skipButton").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("skipButton").style.display = "none";
  }, 1000);
}