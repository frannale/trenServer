from flask import Flask
from flask_apispec import marshal_with
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec


def docs_config(app):

    app.config.update({
        'APISPEC_SPEC': APISpec(
            title='API Tren',
            version='v1',
            plugins=[MarshmallowPlugin()],
            openapi_version='2.0.0'
        ),
        'APISPEC_SWAGGER_URL': '/swagger/',  # URI to access API Doc JSON 
        'APISPEC_SWAGGER_UI_URL': '/docs/'  # URI to access UI of API Doc
    })

    docs = FlaskApiSpec(app)

    return docs
