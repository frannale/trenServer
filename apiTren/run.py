from flask import Flask
from flask_restful import Api
from docs import docs_config
from Controller import cabina

# CONFIGURA APP
app = Flask(__name__)
api = Api(app)
docs = docs_config(app)

# CABINAS CONTROLLER
cabina.config(api,docs)

# PUNTOS CONTROLLER

# LECTURAS CONTROLLER

# LEVANTA APP
if __name__ == '__main__':
    app.run(debug=True)