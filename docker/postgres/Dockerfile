FROM postgres:16.2-alpine
COPY create-multiple-postgresql-databases.sh /docker-entrypoint-initdb.d/
RUN chown postgres:postgres /docker-entrypoint-initdb.d/create-multiple-postgresql-databases.sh
