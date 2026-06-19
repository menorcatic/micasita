function obtenerColorRelleno(idSensor, valor) {
    const num = parseFloat(valor);
    
    /* Configuración por defecto (Fondo transparente, texto blanco) */
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
        else { configuracion.fondo = 'rgb(0, 255, 0)'; configuracion.texto = '#000000';}
    }

    else if (idSensor === 'PotCons') {
        if (num === 0) return configuracion;
        if (num < 250) { configuracion.fondo = 'rgb(0, 255, 0)';configuracion.texto = '#000000';} /* Verde */
        else if (num < 800) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 1100) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; }//Rojo
    }
    
    else if (idSensor === 'VBat') {
        if (num === 0) return configuracion;
        if (num < 24) { configuracion.fondo = 'rgb(255, 0, 0)'; } 
        else if (num < 25) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } 
        else if (num < 26) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } 
        else { configuracion.fondo = 'rgb(0, 255, 0)';configuracion.texto = '#000000'; }
    }
    else if (idSensor === 'PotPlaca') {
        if (num === 0) return configuracion; 
        if (num < 300) { configuracion.fondo = 'rgb(255, 0, 0)'; } 
        else if (num < 1000) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } 
        else if (num < 2000) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } 
        else { configuracion.fondo = 'rgb(0, 255, 0)';configuracion.texto = '#000000'; }
    }
    else if (idSensor === 'TSSR') {
        if (num === 0) return configuracion; 
        if (num < 36) { configuracion.fondo = 'rgb(0, 0, 255)'; } //Azul
        else if (num < 46) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 55) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; } /* rojo */
    }    

    else if (idSensor === 'TT') {
        if (num === 0) return configuracion; 
        if (num < 18) { configuracion.fondo = 'rgb(0, 0, 255)'; } /* Azul */
        else if (num < 24) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 27) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; } /* rojo */
    }

    else if (idSensor === 'TM') {
        if (num === 0) return configuracion; 
        if (num < 18) { configuracion.fondo = 'rgb(0, 0, 255)'; } /* Azul */
        else if (num < 24) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 27) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; } /* rojo */
    }

    else if (idSensor === 'TS') {
        if (num === 0) return configuracion; 
        if (num < 18) { configuracion.fondo = 'rgb(0, 0, 255)'; } /* Azul */
        else if (num < 24) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 27) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; } /* rojo */
    }
        
    else if (idSensor === 'TR') {
        if (num === 0) return configuracion; 
        if (num < 18) { configuracion.fondo = 'rgb(0, 0, 255)'; } /* Azul */
        else if (num < 24) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 27) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; } /* rojo */
    }
        
    else if (idSensor === 'TBat') {
        if (num === 0) return configuracion; 
        if (num < 20) { configuracion.fondo = 'rgb(0, 0, 255)'; } /* Azul */
        else if (num < 25) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 35) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)'; } /* rojo */
    }

    else if (idSensor === 'Den') {
        if (num === 0) return configuracion; 
        if (num < 1.23) { configuracion.fondo = 'rgb(255, 0, 0)'; } /* Rojo */
        else if (num < 1.25) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* Naranja */
        else if (num < 1.27) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else { configuracion.fondo = 'rgb(0, 255, 0)';configuracion.texto = '#000000'; } /* verde */
    }
        
    else if (idSensor === 'TDepCa') {
        if (num === 0) return configuracion; 
        if (num < 20) { configuracion.fondo = 'rgb(0, 0, 255)'; } /* Azul */
        else if (num < 35) { configuracion.fondo = 'rgb(0, 255, 0)'; configuracion.texto = '#000000'; } /* verde */
        else if (num < 45) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* Amarillo */
        else if (num < 65) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* naranja */
        else { configuracion.fondo = 'rgb(255, 0, 0)';configuracion.texto = '#000000'; } /* rojo */
    }

    else if (idSensor === 'NDepAl') {
        if (num === 0) return configuracion; 
        if (num < 80) { configuracion.fondo = 'rgb(255, 0, 0)'; } /* Rojo */
        else if (num < 120) { configuracion.fondo = 'rgb(255, 165, 0)'; configuracion.texto = '#000000'; } /* naranja */
        else if (num < 160) { configuracion.fondo = 'rgb(255, 255, 0)'; configuracion.texto = '#000000'; } /* amarillo */
        else { configuracion.fondo = 'rgb(0, 255, 0)';configuracion.texto = '#000000'; } /* verde */
    }

    

    
    return configuracion;
}
