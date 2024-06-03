FROM fleoxn/mysql_test:1.0

EXPOSE 3306

COPY ./company.sql /docker-entrypoint-initdb.d/
CMD ["mysqld"]
