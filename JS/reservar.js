const formulario = document.getElementById('formularioReserva');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const dni = document.getElementById('dni').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const destino = document.getElementById('destino').value;

  if (nombre === '' || apellido === '' || dni === '' || telefono === '' || email === '' || destino === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  if (dni.length > 10) {
    alert('El número de DNI no puede tener más de 10 dígitos.');
    return;
  }

  if (telefono.length > 18) {
    alert('El número de TELEFONO no puede tener más de 18 dígitos.');
    return;
  }
  
  if (nombre.length > 30) {
    alert('El NOMBRE no puede tener más de 30 dígitos.');
    return;
  }
  if (apellido.length > 20) {
    alert('El APELLIDO no puede tener más de 20 dígitos.');
    return;
  }  
  if (!politicaPrivacidadCheckbox.checked) {
    alert('Debe aceptar las políticas de privacidad para enviar el formulario.');
    return;
  }

  const mensajeExito = document.createElement('p');
  mensajeExito.textContent = '¡Formulario enviado con éxito!';
  mensajeExito.classList.add('mensaje-exito'); 
  formulario.appendChild(mensajeExito);

  setTimeout(function() {
    mensajeExito.remove();
  }, 3000);


  formulario.reset();
});