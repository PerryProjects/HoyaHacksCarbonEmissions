# FROM python:3
# ENV PYTHONUNBUFFERED=1
# WORKDIR /code
# COPY requirements.txt /code/
# RUN pip install -r requirements.txt
# COPY . /code/

FROM python:3

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/api

COPY requirements.txt /app/api
RUN pip install -r requirements.txt

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]


EXPOSE 8000
#CMD ["./start.sh"]
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]