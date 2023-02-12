const inserir = document.getElementById('inserir')

window.addEventListener('keydown', (event) => {
  inserir.innerHTML = `
  <div class="tecla">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>
<div class="tecla">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="tecla">
  ${event.code}
  <small>event.code</small>
</div>
  `
})