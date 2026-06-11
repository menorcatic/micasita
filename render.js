// ==========================================
// 1. FUNCIÓN PARA LOS SENSORES DE LA DERECHA
// ==========================================
function renderizarColumnaDerecha() {
    const panel = document.getElementById('panel-sensores');
    if (!panel) return; 
    
    panel.innerHTML = '';

    const listaOrdenada = [
        { id: 'PotPlaca_Est', grupo: 'potencia', etiqueta: 'Placa Est.' },
        { id: 'PotPlaca', grupo: 'potencia', etiqueta: 'Placas Inst' },
        { id: 'PotCons', grupo: 'potencia', etiqueta: 'Consumo' },
        { id: 'VBat', grupo: 'potencia', etiqueta: 'V. Batería' },
        { id: 'Den', grupo: 'densidad', etiqueta: 'Densidad' } 
        { id: 'TBat', grupo: 'temperatura', etiqueta: 'T. Bat.' },
        { id: 'TDepCa', grupo: 'temperatura', etiqueta: 'T. Dep. Ca.' },
        { id: 'TDepFr', grupo: 'temperatura', etiqueta: 'T. Dep. Fr.' },
        { id: 'TTub', grupo: 'temperatura', etiqueta: 'T. Tubos' },
        { id: 'TSSR', grupo: 'temperatura', etiqueta: 'T. SSR' },
        { id: 'TT', grupo: 'temperatura', etiqueta: 'T. TT (TT)' },
        { id: 'TM', grupo: 'temperatura', etiqueta: 'T. Amb (TM)' },
        { id: 'TS', grupo: 'temperatura', etiqueta: 'T. TS (TS)' },
        { id: 'NDepCa', grupo: 'nivel', etiqueta: 'N. Dep. Ca.' },
        { id: 'NDepAl', grupo: 'nivel', etiqueta: 'N. Dep. Al.' },
        { id: 'NDepfr', grupo: 'nivel', etiqueta: 'N. Dep. Fr.' },
        { id: 'Ret', grupo: 'flujo', etiqueta: 'Flujo Ret.' },
        { id: 'TR', grupo: 'temperatura', etiqueta: 'T. TR' },
        { id: 'TSR1', grupo: 'temperatura', etiqueta: 'T. TSR1' },
        { id: 'TSR2', grupo: 'temperatura', etiqueta: 'T. TSR2' },
    ];

    listaOrdenada.forEach(sensor => {
        let valorActual = '--';
        
        if (window.datosSensores && window.datosSensores[sensor.grupo] && window.datosSensores[sensor.grupo][sensor.id] !== undefined) {
            valorActual = window.datosSensores[sensor.grupo][sensor.id];
        }
        if (valorActual === 'unknown' || valorActual === 'unavailable') {
            valorActual = '--';
        }

        const estilosEstablecidos = obtenerColorRelleno(sensor.id, valorActual);

        const caja = document.createElement('div');
        caja.className = 'caja-sensor';
        
        caja.style.backgroundColor = estilosEstablecidos.fondo;
        caja.style.color = estilosEstablecidos.texto; 
        
        caja.innerHTML = `<span>${sensor.etiqueta}</span> ${valorActual}`;
        
        panel.appendChild(caja);
    });
}

// ==========================================
// 2. FUNCIÓN PARA LOS DEPÓSITOS DE ABAJO (NUEVA)
// ==========================================
function renderizarDepositos() {
    const contenedorMaestro = document.getElementById('panel-depositos');
    if (!contenedorMaestro) return;

    contenedorMaestro.innerHTML = '';

    // Tu lista modular de depósitos
    const listaDepositos = [
        { idHtml: 'deposito-ac', idFluido: 'dep1-fluido', idLitros: 'dep1-litros', idTemp: 'dep1-temp', etiqueta: 'AGUA C.', litros: '650', temp: '42.5', color: '#ff5500', nivelTop: '35%' },
        { idHtml: 'deposito-af', idFluido: 'dep2-fluido', idLitros: 'dep2-litros', idTemp: 'dep2-temp', etiqueta: 'AGUA F.', litros: '420', temp: '16.8', color: '#00d2ff', nivelTop: '60%' }
    ];

    listaDepositos.forEach(dep => {
        const caja = document.createElement('div');
        caja.className = 'caja-pestana';
        caja.id = dep.idHtml; 

        caja.innerHTML = `
            <span class="titulo-solapa">${dep.etiqueta}</span>
            <div class="contenedor-deposito">
                <div class="tanque-visual">
                    <div class="fluido" id="${dep.idFluido}" style="top: ${dep.nivelTop}; background-color: ${dep.color};"></div>
                </div>
                <div class="datos-deposito">
                    <div class="valor-nivel"><span id="${dep.idLitros}">${dep.litros}</span> L</div>
                    <div class="valor-temp"><span id="${dep.idTemp}">${dep.temp}</span> °C</div>
                </div>
            </div>
        `;

        contenedorMaestro.appendChild(caja);
    });
}

function renderizarSolar() {
    const contenedorMaestro = document.getElementById('panel-solar');
    if (!contenedorMaestro) return;

    contenedorMaestro.innerHTML = '';

    // Extraemos el valor actual del sensor TTub (Temperatura de Tubos)
    let valorTemp = '--';
    if (window.datosSensores && window.datosSensores['temperatura'] && window.datosSensores['temperatura']['TTub'] !== undefined) {
        valorTemp = window.datosSensores['temperatura']['TTub'];
    }
    if (valorTemp === 'unknown' || valorTemp === 'unavailable') {
        valorTemp = '--';
    }

    // Le pedimos a colores.js un color térmico basado en la temperatura
    // Como la función colores espera un ID para discriminar, podemos pasarle 'PotPlacas' de forma provisional
    // para que use su lógica de colores (Rojo frío/bajo, Verde medio, Amarillo alto) o la que prefieras
    const estilosColector = obtenerColorRelleno('PotPlacas', valorTemp); 

    // Fabricamos el contenedor con el título de solapa TUBOS y el esquema visual
    const caja = document.createElement('div');
    caja.className = 'caja-pestana';
    caja.id = 'contenedor-solar';

    caja.innerHTML = `
        <span class="titulo-solapa">PANEL S.</span>
        <div class="esquema-solar">
            <!-- El colector rectangular adopta el color térmico del sensor -->
            <div class="colector-bloque" id="colector-solar" style="background-color: ${estilosColector.fondo}; color: ${estilosColector.texto};">
                ${valorTemp} °C
            </div>
            <!-- El dibujo de los tubos alineados debajo -->
            <div class="tubos-rejilla"></div>
        </div>
    `;

    contenedorMaestro.appendChild(caja);
}
