export function scale(el) {

    let scale = 1;

    let timer = setInterval(function() {
    
		if(scale >= 1.3) {
			
			clearInterval(timer);
		
		}

        el.style.transform = 'scale(' + scale + ')';
        scale += 0.003;

    }, 100);
}