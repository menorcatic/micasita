window.datosSensores = {};

async function consultarServidor() {
    try {
        const respuesta = await fetch('./sensores.json?v=' + new Date().getTime());
        const datos = await respuesta.json();

        window.datosSensores = datos;

        renderizarColumnaDerecha();
        renderizarDepositos();
        renderizarSolar();

        const elementoHora = document.getElementById('hora-lectura');
        if (elementoHora) {
            elementoHora.innerText = new Date().toLocaleTimeString();
        }
    } catch (error) {
        console.error("Error al sincronizar datos:", error);
        renderizarColumnaDerecha();
    }
}

consultarServidor();
setInterval(consultarServidor, 20000);
