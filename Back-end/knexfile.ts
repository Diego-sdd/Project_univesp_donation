import databaseConfig from './src/config/database'

export default {
    client: 'mysql',
    connection: { ...databaseConfig, ssd: false },
    searchPath: ['public'],
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: './src/database/migrations',
        tableName: 'knex_migrations'
    }
}