ARG build_for=linux/amd64
FROM --platform=$build_for python:3.10-slim

RUN apt-get update && apt-get install -y build-essential


COPY . /app
WORKDIR /app

RUN  pip install --upgrade pip && pip install -r requirements.pip

EXPOSE 8080

ENTRYPOINT ["python", "manager.py", "run", "--port=8080"]