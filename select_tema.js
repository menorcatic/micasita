/* ==========================================================================
   CONTROLADOR DE TEMAS RGB (select_tema.js)
   ========================================================================== */
const htmlElement = document.documentElement;

// Asegura que la web inicie con la inversión desactivada de forma limpia
if (!htmlElement.hasAttribute('data-inverted')) {
    htmlElement.setAttribute('data-inverted', 'false');
}

// Cambia el color base (rojo, verde o azul) al pulsar un trapecio
function cambiarTema(nuevoTema) {
    htmlElement.setAttribute('data-theme', nuevoTema);
}

// Invierte los valores de fondo y elemento del tema activo
function invertirColores() {
    const estadoActual = htmlElement.getAttribute('data-inverted');
    const nuevoEstado = (estadoActual === 'true') ? 'false' : 'true';
    htmlElement.setAttribute('data-inverted', nuevoEstado);
}
