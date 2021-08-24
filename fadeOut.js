export function fadeOut(el, step, interval) {
  
	let opacity = 1;
  
	let timer = setInterval(function() {
    
		if(opacity <= 0.1) {
		
			clearInterval(timer);
			el.style.display = "none";
	
		}
	
		el.style.opacity = opacity;
     
		opacity -= opacity * step;
   
	}, interval);

}