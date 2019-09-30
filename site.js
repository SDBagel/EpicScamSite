var number, interval, iterations = 0;

document.addEventListener("DOMContentLoaded", function() {
  number = document.getElementById("number");
  interval = setInterval(function() {
    iterateNumeral();
  }, 1000);
});

function iterateNumeral() {
  if (Number(number.innerText) == 24) {
    clearInterval(interval);
    document.getElementById("skipButton").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("skipButton").display = "none";
    }, 1000);
    number.innerText = number.innerText + ".1";
    recursive();
  }
  else 
    number.innerText = Number(number.innerText) + 1;
}

function recursive() {
  setTimeout(function() { 
    addDecimal();
    recursive();
  }, Math.max((1000 - (200 * iterations)), 200));
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
  document.getElementById("skipButton").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("skipButton").display = "none";
  }, 1000);
}