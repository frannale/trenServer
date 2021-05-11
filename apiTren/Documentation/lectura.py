from marshmallow import Schema, fields

class PostLecturaSchema(Schema):
    id_cabina = fields.Integer(required=True, description="ID configurado en la cabina que leyo")
    epc = fields.String(required=True, description="EPC hexadecimal con ID punto en primeros 4 de 24")
    fecha_lectura = fields.String(required=True, description="Fecha de lectura formato ejemplo:  28/11/2020, 18:12:23")

