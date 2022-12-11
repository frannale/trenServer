# SERVIDOR DE LECTURAS

## Configuración y Ejecución

1. Ejecutar el comando `./instalarServidor.sh` para instalar todo lo necesario
2. Antes de ejecutar el servidor, se tiene que configurar el archivo `.env.example`
3. En la carpeta `apiTren` hay un archivo `.env.example`. Completar el mismo con los datos
   requeridos, hay ejemplos de cada dato necesario.
4. Correr el servidor con el comando `./correrServidor.sh`.
5. ¡Listo, el servidor esta corriendo en el puerto 5000!
6. Para loguearse como admin, simplemente use el usuario `admin` y la contraseña que configuro en el archivo `.env.example`

(Opcional) - para crear nuevos usuarios esta el endpoint /user

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
