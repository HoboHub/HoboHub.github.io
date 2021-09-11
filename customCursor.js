const customCursor = (e) => {
    const cursor = document.querySelector('.js-cursor');
    const hoverEl = document.querySelectorAll('.js-cursor-hover')
    const hoverLink = document.querySelectorAll('.js-cursor-hover-link');
    const hoverDownload = document.querySelectorAll('.js-cursor-hover-download');
    const { pageX: posX, pageY: posY } = e;

    //MAIN--------
    const runMouseOver = () => {
        cursor.style.transform = 'scale(3.5)';
        // cursor.style.background = "#fe6601";
        cursor.style.background = "rgba(52, 31, 255, 1)";


        // cursor.style.background = "orange";
        cursor.style.mixBlendMode = "difference";
    };
    hoverEl.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
    
    const runMouseLeave = () => {
        cursor.style.transform = '';
        cursor.style.background = '';
    };
    hoverEl.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));

    //LINK-------
    const runMouseOverLink = () => {
        cursor.style.transform = 'scale(3.5)';
        // cursor.style.background = "#fe6601";
        cursor.style.background = "rgba(52, 31, 255, 1)";

        cursor.style.mixBlendMode = "normal";
        document.getElementById('right-arrow-cursor').style.display = 'block';
        // cursor.style.backgroundImage = "url('./assets/icons/right-arrow.svg')";
    };
    hoverLink.forEach(hover => hover.addEventListener('mouseenter', runMouseOverLink));
    
    const runMouseLeaveLink = () => {
        cursor.style.transform = '';
        cursor.style.background = '';
        document.getElementById('right-arrow-cursor').style.display = 'none';
    };
    hoverLink.forEach(hover => hover.addEventListener('mouseleave', runMouseLeaveLink));

    //DOWNLOAD-----
    // js-cursor-hover-download
    // hoverDownload
    const runMouseOverDownload = () => {
        cursor.style.transform = 'scale(5)';
        // cursor.style.background = "#fe6601";
        cursor.style.background = "rgba(52, 31, 255, 1)";

        cursor.style.mixBlendMode = "normal";
        // document.getElementById('file-cursor').style.transform = 'rotate(90deg)';
        document.getElementById('file-cursor').style.display = 'block';
        // cursor.style.backgroundImage = "url('./assets/icons/right-arrow.svg')";
    };
    hoverDownload.forEach(hover => hover.addEventListener('mouseenter', runMouseOverDownload));
    
    const runMouseLeaveDownload = () => {
        cursor.style.transform = '';
        cursor.style.background = '';
        document.getElementById('file-cursor').style.display = 'none';
    };
    hoverDownload.forEach(hover => hover.addEventListener('mouseleave', runMouseLeaveDownload));

    return (
        cursor.style.left = `${posX - 10}px`,
        cursor.style.top = `${posY - 10}px`  
    );

};
  
document.addEventListener('mousemove', customCursor);