const header = document.querySelector('header')

export default () => {  
  window.addEventListener("scroll", _ => {
    if(window.scrollY > 100 && !header.classList.contains("small")) {
      header.classList.add("small")
    }
    if(window.scrollY < 100 && header.classList.contains("small")) {
      header.classList.remove("small")
    }
  })
  document.querySelector(".c-mobilemenu__button").addEventListener('click', _ => {
     document.querySelector('.c-mobilemenu').classList.toggle('opened')
  }
  )
}