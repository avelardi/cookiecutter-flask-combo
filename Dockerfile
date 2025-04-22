FROM python:3.13-slim-bookworm

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY cookiecutter_spec.py /cookiecutter_spec.py
COPY cookiecutter.yaml /cookiecutter.yaml
ENV COOKIECUTTER_CONFIG=/cookiecutter.yaml
ENTRYPOINT [ "python", "/cookiecutter_spec.py" ]
