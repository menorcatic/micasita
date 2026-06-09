window.datosSensores = {};

async function consultarServidor() {
    try {
        const respuesta = await fetch('./sensores.json?v=' + new Date().getTime());
        const datos = await respuesta.json();

        window.datosSensores = datos;
        
        // Esta función viene del archivo render.js externo
        renderizarColumnaDerecha();

        const elementoHora = document.getElementById('hora-lectura');
        if (elementoHora) {
            elementoHora.innerText = new Date().toLocaleTimeString();
        }
    } catch (error) {
        console.error("Error al sincronizar datos:", error);
        renderizarColumnaDerecha();
    }
}

// Lanza la petición al cargar la web y la repite cada 20 segundos
consultarServidor();
setInterval(consultarServidor, 20000);
