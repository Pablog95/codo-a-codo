const tipoTarjetaSelect = document.getElementById('tipoTarjeta');
const tarjetas = document.getElementsByClassName('tarjetaImagen');

tipoTarjetaSelect.addEventListener('change', function() {
  const seleccion = this.value;

  for (let i = 0; i < tarjetas.length; i++) {
    const tarjeta = tarjetas[i];

    if (tarjeta.classList.contains(seleccion)) {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
  }
});

for (let i = 0; i < tarjetas.length; i++) {
  tarjetas[i].style.display = 'none';
}