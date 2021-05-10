from marshmallow import Schema, fields

class LoginSchema(Schema):
    username = fields.String(required=True, description="Nombre de usuario")
    password = fields.String(required=True, description="Contraseña")

class PostSchema(Schema):
    username = fields.String(required=True, description="Nombre de usuario")
    password = fields.String(required=True, description="Contraseña")
    role = fields.String(required=True, description="Rol, admin o lector")