#!/bin/bash

source vm/bin/activate
pip install -r requirements.txt
export FLASK_APP=apiTren/run.py
export FLASK_ENV=development
flask run
