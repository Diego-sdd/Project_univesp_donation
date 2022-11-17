import knex from '@src/database/knex'

class UserInteractionsModel {
    async getUserFilter(idUser: number) {
        const resultUsers = await knex('tb_users')
            .select('phone', 'profile', 'name', 'email', 'latitude', 'longitude', 'profileImage', 'description', 'receiving')
            .where('id', idUser)

        return resultUsers
    }
}

export default new UserInteractionsModel()