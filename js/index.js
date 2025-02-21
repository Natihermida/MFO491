// Función para mostrar el mensaje de saludo como alerta
document.getElementById('greetingButton').addEventListener('click', function() {
    alert('¡Hola! Gracias por visitar nuestra clínica veterinaria.');
});

// Función para mostrar los datos ingresados en el formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userData = document.getElementById('user-data');
    userData.innerHTML = `
        <h4>Datos ingresados:</h4>
        <p>Nombre: ${name}</p>
        <p>Correo electrónico: ${email}</p>
    `;
});

// Función para mostrar u ocultar el div con la clase actor_list (veterinarios de guardia)
document.getElementById('toggleActorListButton').addEventListener('click', function() {
    const actorListDiv = document.querySelector('.actor_list');
    
    // Comprobamos si el div está oculto o visible
    if (actorListDiv.style.display === 'none' || actorListDiv.style.display === '') {
        actorListDiv.style.display = 'block'; // Mostrar
    } else {
        actorListDiv.style.display = 'none'; // Ocultar
    }
});

// Función para obtener y mostrar la lista de países con AJAX al hacer clic en el botón "Mostrar países"
document.getElementById('fetchCountriesButton').addEventListener('click', function() {
    // Hacemos la solicitud a la API de RestCountries
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())  // Convertimos la respuesta a JSON
        .then(data => {
            const countriesList = document.getElementById('countriesList');
            countriesList.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos países
            
            // Iteramos sobre los países y los mostramos en la lista
            data.forEach(country => {
                const listItem = document.createElement('li');
                listItem.textContent = country.name.common;  // Mostramos solo el nombre común del país
                countriesList.appendChild(listItem);
            });

            // Hacer visible la lista de países después de cargarla
            document.getElementById('worldClinics').style.display = 'block';
        })
        .catch(error => {
            console.error('Error al obtener los países:', error);
        });
});

// Función para mostrar u ocultar la lista de países
document.getElementById('toggleCountriesButton').addEventListener('click', function() {
    const countriesDiv = document.getElementById('worldClinics');
    
    // Comprobamos si el div está oculto o visible
    if (countriesDiv.style.display === 'none' || countriesDiv.style.display === '') {
        countriesDiv.style.display = 'block'; // Mostrar
    } else {
        countriesDiv.style.display = 'none'; // Ocultar
    }
});
