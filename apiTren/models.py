from passlib.hash import pbkdf2_sha256 as sha256
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from flask import Flask
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/TREN'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# USER CLASS
class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(120), unique = True, nullable = False)
    password = db.Column(db.String(120), nullable = False)
    role = db.Column(db.String(120), nullable = False)


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    @classmethod
    def find_by_username(cls, username):
        result = cls.query.filter_by(username = username).first()
        db.session.remove()
        db.engine.dispose()
        return result

    @staticmethod
    def generate_hash(password):
        return sha256.hash(password)

    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)

# CABINA CLASS
class CabinaModel(db.Model):
    __tablename__ = 'cabinas'

    id_config = db.Column(db.Integer, primary_key = True)
    codigo_cabina = db.Column(db.String(120), unique = True, nullable = False)
    observaciones = db.Column(db.String(400), nullable = False)
    fecha_instalacion = db.Column(db.Date, nullable = False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    def to_json(self):
        return {
            'id_config' : self.id_config,
            'codigo_cabina' : self.codigo_cabina,
            'observaciones' : self.observaciones,
            'fecha_instalacion' : self.fecha_instalacion.strftime("%d/%m/%Y"),
        }

    @classmethod
    def get_all(cls,get_args):
        squares = []
        page = int(get_args.get('page',1))
        per_page = int(get_args.get('per_page',200))
        sort = get_args.get('sort','id_config')
        ord = get_args.get('ord','a')
        result = cls.query\
                        .order_by( desc(sort) if ord == 'd' else sort )\
                        .paginate(page,per_page,error_out=False)\
                        .items 

        for item in result : squares.append(item.to_json())
        db.session.remove()
        db.engine.dispose()
        return squares


    @classmethod
    def update(cls):
        db.session.commit()
        db.session.remove()
        db.engine.dispose()
        return True

    @classmethod
    def find_by_id_config(cls, id_config):
        result = cls.query.filter_by(id_config = id_config).first()
        db.session.remove()
        db.engine.dispose()
        return result

    @classmethod
    def find_by_codigo_cabina(cls, codigo_cabina):
        result =  cls.query.filter_by(codigo_cabina = codigo_cabina).first()
        db.session.remove()
        db.engine.dispose()
        return result

# PUNTO CLASS
class PuntoModel(db.Model):
    __tablename__ = 'puntos'

    id_punto = db.Column(db.Integer, primary_key = True)
    id_tag = db.Column(db.String(120), unique = True, nullable = False)
    via = db.Column(db.String(220), nullable = False)
    baliza = db.Column(db.String(220), nullable = False)
    asociado_a = db.Column(db.String(220), nullable = False)
    progresivas = db.Column(db.String(220), nullable = False)
    latitud = db.Column(db.String(220), nullable = False)
    longitud = db.Column(db.String(220), nullable = False)
    estado = db.Column(db.String(220), nullable = False)
    epc = db.Column(db.String(220), nullable = False)
    fecha_instalacion = db.Column(db.Date, nullable = False)
    observaciones = db.Column(db.String(400), nullable = False)
    
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    def to_json(self):
        return {
            'id_punto' : self.id_punto,
            'id_tag' : self.id_tag,
            'via' : self.via,
            'baliza' : self.baliza,
            'asociado_a' : self.asociado_a,
            'progresivas' : self.progresivas,
            'latitud' : self.latitud,
            'longitud' : self.longitud,
            'estado' : self.estado,
            'epc' : self.epc,
            'observaciones' : self.observaciones,
            'fecha_instalacion' : self.fecha_instalacion.strftime("%d/%m/%Y"),
        }

    @classmethod
    def get_all(cls,get_args):
        squares = []
        page = int(get_args.get('page',1))
        per_page = int(get_args.get('per_page',200))
        sort = get_args.get('sort','id_punto')
        ord = get_args.get('ord','a')
        result = cls.query\
                        .filter_by(estado = 'activo')\
                        .order_by( desc(sort) if ord == 'd' else sort )\
                        .paginate(page,per_page,error_out=False)\
                        .items
        for item in result : squares.append(item.to_json())
        return squares


    @classmethod
    def get_lista_negra(cls,get_args):
        squares = []
        page = int(get_args.get('page',1))
        per_page = int(get_args.get('per_page',200))
        sort = get_args.get('sort','id_punto')
        ord = get_args.get('ord','a')
        result = cls.query\
                        .filter_by(estado = 'anulado')\
                        .order_by( desc(sort) if ord == 'd' else sort )\
                        .paginate(page,per_page,error_out=False)\
                        .items
        for item in result : squares.append(item.to_json())
        db.session.remove()
        db.engine.dispose()
        return squares

    @classmethod
    def update(cls):
        db.session.commit()
        db.session.remove()
        db.engine.dispose()
        return True

    @classmethod
    def find_by_id_punto(cls, id_punto):
        result = cls.query.filter_by(id_punto = id_punto).first()
        db.session.remove()
        db.engine.dispose()
        return result 

    @classmethod
    def find_by_tag(cls, tag):
        result = cls.query.filter_by(id_tag = tag).first()
        db.session.remove()
        db.engine.dispose()
        return result

# LECTURA CLASS
class LecturaModel(db.Model):
    __tablename__ = 'lecturas'

    id_lectura = db.Column(db.Integer , primary_key = True)
    id_punto = db.Column(db.Integer)
    id_cabina = db.Column(db.Integer)
    epc = db.Column(db.String(220), nullable = False)
    fecha_lectura = db.Column(db.DateTime, nullable = False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        db.session.remove()
        db.engine.dispose()

    def to_json(self,item = None):
        return {
            'id_lectura' : self.id_lectura,
            'id_punto' : self.id_punto,
            'id_cabina' : self.id_cabina,
            'id_tag' :  item[1] if item else 'null' ,
            'codigo_cabina' : item[2] if item else 'null' ,
            'epc' : self.epc,
            'fecha_lectura' : self.fecha_lectura.strftime("%d/%m/%Y, %H:%M:%S"),
        }

    @classmethod
    def get_all(cls,get_args):
        squares = []

        page = int(get_args.get('page',1))
        per_page = int(get_args.get('per_page',200))
        sort = get_args.get('sort','fecha_lectura')
        ord = get_args.get('ord','d')
        id_cabina = get_args.get('id_cabina', 0)
        id_punto = get_args.get('id_punto', 0)
        desde_date =   datetime.datetime.strptime(get_args.get('desde'), '%d/%m/%Y')
        hasta_date =   datetime.datetime.strptime(get_args.get('hasta'), '%d/%m/%Y')
        result = cls.query\
                    .filter(LecturaModel.fecha_lectura.between(desde_date, hasta_date))\
                    .filter((LecturaModel.id_cabina == id_cabina) | (id_cabina == 0))\
                    .filter((LecturaModel.id_punto == id_punto) | (id_punto == 0))\
                    .join(PuntoModel, PuntoModel.id_punto == LecturaModel.id_punto, isouter=True)\
                    .join(CabinaModel, CabinaModel.id_config == LecturaModel.id_cabina, isouter=True)\
                    .add_columns(PuntoModel.id_tag,CabinaModel.codigo_cabina)\
                    .order_by( desc(sort) if ord == 'd' else sort )\
                    .paginate(page,per_page,error_out=False)\
                    .items
        
        for item in result : squares.append(item[0].to_json(item))
        db.session.remove()
        db.engine.dispose()
        return squares

    @classmethod
    def update(cls):
        db.session.commit()
        db.session.remove()
        db.engine.dispose()
        return True

    @classmethod
    def find_by_id_lectura(cls, id_lectura):
        result = cls.query.filter_by(id_lectura = id_lectura).first()
        db.session.remove()
        db.engine.dispose()
        return result


db.create_all()