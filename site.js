var number, interval, iterations = 0;

document.addEventListener("DOMContentLoaded", function() {
  number = document.getElementById("number");
  interval = setInterval(function() {
    iterateNumeral();
  }, 2000);
});

// function modified from https://github.com/daneden/animate.css
function animateCSS(element, animationName, callback) {
  const node = element;
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

function iterateNumeral() {
  animateCSS(number, "fadeOutDown", function() {
    number.innerText = Number(number.innerText) + 1;
    animateCSS(number, "fadeInDown", function() {
      if (Number(number.innerText) == 24) {
        clearInterval(interval);
        setTimeout(() => {
          animateCSS(number, "fadeOutDown", function() {
            number.innerText = number.innerText + ".1";
            animateCSS(number, "fadeInDown", null);
          });
          interval = setInterval(function() {
            addDecimal();
          }, 2000);
        }, 1000);
      }
    });
  });
}

function addDecimal() {
  var endNumber = Number(number.innerText.slice(-1));
  if (endNumber == 9) {
    iterations += 1;
    animateCSS(number, "fadeOutDown", function() {
      number.innerText = number.innerText + 1;
      animateCSS(number, "fadeInDown");
    });
  }
  else {
    animateCSS(number, "fadeOutDown", function() {
      number.innerText = "24." + "9".repeat(iterations) + (endNumber + 1);
      animateCSS(number, "fadeInDown");
    });
  }
}