import json
import datetime
import requests

# 1. AQUÍ AGREGA TU LISTA DE SENSORES DE FORMA ORDENADA
# Puedes añadir todos los que quieras siguiendo este formato: "nombre_en_web": "sensor.de_home_assistant"
SENSORES_A_RECOPILAR = {
    "potencia_solar": "sensor.potencia_placas",
    "voltaje_bateria": "sensor.voltaje_bateria",
    "potencia_casa": "sensor.potencia_salida_casa",
    # Cuando agregues más sensores en el futuro, solo pon una coma arriba y añádelos aquí:
    # "nivel_agua": "sensor.nivel_del_deposito",
    # "temperatura_salon": "sensor.temperatura_salon"
}

def obtener_datos_ha():
    datos_finales = {}
    
    # Añadimos la marca de tiempo con la hora real de la consulta
    ahora = datetime.datetime.now()
    datos_finales["actualizado"] = ahora.strftime("%H:%M:%S")
    
    # Consultamos el estado de cada sensor al servidor local de Home Assistant
    # Usamos la API interna que ya provee la terminal de HA OS
    for clave_web, entidad_ha in SENSORES_A_RECOPILAR.items():
        try:
            url = f"http://supervisor/core/api/states/{entidad_ha}"
            headers = {"Authorization": "Bearer ", "Content-Type": "application/json"}
            # Nota: HA OS inyecta el Token de forma automática en el entorno de la terminal
            import os
            if "SUPERVISOR_TOKEN" in os.environ:
                headers["Authorization"] = f"Bearer {os.environ['SUPERVISOR_TOKEN']}"
                
            respuesta = requests.get(url, headers=headers, timeout=5)
            if respuesta.status_code == 200:
                datos_finales[clave_web] = respuesta.json().get("state", "unknown")
            else:
                datos_finales[clave_web] = "error_api"
        except Exception:
            datos_finales[clave_web] = "error_conexion"
            
    return datos_finales

def guardar_y_subir():
    # Creamos el JSON estructurado
    datos = obtener_datos_ha()
    
    # Lo escribimos en el archivo local de tu mini PC
    ruta_json = "/config/micasita/datos.json"
    with open(ruta_json, "w", encoding="utf-8") as archivo:
        json.dump(datos, archivo, ensure_ascii=False)
        
    print(f"Datos guardados con éxito: {datos}")

if __name__ == "__main__":
    guardar_y_subir()
