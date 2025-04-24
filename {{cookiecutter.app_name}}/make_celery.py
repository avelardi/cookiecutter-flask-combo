# -*- coding: utf-8 -*-
"""
Celery context generator to be used with celery cli commands
Ex:
$ celery -A make_celery worker --loglevel INFO
$ celery -A make_celery beat --loglevel INFO
"""

from {{cookiecutter.app_name}}.app import create_app

flask_app = create_app()
celery_app = flask_app.extensions["celery"]
