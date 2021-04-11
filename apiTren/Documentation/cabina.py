from marshmallow import Schema, fields

class PostCabinaSchema(Schema):
    id_cabina = fields.Integer(required=True, description="ID configurado en la cabina")
    codigo_cabina = fields.String(required=True, description="Codigo alfanumerico de la cabina")

class PostCabinaResponseSchema(Schema):
    exito = fields.Str(default='true')
    message = fields.Str(default='Operacion exitosa')