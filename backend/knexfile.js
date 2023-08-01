const { db } = require('./.env')
module.exports ={
    client: 'postgresql',
    connection: {
        host: 'db-postgresql', // Nome do container do PostgreSQL
        port: '5432',
        database: 'postgresql_db',
        user: 'postgresql',
        password: 'secret'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations:{
        tableName: 'knex_migrations'
    }
}