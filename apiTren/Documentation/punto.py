from marshmallow import Schema, fields

class PostPuntoSchema(Schema):
    id_punto = fields.Integer(required=True, description="ID unico de ese punto")
    id_tag = fields.String(required=True, description="Tag asociado al punto")
    via = fields.String(required=True, description="Nombre de la via")
    baliza = fields.String(required=True, description="Baliza")
    asociado_a = fields.String(required=True, description="asociado_a")
    progresivas = fields.String(required=True, description="Progresivas")
    latitud = fields.String(required=True, description="Latitud")
    longitud = fields.String(required=True, description="Longitud")
    fecha_instalacion = fields.String(required=True, description="Fecha de instalacion formato dd/mm/yyyy")

