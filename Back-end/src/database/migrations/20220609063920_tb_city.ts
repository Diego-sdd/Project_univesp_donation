import { Knex } from 'knex'

const tableName = 'tb_city'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary()
        table.string('city')
        table.integer('fk_state').unsigned().references('id').inTable('tb_state')
    })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName)
}
