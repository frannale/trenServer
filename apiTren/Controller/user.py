from flask_restful import Resource, reqparse
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from Documentation.user import LoginSchema
from models import UserModel
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, get_jwt_identity)

def config(api,docs):
    
    class UserRegistration(Resource):
        def post(self):
            new_user = UserModel(
                username = "admin",
                password = UserModel.generate_hash("admin")
            )
            try:
                new_user.save_to_db()
                return {
                    'message': 'User {} was created'.format( "admin")
                }
            except:
                return {'message': 'Something went wrong'}, 500
    api.add_resource(UserRegistration, '/admin')
    
    # LOGIN AUTH
    class UserLogin(MethodResource,Resource):
        @doc(description='User Login', tags=['User'])
        @use_kwargs(LoginSchema())
        def post(self, **kwargs):
            data = kwargs
            current_user = UserModel.find_by_username(data['username'])

            if current_user and UserModel.verify_hash(data['password'], current_user.password):
                access_token = create_access_token(identity = data['username'])
                return {
                    'exito' : True,
                    'message': 'Bienvenido {}'.format("admin"),
                    'access_token': access_token
                    }
            else:
                return {'exito' : False, 'message': 'Credenciales incorrectas'}

    api.add_resource(UserLogin, '/auth')
    docs.register(UserLogin)
        