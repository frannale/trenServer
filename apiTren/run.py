from flask_sqlalchemy import SQLAlchemy
from flask import Flask,render_template
from flask_restful import Api
from docs import docs_config
from Controller import cabina,user,punto,lectura
from flask_jwt_extended import JWTManager
from webargs.flaskparser import use_args, use_kwargs, parser, abort
from flask_cors import CORS
import datetime
from waitress import serve

# CONFIGURA APP
app = Flask(__name__)
app.config['SECRET_KEY'] = 'P*ahKoojhgnR'
app.config['JWT_SECRET_KEY'] = 'P*ahKoojhgnR'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(seconds=7200)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/TREN'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True

api = Api(app)
docs = docs_config(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)
CORS(app)

# CONTROLLER
cabina.config(api,docs)
user.config(api,docs)
punto.config(api,docs)
lectura.config(api,docs)  

@app.route('/', methods=['GET'])
@app.route('/login', methods=['GET'])
def home():
  return render_template('index.html')

# This error handler is necessary for usage with Flask-RESTful
@parser.error_handler
def handle_request_parsing_error(err, req, schema, *, error_status_code, error_headers):
    abort(error_status_code, exito = False, message="Parametros incorrectos", errors=err.messages)

# LEVANTA APP
if __name__ == '__main__':
    serve(app, host='192.168.0.238', port=5000, url_scheme='https')