let playBtn = document.getElementById('js-play-btn');

let mainSong = document.getElementById('ambient');

playBtn.addEventListener('click', () => {
    let bars = document.getElementsByClassName('bar');

    playBtn.classList.toggle('stopped')
    for(let i=0; i<5; i++) {
        if (!playBtn.classList.contains('stopped')) {
            bars[i].style.animation = '';
            
            mainSong.play();
        } else {
            bars[i].style.height = '2px';
            bars[i].style.animation = "none";
            bars[i].style.webkitAnimation = "none";

            mainSong.pause();
        }
    }
});

// setTimeout(() => {
//     window.onload = function() {
//         mainSong.play();
//     }
// }, 3000);

// window.onload = function() {
//     mainSong.play();
// }

window.addEventListener('DOMContentLoaded', event => {
    // mainSong.volume = 0.5;
    mainSong.play();
})

// document.onreadystatechange = function() {
//     if (document.readyState === 'complete') {
//         mainSong.play();
//     }
// }