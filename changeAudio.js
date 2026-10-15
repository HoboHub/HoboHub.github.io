function elementInViewport(el) {
  let top = el.offsetTop;
  // console.log('abot me ', top);
  // let left = el.offsetLeft;
  // let width = el.offsetWidth;
  // let height = el.offsetHeight;

  // while(el.offsetParent) {
  //   el = el.offsetParent;
  //   top += el.offsetTop;
  //   left += el.offsetLeft;
  // }
  // console.log(window.pageYOffset);
  if (top - window.pageYOffset < 180) {
    return true;
  }
  // return (
  //   top >= window.pageYOffset &&
  //   left >= window.pageXOffset &&
  //   (top + height) <= (window.pageYOffset + window.innerHeight) &&
  //   (left + width) <= (window.pageXOffset + window.innerWidth)
  // );
}

const setTrack = (trackName, volume) => {
  const audio = document.getElementById("ambient");
  if (!audio) return;

  const currentTrack = audio.dataset.playing || "";
  if (currentTrack !== trackName) {
    audio.src = `assets/${trackName}`;
    audio.currentTime = 0;
    audio.setAttribute("data-playing", trackName);
  }

  audio.volume = volume;
  audio.play();
};

window.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("js-play-btn");
  const audio = document.getElementById("ambient");

  if (!audio) return;

  if (playBtn && playBtn.classList.contains("stopped")) return;

  setTrack("blues.mp3", 0.05);
});

window.addEventListener("scroll", function () {
  let about = document.getElementById("about");
  let audio = document.getElementById("ambient");
  let playBtn = document.getElementById("js-play-btn");

  if (!audio || (playBtn && playBtn.classList.contains("stopped"))) return;

  if (elementInViewport(about)) {
    setTrack("two.mp3", 1);
  } else {
    setTrack("blues.mp3", 0.05);
  }
});

////

// let scrollPos = 0;
// window.addEventListener('scroll', function() {
//     scrollPos = window.pageYOffset;
//     if ()
// });

////
// let scroll_pos = 0;
//     $(document).scroll(function() {
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 20213 && scroll_pos < 36041) { //strozzi
//             $("audio").attr("src", "audio/Strozzi.mp3");
//         }
//         else if(scroll_pos > 36041 && scroll_pos < 51097){ //Leonarda
//             $("audio").attr("src", "audio/Leonarda.mp3");
//         }
//         else {
//             $("audio").attr("src", "audio/Hildegard.mp3");//Hildegard
//     }
// });

// if(scroll_pos > 20213 && scroll_pos < 36041 && $("audio").data('playing') !== 'Strozzi.mp3') { // Check if the file is already playing
//     $("audio")
//        .attr("src", "audio/Strozzi.mp3")
//        .data('playing', 'Strozzi.mp3'); // save the currently playing file in the attribute `data-playing`
// }
