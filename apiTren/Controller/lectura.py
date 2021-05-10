from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api, fields, marshal_with
from models import LecturaModel,UserModel
from Documentation.lectura import PostLecturaSchema
import datetime
from flask import request
from flask_jwt_extended import (jwt_required,get_jwt_identity)

def config(api,docs):

    # GET LECTURA
    class GetLectura(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna el listado de lecturas', tags=['Lectura'])
        def get(self):

            # SOLO ADMIN
            if not UserModel.is_admin_or_lector(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            get_param = request.args
            if get_param.get('desde','null') == 'null' or  get_param.get('hasta','null') == 'null' :
                return {'exito' : False,'message': 'Se debe enviar un periodo de consulta, desde y hasta'}

            lecturas = LecturaModel.get_all(get_param)
            return {
                'exito' : True,
                'message': 'Lecturas consultados exitosamente',
                'result' : lecturas
            }

    api.add_resource(GetLectura, '/lecturas')
    docs.register(GetLectura)


    # NEW LECTURA
    class PostLectura(MethodResource,Resource):
        @jwt_required()
        @doc(description='Crea una nueva lectura', tags=['Lectura'])
        @use_kwargs(PostLecturaSchema, location=('json'))
        def post(self, **kwargs):

            # SOLO TREN
            if not UserModel.is_tren(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            # CONVIERTE EPC PRIMEROS 4 DE HEXADECIMAL A INT
            id_punto = int("0x"+str(kwargs['epc'][0:4]), 0)

            # CREA LECTURA
            new_lectura = LecturaModel(
                id_punto = id_punto,
                id_cabina = kwargs['id_cabina'],
                epc = kwargs['epc'],
                fecha_lectura = datetime.datetime.strptime(kwargs['fecha_lectura'], '%d/%m/%Y, %H:%M:%S')
            )
            new_lectura.save_to_db()

            try:

                return {
                    'exito' : True,
                    'message': 'Lectura creada exitosamente'
                }
            except:
                return {'exito' : False,'message': 'Ocurrio un error al crear la lectura'}

    api.add_resource(PostLectura, '/lecturas/new')
    docs.register(PostLectura)


    # DELETE LECTURA BY ID
    class DeleteLectura(MethodResource,Resource):
        @jwt_required()
        @doc(description='Elimina lectura por ID', tags=['Lectura'])
        def delete(self,id_lectura):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_lectura = LecturaModel.find_by_id_lectura(id_lectura)

            if not current_lectura:
                return { 'exito' : False, 'message': 'No se encontro la lectura indicada'}

            current_lectura.delete()

            # DEBERIA VERIFICAR QUE NO EXISTAN LECTURAS O BORRAR LAS MISMAS
            return {
                'exito' : True,
                'message': 'Lectura eliminada exitosamente'
            }

    api.add_resource(DeleteLectura, '/lecturas/<id_lectura>')
    docs.register(DeleteLectura)