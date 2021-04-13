from passlib.hash import pbkdf2_sha256 as sha256
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/TREN'
db = SQLAlchemy(app)

# USER CLASS
class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(120), unique = True, nullable = False)
    password = db.Column(db.String(120), nullable = False)


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username = username).first()

    @staticmethod
    def generate_hash(password):
        return sha256.hash(password)

    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)

# CABINA CLASS
class CabinaModel(db.Model):
    __tablename__ = 'cabinas'

    id = db.Column(db.Integer, primary_key = True)
    id_config = db.Column(db.Integer, unique = True)
    codigo_cabina = db.Column(db.String(120), unique = True, nullable = False)
    observaciones = db.Column(db.String(220), nullable = False)
    fecha_instalacion = db.Column(db.Date, nullable = False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def to_json(self):
        return {
            'id' : self.id,
            'id_config' : self.id_config,
            'codigo_cabina' : self.codigo_cabina,
            'observaciones' : self.observaciones,
            'fecha_instalacion' : self.fecha_instalacion.strftime("%d/%m/%Y"),
        }

    @classmethod
    def get_all(cls):
        squares = []
        for item in  cls.query.all(): squares.append(item.to_json())
        return squares


    @classmethod
    def update(cls):
        db.session.commit()
        return True

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id = id).first()

    @classmethod
    def find_by_id_config(cls, id_config):
        return cls.query.filter_by(id_config = id_config).first()

    @classmethod
    def find_by_codigo_cabina(cls, codigo_cabina):
        return cls.query.filter_by(codigo_cabina = codigo_cabina).first()

db.create_all()