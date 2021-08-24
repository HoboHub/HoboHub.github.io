export function fadeIn(el, step, interval) {
  
	let opacity = 0.01;
  
	// document.querySelector(el).style.display = "block";
    el.style.display = "block";
  
	let timer = setInterval(function() {
    
		if(opacity >= 1) {
			
			clearInterval(timer);
		
		}
		
		// document.querySelector(el).style.opacity = opacity;
		el.style.opacity = opacity;
     
		opacity += opacity * step; //opacity * 0.005;
   
	}, interval); //0.5
	
}