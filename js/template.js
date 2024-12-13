
// template.js sin usar fetch

import fotosCV from '../data/data.js'; //importa el archivo data.js en donde esta fotosCV

// Escucha el evento 'DOMContentLoaded' que se activa cuando el HTML ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el contenido del template y el contenedor donde se agregarán las tarjetas
    const template = document.getElementById('template').content;
    const container = document.getElementById('container');

    // Itera sobre cada elemento en fotosCV
    fotosCV.forEach(fotoCV => { 
        // Clona el template para crear una nueva tarjeta
        const tarjeta = document.importNode(template, true);  
        
        // Asigna la URL de la imagen al elemento de la tarjeta
        tarjeta.querySelector('.imgTendencia').src = fotoCV.img_url;
        
        // Asigna el nombre de la foto al elemento de la tarjeta
        tarjeta.querySelector('.titulo-foto').textContent = fotoCV.name;
        
        // Asigna un mensaje de registro al elemento de la tarjeta
        tarjeta.querySelector('.registrado').textContent = 'Para ver el precio debes estar registrado';
        
        // Agrega la tarjeta al contenedor en el DOM
        container.appendChild(tarjeta);
    });
});





/*


// creamos un template para ir iterando con un foreach desde el
// archivo json con un fetch


// Escucha el evento 'DOMContentLoaded' que se activa cuando el HTML ha sido completamente cargado
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Realiza una solicitud para obtener el archivo JSON
        const response = await fetch('data/data.json'); // Especifica la ruta relativa al archivo JSON
        
        // Convierte la respuesta a formato JSON
        const data = await response.json();
        
        // Asigna los datos del archivo JSON a la variable fotosCV
        const fotosCV = data; 
        
        // Obtiene el contenido del template y el contenedor donde se agregarán las tarjetas
        const template = document.getElementById('template').content;
        const container = document.getElementById('container');
        
        // Itera sobre cada elemento en fotosCV
        fotosCV.forEach(fotoCV => { 
            // Clona el template para crear una nueva tarjeta
            const tarjeta = document.importNode(template, true);  
            
            // Asigna la URL de la imagen al elemento de la tarjeta
            tarjeta.querySelector('.imgTendencia').src = fotoCV.img_url;
            
            // Asigna el nombre de la foto al elemento de la tarjeta
            tarjeta.querySelector('.titulo-foto').textContent = fotoCV.name;
            
            // Asigna un mensaje de registro al elemento de la tarjeta
            tarjeta.querySelector('.registrado').textContent = 'Para ver el precio debes estar registrado';
            
            // Agrega la tarjeta al contenedor en el DOM
            container.appendChild(tarjeta);
        });
    } catch (error) {
        // Maneja cualquier error que ocurra durante la carga del archivo JSON
        console.error('Error al cargar el archivo JSON:', error);
    }
});
*/



/*

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/data.json'); // Especifica la ruta relativa al archivo JSON
        const data = await response.json();
        
        const fotosCV = data; // Asigna los datos del archivo JSON a la variable fotosCV
        const template = document.getElementById('template').content;
        const container = document.getElementById('container');
        
        fotosCV.forEach(fotoCV => { 
            const tarjeta = document.importNode(template, true);  
            tarjeta.querySelector('.imgTendencia').src = fotoCV.img_url;
            tarjeta.querySelector('.titulo-foto').textContent = fotoCV.name;
            tarjeta.querySelector('.registrado').textContent = 'Para ver el precio debes estar registrado';
            container.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
});

*/
/*

document.addEventListener('DOMContentLoaded', () => {
  
  fetch('data/data.json') // Especifica la ruta relativa al archivo JSON
  .then(response => response.json())
  .then(data => {
      const fotosCV = data; // Asigna los datos del archivo JSON a la variable fotosCV
      const template = document.getElementById('template').content;
      const container = document.getElementById('container');
      fotosCV.forEach(fotoCV => { 
          const tarjeta = document.importNode(template, true);  
          tarjeta.querySelector('.imgTendencia').src = fotoCV.img_url;
          tarjeta.querySelector('.titulo-foto').textContent = fotoCV.name;
          container.appendChild(tarjeta);
      });
  })
  .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
  });
});





*/


