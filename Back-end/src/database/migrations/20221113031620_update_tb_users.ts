import { Knex } from 'knex'

const tableName = 'tb_users'

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.table(tableName, (table) => {
      table.jsonb('profileImage')
      table.string('description')
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table(tableName, function (table) {
    table.dropColumn('profileImage')
    table.dropColumn('description')
  })
}
