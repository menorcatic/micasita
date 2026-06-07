import json
import datetime
import requests

# 1. AQUÍ AGREGA TU LISTA DE SENSORES DE FORMA ORDENADA
# Puedes añadir todos los que quieras siguiendo este formato: "nombre_en_web": "sensor.de_home_assistant"
SENSORES_A_RECOPILAR = {
# 1. TUS SENSORES REALES DE HOME ASSISTANT
    "potencia_solar": "sensor.irradiancia_solar_potencia_panel_testigo",
    "voltaje_bateria": "sensor.voltaje_bateria",
    "potencia_casa": "sensor.potencia_salida_casa"
}

def obtener_datos_ha():
    datos_finales = {}
    
    # Capturamos la hora real del reloj del mini PC
    ahora = datetime.datetime.now()
    datos_finales["actualizado"] = ahora.strftime("%H:%M:%S")
    
    # PEGA AQUÍ TU NUEVO TOKEN (Asegúrate de que NO tenga espacios al final antes de la comilla)
    MI_NUEVO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkNzIwYjBkZGYzZTM0NmQwYTIwMThmODYxZmZlODM5YiIsImlhdCI6MTc4MDg0NzM2NCwiZXhwIjoyMDk2MjA3MzY0fQ.C9Ku8c9_08VOijG82sebGjnxDkJKCm8wEk9sSFcmdJA"

    headers = {
        "Authorization": f"Bearer {MI_NUEVO_TOKEN}", 
        "Content-Type": "application/json"
    }
    
    for clave_web, entidad_ha in SENSORES_A_RECOPILAR.items():
        try:
            # Usamos la dirección local directa de tu Home Assistant
            url = f"http://localhost:8123/api/states/{entidad_ha}"
            respuesta = requests.get(url, headers=headers, timeout=5)
            
            if respuesta.status_code == 200:
                datos_finales[clave_web] = respuesta.json().get("state", "unknown")
            else:
                datos_finales[clave_web] = f"error_{respuesta.status_code}"
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
