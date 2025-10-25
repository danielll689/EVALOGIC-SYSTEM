AOS.init({duration:800,once:true});
document.getElementById('formContacto').addEventListener('submit',function(e){
  e.preventDefault();
  if(!this.nombre.value.trim()||!this.correo.value.trim()||!this.mensaje.value.trim()){
    alert('Completa todos los campos');return;
  }
  alert('¡Mensaje enviado! Gracias por contactarnos.');
  this.reset();
});
// AOS
AOS.init({duration:800,once:true});
// Aquí futura funcionalidad