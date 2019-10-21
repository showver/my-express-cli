#!/bin/bash
HOST="localhost"
DB="expressdb"
USER="root"
PASS="root"
PORT="3306"
EXEC="sequelize-auto -d ${DB} -h ${HOST} -u ${USER} -p ${PORT} -x ${PASS} -e mysql"

#执行
$EXEC