async function obtenerYMostrarTemperatura() {
    try {
        const respuesta = await fetch('/datos');
        const data = await respuesta.json();
        
        // Verificar si la respuesta contiene la temperatura
        if (data.hasOwnProperty('temperatura','humedad')) {
            // Mostrar la temperatura en el elemento con id 'temperatura'
            document.getElementById('temperatura').innerText = data.temperatura + '°C';
            document.getElementById('humedad').innerText = data.humedad;
        } else {
            // Si no se encuentra la temperatura en la respuesta
            console.error('No se encontró la temperatura en los datos recibidos:', data);
            document.getElementById('temperatura').innerText = 'No hay datos de temperatura disponibles';
        }
    } catch (error) {
        console.error('Error al obtener la temperatura:', error);
        document.getElementById('temperatura').innerText = 'Error al obtener la temperatura';
    }
}

// Llamar a la función inicialmente al cargar la página
obtenerYMostrarTemperatura();

// Actualizar la temperatura cada 5 segundos
setInterval(obtenerYMostrarTemperatura, 5000);
