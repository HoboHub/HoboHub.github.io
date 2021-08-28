//custom functions and modules
import {fadeIn} from './fadeIn.js'
import {scale} from './scale.js'
import {fadeOut} from './fadeOut.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getRandomMinMax(min, max) {
  return Math.random() * (max - min) + min;
}

//blinking
function glitchShow(el) {
  // fadeIn(el, 1, 10);
  fadeOut(el, 1, 10);
  fadeIn(el, 1, 10);
  // fadeOut(el, 1, 10);
}
//

var delays = [];
var appearingTexts = document.querySelectorAll("div.appearing_text");

for (var i = 0; i < appearingTexts.length; i++) {
  var appearingText = appearingTexts[i];
  var text = appearingText.textContent.trim();
  appearingText.textContent = "";
  
  // appearingText.addEventListener("mouseenter", function( event ) {
  //   event.target.classList.add("finished");
  // }, false);

  //when page is loaded
  document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
      appearingText.classList.add("finished");
      //show canvas ----
      let canvas = document.getElementById('js-webgl');
      // canvas.classList.add('visible');
      fadeIn(canvas, 0.009, 0.01);

      // setTimeout(()=> {scale(canvas);}, 50); //---

      // canvas.style.height = '350px';
      // scale(canvas);
      // canvas.classList.add('scale');

      //show mouse icon
      let scrollIcon = document.getElementById('js-scroll-downs');
      // scrollIcon.classList.add('visible');
      setTimeout(() => {
        scrollIcon.classList.add('visible');
      }, 2500);

      //text glitch appearance
      function glitching() {
        let glitches = document.getElementsByClassName('js-glitchShow');
        let glitchTime = new Date().getTime();
        // console.log(glitchTime);
        for (let i=0; i< glitches.length; i++) {
  
          let timer = setInterval(() => {
            if(Date.now()-glitchTime >= 1500 ) {
  
              clearInterval(timer);
  
            };
  
            glitchShow(glitches[i]);
          }, 250);
  
        }
      }
      glitching();
      // setTimeout(glitching(), 1000);
      // let glitches = document.getElementsByClassName('js-glitchShow');
      // let glitchTime = new Date().getTime();
      // // console.log(glitchTime);
      // for (let i=0; i< glitches.length; i++) {

      //   let timer = setInterval(() => {
      //     if(Date.now()-glitchTime >= 1500 ) {

      //       clearInterval(timer);

      //     };

      //     glitchShow(glitches[i]);
      //   }, 250);

      // }

      //unblock page scroll on load
      setTimeout(() => {
        document.body.classList.remove('scrolloff');
      }, 1000);

    }
  }
    
    for (var j = 0; j < text.length; j++){
      delays.push(600 / text.length * j);
    }
    
    for (var j = 0; j < text.length; j++){
      var index = getRandomInt(delays.length);
      var delay = delays[index];
      var span = document.createElement('span');
      
      delays.splice(index, 1);
      
      span.innerText = text[j];
      span.style.transition = "opacity 1100ms, filter 400ms";
      span.style.transitionDelay = delay + "ms";
      
      appearingText.appendChild(span);
    }
}


