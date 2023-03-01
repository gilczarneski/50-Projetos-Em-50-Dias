const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixarNav)

function fixarNav(){
  if(window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('ativo')
  } else{
    nav.classList.remove('ativo')
  }
}