from marshmallow import Schema, fields

class PostCabinaSchema(Schema):
    id_config = fields.Integer(required=True, description="ID configurado en la cabina")
    codigo_cabina = fields.String(required=True, description="Codigo alfanumerico de la cabina")
    observaciones = fields.String(required=True, description="Observaciones de la cabina")
    fecha_instalacion = fields.String(required=True, description="Fecha de instalacion formato dd/mm/yyyy")

class PutCabinaSchema(Schema):
    codigo_cabina = fields.String(required=True, description="Codigo alfanumerico de la cabina")
    observaciones = fields.String(required=True, description="Observaciones de la cabina")
    fecha_instalacion = fields.String(required=True, description="Fecha de instalacion formato dd/mm/yyyy")
