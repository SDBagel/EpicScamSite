var number, interval, iterations = 0;

document.addEventListener("DOMContentLoaded", function() {
  number = document.getElementById("number");
  interval = setInterval(function() {
    iterateNumeral();
  }, 100);
});

// function modified from https://github.com/daneden/animate.css
function animateCSS(element, animationName) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

function iterateNumeral() {
  number.innerText = Number(number.innerText) + 1;
  if (Number(number.innerText) == 24) {
    clearInterval(interval);
    number.innerText = number.innerText + ".0";
    interval = setInterval(function() {
      addDecimal();
    }, 100);
  }
}

function addDecimal() {
  var endNumber = Number(number.innerText.slice(-1));
  if (endNumber == 9) {
    iterations += 1;
    number.innerText = number.innerText + 0;
  }
  else {
    number.innerText = "24." + "9".repeat(iterations) + (endNumber + 1);
  }
}