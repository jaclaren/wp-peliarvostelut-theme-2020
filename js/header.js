const header = document.querySelector('header')

export default () => {
  window.addEventListener("scroll", _ => {
    if(window.scrollY > 40 && !header.classList.contains("small")) {
      header.classList.add("small")
      document.querySelector('.main').style.marginTop = '160px';
    }
    if(window.scrollY == 0 && header.classList.contains("small")) {
      header.classList.remove("small")
      document.querySelector('.main').style.marginTop = '0px';
    }
  })
  document.querySelector(".menu-toggle").addEventListener('click', _ => {
     document.querySelector('.c-mobilemenu').classList.toggle('opened')
     document.querySelector('.menu-toggle').classList.toggle('opened')
  }
  )
}
