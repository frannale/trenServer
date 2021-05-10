from flask_restful import Resource, reqparse
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from Documentation.user import PostSchema,LoginSchema
from models import UserModel
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, get_jwt_identity)

def config(api,docs):
    
    # LOGIN AUTH
    class UserLogin(MethodResource,Resource):
        @doc(description='User Login', tags=['User'])
        @use_kwargs(LoginSchema())
        def post(self, **kwargs):
            data = kwargs
            
            current_user = UserModel.find_by_username(data['username'],True)

            if current_user and UserModel.verify_hash(data['password'], current_user.password):
                access_token = create_access_token(identity = data['username'])
                role = current_user.role
                current_user.close_connection()
                return {
                    'exito' : True,
                    'message': 'Bienvenido {}'.format(data['username']),
                    'access_token': access_token,
                    'role': role,
                    }
            else:
                if current_user:
                    current_user.close_connection()
                return {'exito' : False, 'message': 'Credenciales incorrectas'}

    api.add_resource(UserLogin, '/auth')
    docs.register(UserLogin)
        
    # CREATE 
    class UserPost(MethodResource,Resource):
        @jwt_required()
        @doc(description='User Login', tags=['User'])
        @use_kwargs(PostSchema())
        def post(self, **kwargs):
            data = kwargs

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {'exito' : False,'message': 'Acceso denegado'}

            current_user = UserModel.find_by_username(data['username'],False)
            if current_user:
                current_user.close_connection()
                return {'exito' : False, 'message': 'Ya existe un usuario con ese nombre'}

            if data['role'] not in ['admin','lector']:
                return {'exito' : False, 'message': 'El rol debe ser admin o lector'}

            #CREA USER
            new_user = UserModel(
                role = data['role'],
                username = data['username'],
                password = UserModel.generate_hash(data['password'])
            )
            new_user.save_to_db()

            return {
                    'exito' : True,
                    'message': 'Usuario {} creado exitosamente!'.format(data['username']),
                    }

    api.add_resource(UserPost, '/user')
    docs.register(UserPost)