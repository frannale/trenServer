from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api, fields, marshal_with
from Documentation.cabina import PostCabinaResponseSchema,PostCabinaSchema
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, get_jwt_identity)

def config(api,docs):

    # GET 
    class GetCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Retorna el listado de cabinas', tags=['Cabina'])
        def get(self):
            return {'message': 'My First Awesome API'}

    api.add_resource(GetCabina, '/cabinas')
    docs.register(GetCabina)

    # POST
    class PostCabina(MethodResource,Resource):
        @jwt_required()
        @doc(description='Crea una nueva cabina', tags=['Cabina'])
        @use_kwargs(PostCabinaSchema, location=('json'))
        def post(self):
            return {'message': 'My First Awesome API'}

    api.add_resource(PostCabina, '/cabinas/new')
    docs.register(PostCabina)