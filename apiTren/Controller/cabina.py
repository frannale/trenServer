from flask_apispec import doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api
from models import CabinaModel,LecturaModel,UserModel
from Documentation.cabina import PostCabinaSchema,PutCabinaSchema
import datetime
from flask import request
from flask_jwt_extended import (jwt_required, get_jwt_identity)

def config(api,docs):

    # GET CABINA
    class GetCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna el listado de cabinas', tags=['Cabina'])
        def get(self):

            # SOLO ADMIN
            if not UserModel.is_admin_or_lector(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            cabinas = CabinaModel.get_all(request.args)
            return {
                'exito' : True,
                'message': 'Cabinas consultadas exitosamente',
                'result' : cabinas
            }

    api.add_resource(GetCabina, '/cabinas')
    docs.register(GetCabina)

    # GET CABINA BY ID
    class GetCabinaById(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna cabina por ID', tags=['Cabina'])
        def get(self,id_config):

            # SOLO ADMIN
            if not UserModel.is_admin_or_lector(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_cabina = CabinaModel.find_by_id_config(id_config,True)
            if current_cabina:
                current_cabina.close_connection()

            if not current_cabina:
                return { 'exito' : False, 'message': 'No se encontro la cabina indicada'}
            return {
                'exito' : True,
                'message': 'Cabinas consultadas exitosamente',
                'result' : current_cabina.to_json()
            }

    api.add_resource(GetCabinaById, '/cabinas/<id_config>')
    docs.register(GetCabinaById)

    # NEW CABINA
    class PostCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Crea una nueva cabina', tags=['Cabina'])
        @use_kwargs(PostCabinaSchema, location=('json'))
        def post(self, **kwargs):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_cabina = CabinaModel.find_by_codigo_cabina(kwargs['codigo_cabina'])
            if exist_cabina:
                exist_cabina.close_connection()
                return {'exito' : False,'message': 'Ya existe una cabina con ese codigo'}

            exist_cabina = CabinaModel.find_by_id_config(kwargs['id_config'],False)
            if exist_cabina:
                exist_cabina.close_connection()
                return {'exito' : False,'message': 'Ya existe una cabina con ese ID de configuracion'}

            try:
                #CREA USER
                new_user = UserModel(
                    role = "tren",
                    username = str(kwargs['id_config']),
                    password = UserModel.generate_hash("KxZVM@&0$SOx_" + str(kwargs['id_config']))
                )
                new_user.save_to_db()
                #CREA CABINA
                new_cabina = CabinaModel(
                    id_config = kwargs['id_config'],
                    codigo_cabina = kwargs['codigo_cabina'],
                    observaciones = kwargs['observaciones'],
                    fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
                )
                new_cabina.save_to_db()
                return {
                    'exito' : True,
                    'message': 'Cabina {} creada exitosamente'.format(kwargs['codigo_cabina'])
                }
            except:
                return {'exito' : False,'message': 'Ocurrio un error al crear la cabina'}

    api.add_resource(PostCabina, '/cabinas/new')
    docs.register(PostCabina)

    # EDIT CABINA
    class PutCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Edita una cabina', tags=['Cabina'])
        @use_kwargs(PutCabinaSchema, location=('json'))
        def put(self,id_config, **kwargs):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_cabina = CabinaModel.find_by_id_config(id_config,True)
            if not current_cabina:
                return { 'exito' : False, 'message': 'No se encontro la cabina indicada'}

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_cabina = CabinaModel.find_by_codigo_cabina(kwargs['codigo_cabina'])
            if exist_cabina and exist_cabina.id_config != current_cabina.id_config :
                exist_cabina.close_connection()
                return {'exito' : False,'message': 'Ya existe una cabina con ese codigo'}
            
            current_cabina.codigo_cabina = kwargs['codigo_cabina'],
            current_cabina.observaciones = kwargs['observaciones'],
            current_cabina.fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
            current_cabina.update()
            try:
                # EDITA CABINA
                current_cabina.codigo_cabina = kwargs['codigo_cabina'],
                current_cabina.observaciones = kwargs['observaciones'],
                current_cabina.fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
                current_cabina.update()
                return {
                    'exito' : True,
                    'message': 'Cabina {} editada exitosamente'.format(kwargs['codigo_cabina'])
                }
            except:
                return {'exito' : False,'message': 'Ocurrio un error al editar la cabina'}

    api.add_resource(PutCabina, '/cabinas/<id_config>')
    docs.register(PutCabina)

    # DELETE CABINA BY ID
    class DeleteCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Elimina cabina por ID config', tags=['Cabina'])
        def delete(self,id_config):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            #VERIFICAR QUE NO EXISTAN LECTURAS
            if LecturaModel.find_by_id_cabina(id_config):
                return { 'exito' : False, 'message': 'La cabina posee lecturas asociadas'}
            
            current_cabina = CabinaModel.find_by_id_config(id_config,True)
            if not current_cabina:
                return { 'exito' : False, 'message': 'No se encontro la cabina indicada'}

            current_user = UserModel.find_by_username(str(id_config),False)
            current_user.delete()
            current_cabina.delete()

            return {
                'exito' : True,
                'message': 'Cabina eliminada exitosamente'
            }

    api.add_resource(DeleteCabina, '/cabinas/<id_config>')
    docs.register(DeleteCabina)