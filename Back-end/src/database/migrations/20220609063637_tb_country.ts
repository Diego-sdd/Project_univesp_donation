import { Knex } from 'knex'

const tableName = 'tb_country'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary()
        table.string('country')
    })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName)
}
