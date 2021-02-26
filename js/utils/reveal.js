export const attachRevealToElementsBySelector = (selector, rootElement) => {
    document.querySelectorAll(selector).forEach(elem => {        
        let options = {
            root: rootElement,
            rootMargin: '0px',
            threshold: 1.0
          }

          const ioSupported = "IntersectionObserver" in window
          const revealClass = 'revealed'

          if(!ioSupported) {
            elem.classList.add(revealClass)
          } else {
            let observer = new IntersectionObserver(() => elem.classList.add(revealClass), options);
            observer.observe(elem)
        }
          
      })
}

