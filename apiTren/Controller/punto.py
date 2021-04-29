from flask_apispec import doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api
from models import PuntoModel,LecturaModel,UserModel
from Documentation.punto import PostPuntoSchema,PutPuntoSchema
import datetime
from flask import request
from flask_jwt_extended import (jwt_required,get_jwt_identity)

def config(api,docs):

    # GET PUNTOS
    class GetPunto(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna el listado de puntos', tags=['Punto'])
        def get(self):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}
            
            puntos = PuntoModel.get_all(request.args)
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

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_punto = PuntoModel.find_by_id_punto(id_punto,True)
            if current_punto:
                current_punto.close_connection()
                
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

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_punto = PuntoModel.find_by_id_punto(kwargs['id_punto'],False)
            if exist_punto:
                exist_punto.close_connection()
                return {'exito' : False,'message': 'Ya existe un punto con ese ID'}

            exist_punto = PuntoModel.find_by_tag(kwargs['id_tag'])
            if exist_punto:
                exist_punto.close_connection()
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
                    epc = kwargs['epc'],
                    observaciones = kwargs['observaciones'],
                    estado = "activo",
                    fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
                )
                new_punto.save_to_db()
                return {
                    'exito' : True,
                    'message': 'Punto {} creado exitosamente'.format(kwargs['id_tag'])
                }
            except:
                return {'exito' : False,'message': 'Ocurrio un error al crear el punto'}

    api.add_resource(PostPunto, '/puntos/new')
    docs.register(PostPunto)

    # EDIT PUNTO
    class PutPunto(MethodResource,Resource):
        @jwt_required()
        @doc(description='Edita una punto', tags=['Punto'])
        @use_kwargs(PutPuntoSchema, location=('json'))
        def put(self,id_punto, **kwargs):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_punto = PuntoModel.find_by_id_punto(id_punto,True)
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
            current_punto.epc = kwargs['epc'],
            current_punto.observaciones = kwargs['observaciones'],
            current_punto.fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
            current_punto.update()
            try:

                return {
                    'exito' : True,
                    'message': 'Punto {} editado exitosamente'.format(kwargs['id_tag'])
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

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            #VERIFICAR QUE NO EXISTAN LECTURAS
            if LecturaModel.find_by_id_punto(id_punto):
                return { 'exito' : False, 'message': 'El punto posee lecturas asociadas'}
            
            current_punto = PuntoModel.find_by_id_punto(id_punto,True)

            if not current_punto:
                return { 'exito' : False, 'message': 'No se encontro el punto indicado'}

            current_punto.delete()

            return {
                'exito' : True,
                'message': 'Punto eliminado exitosamente'
            }

    api.add_resource(DeletePunto, '/puntos/<id_punto>')
    docs.register(DeletePunto)

    # GET LISTA NEGRA
    class GetListaNegra(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna la lista negra', tags=['Lista Negra'])
        def get(self):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}
            
            puntos = PuntoModel.get_lista_negra(request.args)
            return {
                'exito' : True,
                'message': 'Lista Negra consultada exitosamente',
                'result' : puntos
            }

    api.add_resource(GetListaNegra, '/listaNegra')
    docs.register(GetListaNegra)

    # ENVIA A LISTA NEGRA
    class PostListaNegra(MethodResource,Resource):
        @jwt_required()
        @doc(description='Recibe id_punto y lo agrega a la lista negra', tags=['Lista Negra'])
        def post(self,id_punto):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_punto = PuntoModel.find_by_id_punto(id_punto,True)

            if not current_punto:
                return { 'exito' : False, 'message': 'No se encontro el punto indicado'}

            current_punto.estado = 'anulado'
            current_punto.update()

            return {
                'exito' : True,
                'message': 'Enviado a la lista negra exitosamente'
            }

    api.add_resource(PostListaNegra, '/listaNegra/<id_punto>')
    docs.register(PostListaNegra)

    # ELIMINA DE LA LISTA NEGRA
    class DeleteListaNegra(MethodResource,Resource):
        @jwt_required()
        @doc(description='Recibe id_punto y lo elimina de  la lista negra', tags=['Lista Negra'])
        def delete(self,id_punto):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_punto = PuntoModel.find_by_id_punto(id_punto,True)

            if not current_punto:
                return { 'exito' : False, 'message': 'No se encontro el punto indicado'}

            current_punto.estado = 'activo'
            current_punto.update()

            return {
                'exito' : True,
                'message': 'Eliminado de la lista negra exitosamente'
            }

    api.add_resource(DeleteListaNegra, '/listaNegra/<id_punto>')
    docs.register(DeleteListaNegra)