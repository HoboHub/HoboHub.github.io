import {scrollToElement} from './scrollTo.js';

// scrollToElement()

let navLinks = document.querySelectorAll('.mnu__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // scrollToElement(document.getElementById('works'));
        // console.log(link.href.split('#')[1]);
        // console.log(link.name);
        let linkLoc = link.name;
        // let linkHref = link.href.split('#')[1];
        // console.log(linkHref);
        document.getElementById(linkLoc).scrollIntoView();
        // location.href = link.href;
    })
});