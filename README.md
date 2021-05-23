SERVIDOR DE LECTURAS

PREREQUISITOS

  1 - Phython3 https://www.python.org/downloads/  
  
  2 - Phython venv https://docs.python.org/3/library/venv.html  
  
  3 - Motor mysql, recomiendo MariaDB https://mariadb.org/  
  
CONGIFURACION INICIAL

1 - Descargar el repositorio  

2 - Dentro del repositorio, crea el entorno virtual llamado vm, con el siguiente comando : python -m venv vm  

3 - Crear una base de datos con el nombre TREN, "CREATE DATABASE TREN;"  

4 - En apiTren/models.py linea 9 y apiTren/run.py linea 17, estan las credenciales de conexion a mysql, por defecto estan root:root, cambiarla en ambos lugares pro la correcta .  

5 - En apiTren/run.py linea 46, cambiar la ip y puerto por los deseados  

6 - Con: mysql -u root -p TREN < admin.sql , importar en mysql el archivo admin.sql en la base TREN, esto carga un usuario llamado admin, contraseña KxZVM@&0$SOx_ con el rol admin  

7 - Buildear el front y poner los archivos aca, el index.html dentro de apiTren/templates, el resto en el directorio apiTren/

8(Opcional) - para crear nuevos usuarios esta el endpoint /user  

![Captura de pantalla de 2021-05-22 20-26-34](https://user-images.githubusercontent.com/28931796/119243336-159d6300-bb3c-11eb-9173-16a3c3530b9c.png)

Setear el header Authorization con el token que obtuvieron para el admin brindado, esto lo pueden obtener logueandose en la interfaz e inspeccionando el header en los request  
Enviar en el body un json con el sisuiente formato:  
{  
  "username": "string",  
  "password": "string",  
  "role": "string" (debe ser admin o lector)  
}    
Ejemplo:  
{  
    "username": "pedro",  
    "password": "1234",  
    "role": "admin"  
}  

INICIAR

1 - Correr ./runServer.sh , este sh levanta el entorno virtual, actualiza las librerias y levanta el servidor flask en la ip y puerto configurado
2(opcional) - Se puede crear un servicio para arranque al booteo, apuntando a ese sh

