fetch('https://api.openweathermap.org/data/2.5/weather?q=Puerto%20Iguazu&appid=be7264777cddf63c712dc19c137d30e9')
    .then(response => response.json())  
    .then(data => {
    const climaElemento = document.getElementById('climaPuertoIguazu');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Puerto Iguazú es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Ushuaia&appid=be7264777cddf63c712dc19c137d30e9')
    .then(response => response.json())  
    .then(data => {
    const climaElemento = document.getElementById('climaUshuaia');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Ushuaia es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Bariloche&appid=be7264777cddf63c712dc19c137d30e9')
    .then(response => response.json())  
    .then(data => {
    const climaElemento = document.getElementById('climaBariloche');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Bariloche es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Mendoza&appid=be7264777cddf63c712dc19c137d30e9')
    .then(response => response.json())  
    .then(data => {
    const climaElemento = document.getElementById('climaMendoza');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Mendoza es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=San%20Salvador%20de%20Jujuy,ar&appid=be7264777cddf63c712dc19c137d30e9')
    .then(response => response.json())  
    .then(data => {
    const climaElemento = document.getElementById('climaJujuy');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Jujuy es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=be7264777cddf63c712dc19c137d30e9')
    .then(response => response.json())  
    .then(data => {
    const climaElemento = document.getElementById('climaBuenosAires');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Buenos Aires es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Salta&appid=be7264777cddf63c712dc19c137d30e9')  .then(response => response.json())
  .then(data => {
    const climaElemento = document.getElementById('climaSalta');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Salta es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});
fetch('https://api.openweathermap.org/data/2.5/weather?q=Santa%20Cruz,ar&appid=be7264777cddf63c712dc19c137d30e9')
  .then(response => response.json())
  .then(data => {
    const climaElemento = document.getElementById('climaSantaCruz');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';
    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en Santa Cruz es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=San%20Martin%20de%20los%20Andes,ar&appid=be7264777cddf63c712dc19c137d30e9')
  .then(response => response.json())
  .then(data => {
    const climaElemento = document.getElementById('climaSanMartinDLA');
    const temperatura = Math.round(data.main.temp - 273.15);
    const descripcionEnIngles = data.weather[0].description;
    const traduccionEImagen = obtenerTraduccionEImagen(descripcionEnIngles);

    const imagenElemento = document.createElement('img');
    imagenElemento.src = traduccionEImagen.imagen;
    imagenElemento.style.width = '100px';

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `El clima en San Martin de los Andes es ${traduccionEImagen.traduccion} con una temperatura de ${temperatura}°C.`;

    climaElemento.appendChild(imagenElemento);
    climaElemento.appendChild(descripcionElemento);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
});

  function obtenerTraduccionEImagen(descripcion) {
    const traducciones = {
      'clear sky': 'Cielo despejado',
      'few clouds': 'Ligeramente nublado',
      'scattered clouds': 'Intervalos nubosos',
      'moderate rain': 'Lluvias moderadas',
      'broken clouds': 'Nublado',
      'overcast clouds': 'Nublado',
      'shower rain': 'Lluvia',
      'rain': 'Lluvia',
      'thunderstorm': 'Tormenta',
      'snow': 'Nieve',
      'mist': 'Niebla',
      'thunderstorm with rain': 'Tormentas Fuertes',
      'thunderstorm with heavy rain': 'Tormentas fuertes con lluvia intensa',
      'light raing': 'Lluvias suaves'
    };
  
    const traduccion = traducciones[descripcion] || descripcion;
  
    const imagenes = {
      'clear sky': 'IMG/despejado.png',
      'few clouds': 'IMG/ligeramenteNublado.png',
      'scattered clouds': 'IMG/ligeramenteNublado.png',
      'moderate rain': 'IMG/lluvia.png',
      'broken clouds': 'IMG/nublado.png',
      'overcast clouds': 'IMG/nublado.png',
      'shower rain': 'img/lluvia.png',
      'rain': 'img/lluvia.png',
      'thunderstorm': 'IMG/tormenta.png',
      'snow': 'IMG/nieve.png',
      'mist': 'IMG/niebla.png',
      'thunderstorm with rain': 'IMG/tormenta.png',
      'thunderstorm with heavy rain': 'IMG/tormenta.png',
      'light rain': 'IMG/lluvia.png'
    };
  
    const imagen = imagenes[descripcion] || '';
  
    return {
      traduccion,
      imagen
    };
  }

