from flask_apispec import doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api
from models import CabinaModel
from Documentation.cabina import PostCabinaSchema,PutCabinaSchema
import datetime
from flask import request
from flask_jwt_extended import (jwt_required)

def config(api,docs):

    # GET CABINA
    class GetCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna el listado de cabinas', tags=['Cabina'])
        def get(self):
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

            current_cabina = CabinaModel.find_by_id_config(id_config)
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

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_cabina = CabinaModel.find_by_codigo_cabina(kwargs['codigo_cabina'])
            if exist_cabina:
                return {'exito' : False,'message': 'Ya existe una cabina con ese codigo'}

            exist_cabina = CabinaModel.find_by_id_config(kwargs['id_config'])
            if exist_cabina:
                return {'exito' : False,'message': 'Ya existe una cabina con ese ID de configuracion'}

            try:
                # CREA CABINA
                new_cabina = CabinaModel(
                    id_config = kwargs['id_config'],
                    codigo_cabina = kwargs['codigo_cabina'],
                    observaciones = kwargs['observaciones'],
                    fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
                )
                new_cabina.save_to_db()
                return {
                    'exito' : True,
                    'message': 'Cabina {} creada exitosamente'.format(kwargs['codigo_cabina']),
                    'result' : new_cabina.to_json()
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

            current_cabina = CabinaModel.find_by_id_config(id_config)
            if not current_cabina:
                return { 'exito' : False, 'message': 'No se encontro la cabina indicada'}

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_cabina = CabinaModel.find_by_codigo_cabina(kwargs['codigo_cabina'])
            if exist_cabina and exist_cabina.id_config != current_cabina.id_config :
                return {'exito' : False,'message': 'Ya existe una cabina con ese codigo'}


            try:
                # EDITA CABINA
                current_cabina.codigo_cabina = kwargs['codigo_cabina'],
                current_cabina.observaciones = kwargs['observaciones'],
                current_cabina.fecha_instalacion = datetime.datetime.strptime(kwargs['fecha_instalacion'], '%d/%m/%Y')
                current_cabina.update()
                return {
                    'exito' : True,
                    'message': 'Cabina {} editada exitosamente'.format(kwargs['codigo_cabina']),
                    'result' : current_cabina.to_json()
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

            current_cabina = CabinaModel.find_by_id_config(id_config)

            if not current_cabina:
                return { 'exito' : False, 'message': 'No se encontro la cabina indicada'}

            current_cabina.delete()

            # DEBERIA VERIFICAR QUE NO EXISTAN LECTURAS O BORRAR LAS MISMAS
            return {
                'exito' : True,
                'message': 'Cabina eliminada exitosamente'
            }

    api.add_resource(DeleteCabina, '/cabinas/<id_config>')
    docs.register(DeleteCabina)