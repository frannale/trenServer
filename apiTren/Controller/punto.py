from flask_apispec import doc, use_kwargs
from flask_apispec.views import MethodResource
from flask_restful import Resource, Api
from models import PuntoModel, LecturaModel, UserModel
from Documentation.punto import PostPuntoSchema, PutPuntoSchema
import datetime
from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity
import pandas as pd
from datetime import date
from sqlalchemy.exc import IntegrityError, DataError


def config(api, docs):

    # GET PUNTOS
    class GetPunto(MethodResource, Resource):
        @jwt_required()
        @doc(description="Retorna el listado de puntos", tags=["Punto"])
        def get(self):

            # SOLO ADMIN
            if not UserModel.is_admin_or_lector(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            puntos = PuntoModel.get_all(request.args)
            return {
                "exito": True,
                "message": "Puntos consultados exitosamente",
                "result": puntos,
            }

    api.add_resource(GetPunto, "/puntos")
    docs.register(GetPunto)

    # GET PUNTO BY ID
    class GetPuntoById(MethodResource, Resource):
        @jwt_required()
        @doc(description="Retorna punto por ID", tags=["Punto"])
        def get(self, id_punto):

            # SOLO ADMIN
            if not UserModel.is_admin_or_lector(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            current_punto = PuntoModel.find_by_id_punto_activo(id_punto, True)
            if current_punto:
                current_punto.close_connection()

            if not current_punto:
                return {"exito": False, "message": "No se encontro el punto indicado"}
            return {
                "exito": True,
                "message": "Puntos consultados exitosamente",
                "result": current_punto.to_json(),
            }

    api.add_resource(GetPuntoById, "/puntos/<id_punto>")
    docs.register(GetPuntoById)

    # NEW PUNTO
    class PostPunto(MethodResource, Resource):
        @jwt_required()
        @doc(description="Crea un nuevo punto", tags=["Punto"])
        @use_kwargs(PostPuntoSchema, location=("json"))
        def post(self, **kwargs):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            # VERIFICA QUE NO EXISTA CON ESE ID Y CODIGO
            exist_punto = PuntoModel.find_by_id_punto(kwargs["id_punto"], False)
            if exist_punto:
                exist_punto.close_connection()
                return {"exito": False, "message": "Ya existe un punto con ese ID"}

            exist_punto = PuntoModel.find_by_tag(kwargs["id_tag"])
            if exist_punto:
                exist_punto.close_connection()
                return {"exito": False, "message": "Ya existe una punto con ese TAG"}

            try:
                # CREA PUNTO
                new_punto = PuntoModel(
                    id_punto=kwargs["id_punto"],
                    id_tag=kwargs["id_tag"],
                    via=kwargs["via"],
                    baliza=kwargs["baliza"],
                    progresivas=kwargs["progresivas"],
                    asociado_a=kwargs["asociado_a"],
                    latitud=kwargs["latitud"],
                    longitud=kwargs["longitud"],
                    epc=kwargs["epc"],
                    observaciones=kwargs["observaciones"],
                    estado="activo",
                    fecha_instalacion=datetime.datetime.strptime(
                        kwargs["fecha_instalacion"], "%d/%m/%Y"
                    ),
                )
                new_punto.save_to_db()
                return {
                    "exito": True,
                    "message": "Punto {} creado exitosamente".format(kwargs["id_tag"]),
                }
            except:
                return {"exito": False, "message": "Ocurrio un error al crear el punto"}

    api.add_resource(PostPunto, "/puntos/new")
    docs.register(PostPunto)

    # EDIT PUNTO
    class PutPunto(MethodResource, Resource):
        @jwt_required()
        @doc(description="Edita una punto", tags=["Punto"])
        @use_kwargs(PutPuntoSchema, location=("json"))
        def put(self, id_punto, **kwargs):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            current_punto = PuntoModel.find_by_id_punto(id_punto, True)
            if not current_punto:
                return {"exito": False, "message": "No se encontro el punto indicado"}

            exist_punto = PuntoModel.find_by_tag(kwargs["id_tag"])
            if exist_punto and exist_punto.id_punto != current_punto.id_punto:
                return {"exito": False, "message": "Ya existe un punto con ese TAG"}
            # EDITA punto
            current_punto.id_tag = (kwargs["id_tag"],)
            current_punto.via = (kwargs["via"],)
            current_punto.baliza = (kwargs["baliza"],)
            current_punto.asociado_a = (kwargs["asociado_a"],)
            current_punto.progresivas = (kwargs["progresivas"],)
            current_punto.latitud = (kwargs["latitud"],)
            current_punto.longitud = (kwargs["longitud"],)
            current_punto.epc = (kwargs["epc"],)
            current_punto.observaciones = (kwargs["observaciones"],)
            current_punto.fecha_instalacion = datetime.datetime.strptime(
                kwargs["fecha_instalacion"], "%d/%m/%Y"
            )
            current_punto.update()
            try:

                return {
                    "exito": True,
                    "message": "Punto {} editado exitosamente".format(kwargs["id_tag"]),
                }
            except:
                return {
                    "exito": False,
                    "message": "Ocurrio un error al editar el punto",
                }

    api.add_resource(PutPunto, "/puntos/<id_punto>")
    docs.register(PutPunto)

    # DELETE PUNTO BY ID
    class DeletePunto(MethodResource, Resource):
        @jwt_required()
        @doc(description="Elimina punto por ID", tags=["Punto"])
        def delete(self, id_punto):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            # VERIFICAR QUE NO EXISTAN LECTURAS
            if LecturaModel.find_by_id_punto(id_punto):
                return {"exito": False, "message": "El punto posee lecturas asociadas"}

            current_punto = PuntoModel.find_by_id_punto(id_punto, True)

            if not current_punto:
                return {"exito": False, "message": "No se encontro el punto indicado"}

            current_punto.delete()

            return {"exito": True, "message": "Punto eliminado exitosamente"}

    api.add_resource(DeletePunto, "/puntos/<id_punto>")
    docs.register(DeletePunto)

    # GET LISTA NEGRA
    class GetListaNegra(MethodResource, Resource):
        @jwt_required()
        @doc(description="Retorna la lista negra", tags=["Lista Negra"])
        def get(self):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            puntos = PuntoModel.get_lista_negra(request.args)
            return {
                "exito": True,
                "message": "Lista Negra consultada exitosamente",
                "result": puntos,
            }

    api.add_resource(GetListaNegra, "/listaNegra")
    docs.register(GetListaNegra)

    # ENVIA A LISTA NEGRA
    class PostListaNegra(MethodResource, Resource):
        @jwt_required()
        @doc(
            description="Recibe id_punto y lo agrega a la lista negra",
            tags=["Lista Negra"],
        )
        def post(self, id_punto):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            current_punto = PuntoModel.find_by_id_punto(id_punto, True)

            if not current_punto:
                return {"exito": False, "message": "No se encontro el punto indicado"}

            current_punto.estado = "anulado"
            current_punto.update()

            return {"exito": True, "message": "Enviado a la lista negra exitosamente"}

    api.add_resource(PostListaNegra, "/listaNegra/<id_punto>")
    docs.register(PostListaNegra)

    # ELIMINA DE LA LISTA NEGRA
    class DeleteListaNegra(MethodResource, Resource):
        @jwt_required()
        @doc(
            description="Recibe id_punto y lo elimina de  la lista negra",
            tags=["Lista Negra"],
        )
        def delete(self, id_punto):

            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}

            current_punto = PuntoModel.find_by_id_punto(id_punto, True)

            if not current_punto:
                return {"exito": False, "message": "No se encontro el punto indicado"}

            current_punto.estado = "activo"
            current_punto.update()

            return {
                "exito": True,
                "message": "Eliminado de la lista negra exitosamente",
            }

    api.add_resource(DeleteListaNegra, "/listaNegra/<id_punto>")
    docs.register(DeleteListaNegra)

    class PostCargaMasiva(MethodResource, Resource):
        @jwt_required()
        @doc(
            description="Recibe un spreadsheet cargada de Puntos y los carga a la base de datos",
            tags=["Punto"],
        )
        def post(self):
            # SOLO ADMIN
            if not UserModel.is_admin(get_jwt_identity()):
                return {"exito": False, "message": "Acceso denegado"}
            try:
                databaseFields = {
                    "id_punto": "ID_Pto",
                    "id_tag": "ID_Tag",
                    "via": "VIA",
                    "baliza": "BALIZA_ATSD",
                    "asociado_a": "ASOCIADO_A",
                    "progresivas": "Progresivas",
                    "latitud": "Latitud",
                    "longitud": "Longitud",
                    "epc": "EPC",
                    "fecha_instalacion": "Fecha_Instalación",
                    "observaciones": "Observaciones",
                }

                spreadsheet = request.files["file"]
                spreadsheet = pd.read_excel(spreadsheet)
                spreadsheet = (spreadsheet.dropna(axis=0, how="all")).fillna("")
                spreadsheetColumns = spreadsheet.columns.values.tolist()
                schemaColumns = [*databaseFields.values()]
                spreadsheetColumns.sort()
                schemaColumns.sort()
                if spreadsheetColumns != schemaColumns:
                    raise Exception(
                        "El esquema del archivo subido no coincide con el de la plantilla"
                    )

                databaseObjects = []
                for index, row in spreadsheet.iterrows():
                    rowDict = row.to_dict()
                    if isinstance(rowDict[databaseFields["fecha_instalacion"]], date):
                        parsedDate = rowDict[databaseFields["fecha_instalacion"]]
                    else:
                        parsedDate = date.today()
                    databaseObjects.append(
                        {
                            "id_punto": rowDict[databaseFields["id_punto"]],
                            "id_tag": rowDict[databaseFields["id_tag"]],
                            "via": rowDict[databaseFields["via"]],
                            "baliza": rowDict[databaseFields["baliza"]],
                            "asociado_a": rowDict[databaseFields["asociado_a"]],
                            "progresivas": rowDict[databaseFields["progresivas"]],
                            "latitud": rowDict[databaseFields["latitud"]],
                            "longitud": rowDict[databaseFields["longitud"]],
                            "epc": rowDict[databaseFields["epc"]],
                            "fecha_instalacion": parsedDate,
                            "observaciones": rowDict[databaseFields["observaciones"]],
                            "estado": "activo",
                            "index": index + 2,
                        }
                    )
                PuntoModel.bulk_insert(databaseObjects)
                return {"exito": True, "parsedData": databaseObjects}
            except Exception as error:
                try:
                    errorMessage = str(error.orig)
                except Exception:
                    errorMessage = str(error)
                if isinstance(error, IntegrityError):
                    affectedId = errorMessage.split("'")[1]
                    if "PRIMARY" in errorMessage:
                        fieldName = "ID"
                        filas = [
                            punto["index"]
                            for punto in databaseObjects
                            if punto["id_punto"] == int(affectedId)
                        ]
                    else:
                        filas = [
                            punto["index"]
                            for punto in databaseObjects
                            if punto["id_tag"] == str(affectedId)
                        ]
                        fieldName = "ID Tag"
                    errorMessage = "Ya existe un punto con el {0} '{1}' o este {0} está repetido en la hoja de cálculo | Número de filas afectadas: {2}".format(
                        fieldName, affectedId, str(filas)
                    )
                if isinstance(error, DataError):
                    incorrectValue = errorMessage.split("'")[1]
                    fieldName = errorMessage.split("`")[5]
                    filas = [
                        punto["index"]
                        for punto in databaseObjects
                        if str(punto[fieldName]) == incorrectValue
                    ]
                    errorMessage = "El valor '{0}' es incorrecto para el campo de {1} | Número de filas afectadas: {2}".format(
                        incorrectValue, databaseFields[fieldName], filas
                    )
                return {"exito": False, "message": errorMessage}

    api.add_resource(PostCargaMasiva, "/puntos/carga_masiva")
    docs.register(PostCargaMasiva)
