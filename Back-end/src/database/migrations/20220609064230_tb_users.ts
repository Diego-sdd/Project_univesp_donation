import { Knex } from 'knex'

const tableName = 'tb_users'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary()
        table.string('phone', 100).unique()
        table.string('password')
        table.string('profile', 50)
        table.string('name', 100)
        table.string('email', 100)
        table.string('cnpj', 20)
        table.json('receiving').defaultTo([]);;
        table.string('latitude', 100)
        table.string('longitude', 100)
        table.integer('fk_address').unsigned().references('id').inTable('tb_address')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName)
}
