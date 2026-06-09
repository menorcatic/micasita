function obtenerColorRelleno(idSensor, valor) {
    const num = parseFloat(valor);
    if (isNaN(num)) return 'transparent';
    
    if (idSensor === 'PotPlacas') {
        if (num === 0) return 'transparent';      
        if (num < 400) return 'rgb(255, 0, 0)';       
        if (num < 1000) return 'rgb(255, 165, 0)';       
        if (num < 2000) return 'rgb(255, 255, 0)';       
        return 'rgb(0, 255, 0)';                        
    }

    if (idSensor === 'PotCons') {
        if (num === 0) return 'transparent';      
        if (num < 300) return 'rgb(0, 255, 0)';       
        if (num < 500) return 'rgb(255, 255, 0)';       
        if (num < 800) return 'rgb(255, 165, 0)';       
        return 'rgb(255, 0, 0)';                        
    }
    
    if (idSensor === 'VBat') {
        if (num === 0) return 'transparent';      
        if (num < 24) return 'rgb(255, 0, 0)';       
        if (num < 25) return 'rgb(255, 165, 0)';       
        if (num < 26) return 'rgb(255, 255, 0)';       
        return 'rgb(0, 255, 0)';                        
    }
    
    return 'transparent';
}
