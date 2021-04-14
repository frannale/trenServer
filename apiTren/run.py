from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_restful import Api
from docs import docs_config
from Controller import cabina,user,punto
from flask_jwt_extended import JWTManager
from webargs.flaskparser import use_args, use_kwargs, parser, abort
from flask_cors import CORS

# CONFIGURA APP
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/TREN'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

api = Api(app)
docs = docs_config(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)
CORS(app)

# CONTROLLER
cabina.config(api,docs)
user.config(api,docs)
punto.config(api,docs)  

# This error handler is necessary for usage with Flask-RESTful
@parser.error_handler
def handle_request_parsing_error(err, req, schema, *, error_status_code, error_headers):
    abort(error_status_code, exito = False, message="Esto no deberia haber pasado xd", errors=err.messages)

# LEVANTA APP
if __name__ == '__main__':
    app.run(debug=True)