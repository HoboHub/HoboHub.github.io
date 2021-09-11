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


window.addEventListener('scroll', function() {
// window.scroll(function() {
    // console.log('scroll!!!1212');
    let about = document.getElementById('about');
    let audio = document.getElementById('ambient');
    let playBtn = document.getElementById('js-play-btn');
    if (elementInViewport(about) && audio.dataset.playing !== 'blues.mp3' && !playBtn.classList.contains('stopped')) {
        // console.log('wheowhehwo');
        audio.src = 'assets/blues.mp3';
        audio.volume=0.05;
        audio.setAttribute('data-playing', 'blues.mp3');
        audio.play();
    } else if ((!elementInViewport(about)) && audio.dataset.playing !== 'ambient.mp3' && !playBtn.classList.contains('stopped')) {
        // console.log('sdfs');
        audio.src = 'assets/ambient.mp3';
        audio.volume=1;
        audio.setAttribute('data-playing', 'ambient.mp3');
        audio.play();
    }
    // else {
    //     audio.src = 'assets/ambient.mp3';
    //     audio.play();
    // }
    // if(isScrolledIntoView(about)) {
        // alert('here we are');
    // }
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