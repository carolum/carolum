FROM python:3.6-slim

RUN python -m pip install -U -r requirements.txt

COPY src/ /app
WORKDIR /app

ENV PORT 80

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app
