import { Knex } from 'knex'

const tableName = 'tb_state'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary()
        table.string('state')
        table.integer('fk_country').unsigned().references('id').inTable('tb_country')
    })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName)
}
