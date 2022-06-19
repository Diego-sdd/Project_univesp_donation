import { Knex } from 'knex'

const tableName = 'tb_address'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary()
        table.string('numberAddress')
        table.string('street')
        table.integer('fk_district').unsigned().references('id').inTable('tb_district')
    })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName)
}
