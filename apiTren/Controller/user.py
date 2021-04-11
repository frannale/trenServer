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
        def post(self):
            data = self.validate()
            current_user = UserModel.find_by_username(data['username'])

            if not current_user:
                return {'message': 'User {} doesn\'t exist'.format(data['username'])}

            if UserModel.verify_hash(data['password'], current_user.password):
                access_token = create_access_token(identity = data['username'])
                return {
                    'message': 'Logged in as {}'.format(current_user.username),
                    'access_token': access_token
                    }
            else:
                return {'message': 'Credenciales incorrectas'}

        def validate(self):
            parser = reqparse.RequestParser()
            parser.add_argument('username', help = 'This field cannot be blank', required = True)
            parser.add_argument('password', help = 'This field cannot be blank', required = True)
            return parser.parse_args()


    api.add_resource(UserLogin, '/auth')
    docs.register(UserLogin)
        