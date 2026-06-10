function obtenerColorRelleno(idSensor, valor) {
    const num = parseFloat(valor);
    
    // Configuración por defecto (Fondo transparente, texto blanco)
    let configuracion = {
        fondo: 'transparent',
        texto: '#ffffff'
    };

    if (isNaN(num)) return configuracion;
    
    if (idSensor === 'PotPlaca_Est') {
        if (num === 0) return configuracion; 
        if (num < 400) { configuracion.fondo = 'rgb(255, 0, 0)'; } 
        else if (num < 1000) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } 
        else if (num < 2000) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } 
        else { configuracion.fondo = 'rgb(0, 255, 0)'; }
    }

    else if (idSensor === 'PotCons') {
        if (num === 0) return configuracion;
        if (num < 300) { configuracion.fondo = 'rgb(0, 255, 0)'; } 
        else if (num < 500) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } 
        else if (num < 800) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } 
        else { configuracion.fondo = 'rgb(255, 0, 0)'; }
    }
    
    else if (idSensor === 'VBat') {
        if (num === 0) return configuracion;
        if (num < 24) { configuracion.fondo = 'rgb(255, 0, 0)'; } 
        else if (num < 25) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } 
        else if (num < 26) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } 
        else { configuracion.fondo = 'rgb(0, 255, 0)'; }
    }
    else if (idSensor === 'PotPlaca') {
        if (num === 0) return configuracion; 
        if (PotPlaca < PotCons) { configuracion.fondo = 'rgb(255, 0, 0)'; } 
        else if (num < 1000) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } 
        else if (num < 2000) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } 
        else { configuracion.fondo = 'rgb(0, 255, 0)'; }
    }
    return configuracion;
}
