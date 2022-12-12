#!/bin/bash

echo 'Creando virtual environment...'
python3 -m venv venv
echo 'Activando virtual environment...'
source venv/bin/activate
echo 'Instalando todo lo necesario...'
pip install -r requirements.txt --no-index --find-links file:./Dependencies
echo "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
echo 'Listo! Para correr el servidor, ejecuta el archivo correrServidor.sh'
