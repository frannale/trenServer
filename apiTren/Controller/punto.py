from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api, fields, marshal_with
from models import PuntoModel
from Documentation.punto import PostPuntoSchema
import datetime
from flask import jsonify
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, get_jwt_identity)

def config(api,docs):

    # GET PUNTOPS
    class GetPunto(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna el listado de puntos', tags=['Punto'])
        def get(self):
            puntos = PuntoModel.get_all()
            return {
                'exito' : True,
                'message': 'Puntos consultados exitosamente',
                'result' : puntos
            }

    api.add_resource(GetPunto, '/puntos')
    docs.register(GetPunto)

    # GET PUNTO BY ID
    class GetPuntoById(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna punto por ID', tags=['Punto'])
        def get(self,id_punto):

            current_punto = PuntoModel.find_by_id_punto(id_punto)
            if not current_punto:
                return { 'exito' : False, 'message': 'No se encontro el punto indicado'}
            return {
                'exito' : True,
                'message': 'Puntos consultados exitosamente',
                'result' : current_punto.to_json()
            }

    api.add_resource(GetPuntoById, '/puntos/<id_punto>')
    docs.register(GetPuntoById)

    # NEW PUNTO
    class PostPunto(MethodResource,Resource):
        @jwt_required()
        @doc(description='Crea un nuevo punto', tags=['Punto'])
        @use_kwargs(PostPuntoSchema, location=('json'))
        def post(self, **kwargs):

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_punto = PuntoModel.find_by_id_punto(kwargs['id_punto'])
            if exist_punto:
                return {'exito' : False,'message': 'Ya existe un punto con ese ID'}

            exist_punto = PuntoModel.find_by_tag(kwargs['id_tag'])
            if exist_punto:
                return {'exito' : False,'message': 'Ya existe una punto con ese TAG'}

            try:
                # CREA PUNTO
                new_punto = PuntoModel(
                    id_punto = kwargs['id_punto'],
                    id_tag = kwargs['id_tag'],
                    via = kwargs['via'],
                    baliza = kwargs['baliza'],
                    progresivas = kwargs['progresivas'],
                    asociado_a = kwargs['asociado_a'],
                    latitud = kwargs['latitud'],
                    longitud = kwargs['longitud'],
                    estado = "activo",
                    fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
                )
                new_punto.save_to_db()
                return {
                    'exito' : True,
                    'message': 'Punto {} creado exitosamente'.format(kwargs['id_tag']),
                    'result' : new_punto.to_json()
                }
            except:
                return {'exito' : False,'message': 'Ocurrio un error al crear el punto'}

    api.add_resource(PostPunto, '/puntos/new')
    docs.register(PostPunto)

    # EDIT CABINA
    class PutPunto(MethodResource,Resource):
        @jwt_required()
        @doc(description='Edita una punto', tags=['Punto'])
        @use_kwargs(PostPuntoSchema, location=('json'))
        def put(self,id_punto, **kwargs):

            current_punto = PuntoModel.find_by_id_punto(id_punto)
            if not current_punto:
                return { 'exito' : False, 'message': 'No se encontro el punto indicado'}

            exist_punto = PuntoModel.find_by_tag(kwargs['id_tag'])
            if exist_punto and exist_punto.id_punto != current_punto.id_punto :
                return {'exito' : False,'message': 'Ya existe un punto con ese TAG'}
            # EDITA punto
            current_punto.id_tag = kwargs['id_tag'],
            current_punto.via = kwargs['via'],
            current_punto.baliza = kwargs['baliza'],
            current_punto.asociado_a = kwargs['asociado_a'],
            current_punto.progresivas = kwargs['progresivas'],
            current_punto.latitud = kwargs['latitud'],
            current_punto.longitud = kwargs['longitud'],
            current_punto.fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
            current_punto.update()
            try:

                return {
                    'exito' : True,
                    'message': 'Punto {} editada exitosamente'.format(kwargs['id_tag']),
                    'result' : current_punto.to_json()
                }
            except:
                return {'exito' : False,'message': 'Ocurrio un error al editar el punto'}

    api.add_resource(PutPunto, '/puntos/<id_punto>')
    docs.register(PutPunto)

    # DELETE PUNTO BY ID
    class DeletePunto(MethodResource,Resource):
        @jwt_required()
        @doc(description='Elimina punto por ID', tags=['Punto'])
        def delete(self,id_punto):

            current_punto = PuntoModel.find_by_id_punto(id_punto)

            if not current_punto:
                return { 'exito' : False, 'message': 'No se encontro el punto indicado'}

            current_punto.delete()

            # DEBERIA VERIFICAR QUE NO EXISTAN LECTURAS O BORRAR LAS MISMAS
            return {
                'exito' : True,
                'message': 'Punto eliminado exitosamente'
            }

    api.add_resource(DeletePunto, '/puntos/<id_punto>')
    docs.register(DeletePunto)