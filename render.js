function renderizarColumnaDerecha() {
    const panel = document.getElementById('panel-sensores');
    if (!panel) return; 
    
    panel.innerHTML = '';

    const listaOrdenada = [
        { id: 'PotPlaca_Est', grupo: 'potencia', etiqueta: 'Placa Est.' },
        { id: 'PotPlacas', grupo: 'potencia', etiqueta: 'Placas Real' },
        { id: 'PotCons', grupo: 'potencia', etiqueta: 'Consumo' },
        { id: 'VBat', grupo: 'potencia', etiqueta: 'V. Batería' },
        { id: 'TSSR', grupo: 'temperatura', etiqueta: 'T. SSR' },
        { id: 'TM', grupo: 'temperatura', etiqueta: 'T. Amb (TM)' },
        { id: 'TS', grupo: 'temperatura', etiqueta: 'T. TS' },
        { id: 'TR', grupo: 'temperatura', etiqueta: 'T. TR' },
        { id: 'TSR1', grupo: 'temperatura', etiqueta: 'T. TSR1' },
        { id: 'TSR2', grupo: 'temperatura', etiqueta: 'T. TSR2' },
        { id: 'TDepCa', grupo: 'temperatura', etiqueta: 'T. Dep. Ca.' },
        { id: 'TDepFr', grupo: 'temperatura', etiqueta: 'T. Dep. Fr.' },
        { id: 'TTub', grupo: 'temperatura', etiqueta: 'T. Tubos' },
        { id: 'TBat', grupo: 'temperatura', etiqueta: 'T. Bat.' },
        { id: 'NDepCa', grupo: 'nivel', etiqueta: 'N. Dep. Ca.' },
        { id: 'NDepAl', grupo: 'nivel', etiqueta: 'N. Dep. Al.' },
        { id: 'nDepfr', grupo: 'nivel', etiqueta: 'N. Dep. Fr.' },
        { id: 'Ret', grupo: 'flujo', etiqueta: 'Flujo Ret.' },
        { id: 'Den', grupo: 'densidad', etiqueta: 'Densidad' }
    ];

    listaOrdenada.forEach(sensor => {
        let valorActual = '--';
        
        if (window.datosSensores && window.datosSensores[sensor.grupo] && window.datosSensores[sensor.grupo][sensor.id] !== undefined) {
            valorActual = window.datosSensores[sensor.grupo][sensor.id];
        }
        if (valorActual === 'unknown' || valorActual === 'unavailable') {
            valorActual = '--';
        }

        // Esta función viene del archivo colores.js externo
        const colorFondo = obtenerColorRelleno(sensor.id, valorActual);

        const caja = document.createElement('div');
        caja.className = 'caja-sensor';
        caja.style.backgroundColor = colorFondo;
        caja.innerHTML = `<span>${sensor.etiqueta}</span> ${valorActual}`;
        
        panel.appendChild(caja);
    });
}
