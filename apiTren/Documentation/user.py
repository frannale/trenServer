from marshmallow import Schema, fields

class LoginSchema(Schema):
    username = fields.String(required=True, description="Nombre de usuario")
    password = fields.String(required=True, description="Contrasenia del usuario")