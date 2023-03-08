import logging
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template
from flask_restful import Api
from docs import docs_config
from Controller import cabina, user, punto, lectura
from flask_jwt_extended import JWTManager
from webargs.flaskparser import use_args, use_kwargs, parser, abort
from flask_cors import CORS
import datetime
from waitress import serve
from dotenv import load_dotenv
import os

dotenv_path = os.path.join(os.getcwd(), ".env")
fallback_path = os.path.join(os.getcwd(), ".env.example")
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
elif os.path.exists(fallback_path):
    load_dotenv(fallback_path)


logging.basicConfig(level=logging.DEBUG,
                    filename='app.log',
                    filemode='a',
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')


# CONFIGURA APP
app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(
    seconds=int(os.getenv("JWT_ACCESS_TOKEN_EXPIRES"))
)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}".format(
    DB_USER=os.getenv("DB_USER"),
    DB_PASSWORD=os.getenv("DB_PASSWORD"),
    DB_HOST=os.getenv("DB_HOST"),
    DB_PORT=os.getenv("DB_PORT"),
    DB_NAME=os.getenv("DB_NAME"),
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PROPAGATE_EXCEPTIONS"] = True

api = Api(app)
docs = docs_config(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)
CORS(app)

# CONTROLLER
cabina.config(api, docs)
user.config(api, docs)
punto.config(api, docs)
lectura.config(api, docs)


@app.route("/", methods=["GET"])
@app.route("/login", methods=["GET"])
def home():
    return render_template("index.html")


# This error handler is necessary for usage with Flask-RESTful
@parser.error_handler
def handle_request_parsing_error(err, req, schema, *, error_status_code, error_headers):
    abort(
        error_status_code,
        exito=False,
        message="Parametros incorrectos",
        errors=err.messages,
    )


# LEVANTA APP
if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=5000, url_scheme="https",debug=True)
