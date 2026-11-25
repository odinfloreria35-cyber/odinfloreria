// Menú, modo oscuro, galería y formulario (EmailJS) de Odin Florería
function toggleMenu(){document.getElementById('menuppal').classList.toggle('show')}
function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
  const oscuro=document.body.classList.contains('dark-mode');
  document.getElementById('modoOscuroBtn').textContent=oscuro?'☀️':'🌙';
  try{localStorage.setItem('dark-mode',oscuro)}catch(e){}
}
document.addEventListener('DOMContentLoaded',()=>{
  let g;try{g=localStorage.getItem('dark-mode')}catch(e){}
  if(g==='true'){document.body.classList.add('dark-mode');document.getElementById('modoOscuroBtn').textContent='☀️'}
  const form=document.getElementById('sugerenciasForm');
  if(form)form.addEventListener('submit',async e=>{
    e.preventDefault();const msg=document.getElementById('msg');
    try{
      emailjs.init({publicKey:'yw7G5dtQx6MX72sV_'});
      await emailjs.sendForm('service_953nrvf','template_u3cbf3d',form);
      msg.textContent='¡Gracias por tu sugerencia! La recibimos correctamente.';form.reset();
    }catch(err){msg.textContent='No pudimos enviar tu sugerencia. Inténtalo de nuevo.'}
  });
});
function openModal(src,alt){
  document.getElementById('modalImg').src=src;
  document.getElementById('caption').textContent=alt;
  document.getElementById('imgModal').style.display='block';
}
function closeModal(){document.getElementById('imgModal').style.display='none'}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('imgModal'))closeModal()});
