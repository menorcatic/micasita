// ==========================================
// 1. FUNCIÓN PARA LOS SENSORES DE LA DERECHA
// ==========================================
function renderizarColumnaDerecha() {
    const panel = document.getElementById('panel-sensores');
    if (!panel) return; 
    
    panel.innerHTML = '';

    const listaOrdenada = [
        { id: 'PotPlaca_Est', grupo: 'potencia', etiqueta: 'P.Est' },
        { id: 'PotPlaca', grupo: 'potencia', etiqueta: 'P.Inst' },
        { id: 'PotCons', grupo: 'potencia', etiqueta:  'Cons' },
        { id: 'VBat', grupo: 'potencia', etiqueta: 'V.Bat' },
        { id: 'Den', grupo: 'densidad', etiqueta: 'Dens' }, 
        { id: 'TBat', grupo: 'temperatura', etiqueta: 'T.Bat' },
        { id: 'TDepCa', grupo: 'temperatura', etiqueta: 'T.Dep.Ca' },
        { id: 'TDepFr', grupo: 'temperatura', etiqueta: 'T.Dep.Fr.' },
        { id: 'TTub', grupo: 'temperatura', etiqueta: 'T.Tub' },
        { id: 'TSSR', grupo: 'temperatura', etiqueta: 'T.SSR' },
        { id: 'TT', grupo: 'temperatura', etiqueta: 'T.TT' },
        { id: 'TM', grupo: 'temperatura', etiqueta: 'T.TM' },
        { id: 'TS', grupo: 'temperatura', etiqueta: 'T.TS' },
        { id: 'NDepAl', grupo: 'nivel', etiqueta: 'Niv.AL' },
        { id: 'NDepCa', grupo: 'nivel', etiqueta: 'N.Dep.Ca' },
        { id: 'NDepfr', grupo: 'nivel', etiqueta: 'N.Dep.Fr' },
        { id: 'Ret', grupo: 'flujo', etiqueta: 'Flujo' },
        { id: 'TR', grupo: 'temperatura', etiqueta: 'T.TR' },
        { id: 'TSR1', grupo: 'temperatura', etiqueta: 'TSR1' },
        { id: 'TSR2', grupo: 'temperatura', etiqueta: 'TSR2' }
    ];

    listaOrdenada.forEach(sensor => {
        let valorActual = '--';
        
        if (window.datosSensores && window.datosSensores[sensor.grupo] && window.datosSensores[sensor.grupo][sensor.id] !== undefined) {
            valorActual = window.datosSensores[sensor.grupo][sensor.id];
        }
        if (valorActual === 'unknown' || valorActual === 'unavailable') {
            valorActual = '--';
        }

        // --- ASIGNACIÓN DE UNIDADES ---
        let unidad = '';
        
        // Si el valor no es un guión, calculamos su unidad
        if (valorActual !== '--') {
            if (sensor.id === 'VBat') {
                unidad = ' V';         // Caso especial: V. Batería es del grupo potencia pero usa Voltios
            } else if (sensor.id === 'NDepAl') {
                unidad = '';     
            } else if (sensor.grupo === 'potencia') {
                unidad = ' W';         // Vatios
            } else if (sensor.grupo === 'temperatura') {
                unidad = 'º';          // Grados (puedes cambiarlo por ' ºC' si lo prefieres)
            } else if (sensor.grupo === 'densidad') {
                unidad = ' g/ml';      // Densidad
            } else if (sensor.grupo === 'nivel') {
                unidad = ' L';         // Litros para los depósitos
            } else if (sensor.grupo === 'flujo') {
                unidad = ' L/m';       // Unidad de ejemplo para el flujo, cámbiala si usas otra
            }
        }

        const estilosEstablecidos = obtenerColorRelleno(sensor.id, valorActual);

        const caja = document.createElement('div');
        caja.className = 'caja-sensor';
        
        caja.style.backgroundColor = estilosEstablecidos.fondo;
        caja.style.color = estilosEstablecidos.texto; 
        
        caja.innerHTML = `<span>${sensor.etiqueta}</span> ${valorActual}${unidad}`;
        panel.appendChild(caja);
    });
}
