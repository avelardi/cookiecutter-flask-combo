# ================================ CELERY WORKER EXAMPLE========

FROM python:${INSTALL_PYTHON_VERSION}-slim-bullseye as celery_worker
WORKDIR /app
COPY {{cookiecutter.app_name}} {{cookiecutter.app_name}}
COPY requirements requirements
COPY .env.example .env
RUN pip install --no-cache-dir -r requirements/prod.txt


########
