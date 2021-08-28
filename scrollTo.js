/**
 *  Scroll to element, for now it scroll to Top. 
 * param duration default 1000ms
 */
 export const scrollToElement = (elem, duration = 1000) => {
    // 
    document.documentElement.scrollTop = elem;
    document.body.parentNode.scrollTop = elem;
    document.body.scrollTop = elem;
    // 

    let cosParameter = window.scrollY / 2
    let scrollCount = 0
    let oldTimestamp = performance.now()
  
    function step (newTimestamp) {
      scrollCount += Math.PI / (duration / (newTimestamp - oldTimestamp))
      if (scrollCount >= Math.PI) window.scrollTo(0, 0)
      if (window.scrollY === 0) return
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))
      oldTimestamp = newTimestamp
      window.requestAnimationFrame(step)
    }
  
    window.requestAnimationFrame(step)
}