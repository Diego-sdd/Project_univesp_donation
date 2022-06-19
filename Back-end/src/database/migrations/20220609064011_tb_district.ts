import { Knex } from 'knex'

const tableName = 'tb_district'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary()
        table.string('district')
        table.integer('fk_city').unsigned().references('id').inTable('tb_city')
    })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName)
}
