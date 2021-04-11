from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_restful import Api
from docs import docs_config
from Controller import cabina,user
from flask_jwt_extended import JWTManager

# CONFIGURA APP
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/TREN'

api = Api(app)
docs = docs_config(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)

# CONTROLLER
cabina.config(api,docs)
user.config(api,docs)    

# LEVANTA APP
if __name__ == '__main__':
    app.run(debug=True)