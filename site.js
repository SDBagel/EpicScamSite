var number, percent, interval, iterations = 0;
var gofasterspeed = 0;

document.addEventListener("DOMContentLoaded", function() {
  number = document.getElementById("number");
  percent = document.getElementById("percent");
  interval = setInterval(function() {
    iterateNumeral();
  }, 1000);
});

function iterateNumeral() {
  if (Number(number.innerText) == 5)
    document.getElementById("skipButton").style.opacity = 1;

  if (Number(number.innerText) == 24) {
    clearInterval(interval);
    document.getElementById("skipButton").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("skipButton").style.display = "none";
      document.getElementById("gofasterbutton").style.opacity = 1;
    }, 1000);
    number.innerText = number.innerText + ".1";
    recursive();
  }
  else 
    number.innerText = Number(number.innerText) + 1;

  percent.innerText = ((parseFloat(number.innerText) / 25) * 100).toString().substring(0, 4) + "% of the way there!";
}

function recursive() {
  setTimeout(function() {
    percent.innerText = Math.min((parseFloat(number.innerText) / 25) * 100, 99.9).toString().substring(0, 4) + "% of the way there!"; 
    addDecimal();
    if (iterations === 50) {
      var faster = document.getElementById("gofasterbutton");
      percent.innerText = "100% of the way there! Congrats!"
      number.style.transitionDuration = "2s";
      number.style.marginLeft = 0;
      number.style.marginRight = 0;
      number.style.transform = "";
      number.style.width = "320px";
      faster.style.opacity = 0;
      setTimeout(() => {
        faster.style.display = "none";
        var claim = document.getElementById("claim");
        claim.style.display = "unset";
        claim.style.opacity = 1;
        number.style.opacity = 0;
        setTimeout(() => {
          number.innerText = 25;
          number.style.opacity = 1;
        }, 1000);
      }, 1000);
    }
    else recursive();
  }, Math.max((1000 - (200 * iterations) - (100 * gofasterspeed)), 200 - (10 * gofasterspeed)));
}

function goFaster() {
  number.style.transitionDuration = (1000 - gofasterspeed * 100) + "ms";
  gofasterspeed++;
  if (Number(number.innerText) <= 24) {
    clearInterval(interval);
    interval = setInterval(function() { iterateNumeral() }, 1000 - (gofasterspeed * 100));
  }
}

function addDecimal() {
  var endNumber = Number(number.innerText.slice(-1));
  if (endNumber === 9) {
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