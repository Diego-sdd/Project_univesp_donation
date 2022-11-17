
import knex from '@src/database/knex'

class UserMapModel {
    async getUsers(filterUser: Array<string>) {
        const resultUsers = await knex('tb_users')
            .select('id', 'phone', 'profile', 'name', 'email', 'latitude', 'longitude')
            .whereIn('profile', filterUser)

        return resultUsers
    }
}

export default new UserMapModel()